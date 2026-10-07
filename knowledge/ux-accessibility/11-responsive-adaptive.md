# M11 — Responsive & Adaptive Experience

> Bidang C · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md)

## Responsive bukan mengecilkan desktop

Responsive mengatur layout mengikuti ruang, sementara adaptive decisions dapat mengubah perilaku sesuai kemampuan input atau kebutuhan. Gunakan content-first breakpoint: saat label bertabrakan atau paragraf terlalu lebar, ubah struktur. Hindari mendeteksi nama perangkat sebagai pengganti kemampuan nyata.

## Ukuran dan unit

Gunakan persentase untuk hubungan ruang, `rem` untuk skala terkait teks, dan viewport unit saat sesuai. Tinggi viewport mobile berubah ketika browser chrome muncul; pilih unit dan fallback berdasarkan tujuan. Jangan membuat hero tinggi tetap yang memotong konten saat zoom, keyboard virtual atau landscape.

Container query membantu komponen menyesuaikan container, bukan viewport seluruh halaman. Feature query menyediakan peningkatan dengan fallback. API atau CSS baru harus diperiksa dukungan browser saat implementasi. Tidak semua fitur baru wajib dipakai demi kualitas.

## Input capability

Sentuhan tidak memiliki hover persisten. Efek pointer mengikuti kursor perlu dibatasi pada perangkat yang mendukung hover/fine pointer dan tetap punya tampilan statis. Perangkat hibrida dapat mempunyai mouse dan layar sentuh; satu media query tidak menjelaskan seluruh cara pengguna berinteraksi. Tombol dan informasi inti harus bekerja di semua input yang ditargetkan.

Gestur swipe atau drag dapat memberi peningkatan, tetapi sediakan kontrol alternatif. Jangan mengambil alih scroll native tanpa alasan yang kuat dan verifikasi dampak. Cursor custom tidak boleh menghilangkan pointer yang dikenali pengguna atau mengaburkan hit target.

## Content resilience

Uji judul panjang, nama panjang, kata tanpa spasi, label multibahasa, gambar gagal, font fallback dan daftar kosong. Flex/grid item kadang membutuhkan `min-width:0`; text wrap perlu dipilih sesuai fungsi. Jangan menggunakan ellipsis pada informasi penting tanpa akses ke teks penuh.

Responsive image memperhatikan ukuran render, DPR dan sumber. Layar kecil dengan DPR tinggi dapat memilih sumber lebih besar; `sizes` harus mencerminkan lebar elemen. Screenshot bukti dapat membutuhkan detail lokal, bukan sekadar versi lebih kecil dari seluruh layar.

## Orientasi, zoom dan fokus

Jangan membatasi portrait kecuali benar-benar esensial. Pada landscape pendek, sticky header besar dapat memakan area isi. Zoom browser dan pembesaran teks perlu diuji terpisah; keduanya dapat menghasilkan wrapping berbeda. Fokus yang terscroll harus tidak tertutup header atau toolbar fixed.

```css
section[id] { scroll-margin-block-start: 6rem; }
img { max-inline-size: 100%; block-size: auto; }
.card { min-inline-size: 0; }
```

Nilai offset harus mengikuti header aktual, bukan disalin tanpa verifikasi.

## Matriks perangkat

Mulai dari viewport sempit, lebar menengah, desktop, landscape, touch/coarse, keyboard dan reduced motion. Tambahkan browser berdasarkan target, termasuk Safari/WebKit bila pengunjung memakai iOS. Emulasi membantu inspeksi awal, tetapi tidak membuktikan performa atau behavior seluruh ponsel nyata.

## Diagnosis

Scroll horizontal: periksa elemen penyebab dan bounding box sebelum menyembunyikan overflow. Navigasi hilang pada resize: reset state sesuai breakpoint atau hindari dua sumber navigasi yang tidak sinkron. Motion terasa bagus di desktop tetapi berat di HP: kurangi area dan pekerjaan; responsive motion perlu mengubah intensitas, bukan hanya skala.

## Latihan penerapan

Buat matriks layout, input dan preferensi. Uji lebar di antara breakpoint, bukan hanya dua screenshot akhir. Catat masalah yang hanya muncul pada perangkat nyata.

## Bukti penerimaan

- [ ] Tidak ada isi esensial hilang di viewport sempit.
- [ ] Hover bukan prasyarat.
- [ ] Orientasi dan zoom tidak memblokir tugas.
- [ ] Emulasi dan pengujian perangkat nyata dilaporkan terpisah.

## Hubungan dan dampak perubahan

[M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M10 — Interaction Design](10-interaction-design.md), [M12 — Accessibility & Inclusive Design](12-accessibility.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M23 — Scroll & Visual Storytelling](../motion/23-scroll-storytelling.md), [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S15, S19, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
