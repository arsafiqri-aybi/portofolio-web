# M24 — Animation & Graphics Engineering

> Bidang F · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M21 — Motion Foundations](21-motion-foundations.md)

## Memilih medium gerak

CSS cocok untuk style/state DOM; WAAPI untuk kontrol animation DOM; SVG untuk bentuk terstruktur; Canvas untuk raster yang digambar ulang; WebGL untuk rendering GPU yang lebih kompleks. Pilih berdasarkan isi, jumlah objek, kebutuhan interaksi/semantik dan biaya. Lebih canggih tidak otomatis lebih cocok.

## Time-based animation

rAF memberi timestamp. Kecepatan dikalikan delta waktu, bukan jumlah callback. Untuk gerak periodik, hitung posisi dari elapsed time agar tidak menumpuk error. Untuk simulasi, fixed timestep dapat membantu konsistensi, dengan batas jumlah substep agar tab yang lama hidden tidak memicu pekerjaan tak terbatas.

```js
let previous;
function step(now) {
  const dt = previous === undefined ? 0 : Math.min((now - previous) / 1000, .05);
  previous = now;
  update(dt); // contoh: fungsi simulasi milik scene
  render();   // contoh: menggambar state final
  frame = requestAnimationFrame(step);
}
```

`update`, `render` dan `frame` di atas adalah pseudocode integrasi. Versi runnable ada di folder examples. Reset timestamp ketika resume dan batalkan frame ketika dispose.

## Geometry dan koordinat

Bedakan koordinat viewport, halaman, container, SVG viewBox dan canvas backing store. Pointer perlu dikonversi sesuai bounding rect. Resize mengubah area dan mungkin aspect ratio. Transform CSS tidak selalu sama dengan koordinat gambar internal. Hit testing membutuhkan mapping yang konsisten.

Untuk SVG, viewBox mengatur ruang koordinat; preserveAspectRatio mengatur pemetaan. Stroke, path length dan mask dapat mendukung motion, tetapi kompleksitas path dan filter tetap mempunyai biaya. SVG informatif membutuhkan semantik/padanan.

## Canvas engineering

Canvas bitmap tidak memberi DOM untuk setiap objek. Informasi utama tetap dalam HTML atau padanan yang dapat diakses. Atur ukuran backing store sesuai CSS size dan DPR dengan cap yang diuji. Scale context dengan benar dan reset transform saat resize agar scaling tidak menumpuk.

Gambar ulang seluruh canvas mempunyai biaya berdasarkan area dan isi. Offscreen pre-render membantu bagian statis bila bermanfaat. Batasi jumlah partikel, blur dan transparansi berdasarkan frame trace. Stop saat offscreen/hidden/reduced motion; gambar frame statis yang masih bermakna.

## WebGL sebagai cabang lanjutan

Pelajari buffers, attributes, shaders, uniforms, texture, draw call, blending, projection dan resource lifecycle. Scene memerlukan fallback bila context gagal/lost. Texture besar menaikkan memori; mipmap dan filtering memengaruhi hasil. Hindari satu draw call per objek ketika batching/instancing memberi manfaat.

Three-dimensional scene tidak menggantikan isi portofolio. Kontrol kamera/drag harus mempunyai alternatif atau tidak menjadi prasyarat. Periksa GPU/perangkat nyata; desktop yang kuat tidak membuktikan mobile lancar. Cabang ini adalah pengantar operasional, bukan ensiklopedia shader lengkap.

## Resource dan cleanup

Lepas listener, ResizeObserver, IntersectionObserver, timer, rAF dan animation. Untuk WebGL, hapus buffer/texture/program yang dimiliki ketika dispose. Async asset yang selesai setelah dispose jangan menulis ke komponen yang sudah hilang. Audio/video juga punya lifecycle pause dan release sesuai kebutuhan.

## Diagnosis

Animasi makin cepat di refresh tinggi: delta tidak digunakan. Canvas buram: backing store salah; canvas berat: DPR/area terlalu tinggi. Scene kosong: cek resource, context dan shader errors, lalu fallback. Memory terus naik: cari retained closures, event listener, texture dan layer. Trace setiap perubahan sebelum menyebut optimasi berhasil.

## Latihan penerapan

Jalankan contoh canvas di repo, ubah ukuran dan preferensi gerak. Jelaskan mapping CSS pixel ke backing store serta alasan scene berhenti ketika tidak diperlukan.

## Bukti penerimaan

- [ ] Animation berbasis waktu dan mempunyai cleanup.
- [ ] Resize/DPR ditangani.
- [ ] Informasi utama tersedia di luar bitmap.
- [ ] Kegagalan medium mempunyai fallback.

## Hubungan dan dampak perubahan

[M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M21 — Motion Foundations](21-motion-foundations.md), [M22 — Interface Motion](22-interface-motion.md), [M23 — Scroll & Visual Storytelling](23-scroll-storytelling.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S05, S06, S31, S32 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [08-webgl-primer](../../deep-dives/08-webgl-primer.md).
