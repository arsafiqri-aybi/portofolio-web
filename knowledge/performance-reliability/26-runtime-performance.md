# M26 — Runtime & Motion Performance

> Bidang G · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md)

## Runtime performance

Kelancaran mencakup respons input, frame yang stabil dan penggunaan memory yang terkendali. Pada display 60Hz, interval nominal sekitar 16.7ms; 120Hz sekitar 8.3ms. Ini bukan seluruh jatah untuk kode aplikasi: browser dan sistem juga bekerja. FPS rata-rata dapat menyembunyikan spike yang terasa oleh pengguna.

## Main thread dan long tasks

Input, JavaScript, layout dan beberapa kerja render saling bersaing. Handler yang berat menunda respons. Bagi pekerjaan besar jika bisa tanpa mengubah hasil, kurangi DOM work, atau pindahkan perhitungan murni ke Worker bila overhead komunikasi masuk akal. Worker tidak dapat langsung mengubah DOM.

Gunakan rAF untuk penulisan visual yang perlu sinkron frame, bukan membungkus semua pekerjaan berat. Debounce input sesuai behavior; filter proyek kecil mungkin tidak perlu debounce. Respons yang tertunda hanya demi optimasi dapat mengurangi UX.

## Read, compute, write

Batch geometry read, lakukan perhitungan, lalu tulis style. Hindari loop yang setiap iterasi membaca ukuran setelah write sebelumnya. Cache geometry ketika valid dan invalidasi saat resize/content berubah. Cache yang salah bisa lebih buruk daripada read yang terukur.

ResizeObserver callback yang mengubah ukuran observed element dapat membuat loop. Periksa relasi dan batas perubahan. IntersectionObserver membantu membatasi kerja ke bagian relevan, tetapi jangan menganggap callback terjadi untuk semua frame.

## Layer, paint dan GPU

Transform/opacity sering menghindari layout, tetapi biaya compositing/layer tetap ada. Banyak layer besar, blur, backdrop-filter, shadow luas, transparent overlap dan canvas DPR tinggi dapat membebani GPU/memory. `will-change` bukan switch gratis. Gunakan hanya bila ada bukti manfaat.

Periksa trace dan layer information yang tersedia. Efek yang halus di desktop belum tentu sesuai perangkat mobile. Optimasi scene dapat mengurangi resolution, object count, effect density atau refresh work sesuai kondisi yang diuji.

## Lifecycle dan visibility

Hentikan loop ketika scene offscreen, tab hidden atau reduced motion aktif. Resume dengan timestamp baru. Disconnect observer dan listener saat dispose. Font/media async yang selesai setelah komponen hilang tidak boleh mempertahankan state besar tanpa alasan.

Memory leak dapat berasal closure, listener global, observer, interval, object URL, texture atau node detached. Lakukan repeated mount/unmount atau opening/closing ketika fitur mempunyai lifecycle. Garbage collection sesaat bukan bukti leak; tren retensi setelah aktivitas sebanding perlu ditelusuri.

## Motion quality

Ukur interval frame dan spike selama scroll, filter dan transisi. Kualitas bukan “selalu 60fps”: refresh rate, browser dan device bervariasi. Catat proporsi frame yang melewati batas proyek dalam kondisi uji, dan jangan menyamakan rAF interval dengan keseluruhan presentation timing.

## Prioritas optimasi

Pertama pastikan fungsi dan fallback benar, kemudian profile. Optimalkan hotspot nyata. Hindari memoization atau micro-optimization seluruh fungsi kecil ketika bottleneck adalah blur full-screen. Setiap optimasi mempunyai trade-off: cache menambah invalidation; batching dapat menunda state; adaptive quality memerlukan konsistensi.

## Diagnosis

Jank hanya ketika scroll: cari synchronous layout, listener dan layer. Jank pada filter: cari DOM mutation besar dan image decode. Makin lambat setelah beberapa menit: periksa loop/listener ganda serta memory. Scene berat tanpa JS signifikan: periksa paint/GPU/area bitmap. Simpan trace sebelum dan sesudah untuk mendukung klaim.

## Latihan penerapan

Profile interaksi sambil scene berjalan, lalu ulangi dengan scene berhenti. Identifikasi bottleneck, ubah satu faktor, dan bandingkan trace.

## Bukti penerimaan

- [ ] Optimasi menargetkan penyebab yang terlihat.
- [ ] Loop berhenti pada state tidak relevan.
- [ ] Lifecycle tidak menambah listener/rAF ganda.
- [ ] Frame dan memory dilaporkan dalam kondisi uji.

## Hubungan dan dampak perubahan

[M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M21 — Motion Foundations](../motion/21-motion-foundations.md), [M22 — Interface Motion](../motion/22-interface-motion.md), [M23 — Scroll & Visual Storytelling](../motion/23-scroll-storytelling.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md), [M25 — Loading & Asset Performance](25-loading-assets.md), [M30 — Performance Measurement](../verification-production/30-performance-measurement.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S05, S20, S21, S34 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
