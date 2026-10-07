# M25 — Loading & Asset Performance

> Bidang G · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md)

## Loading sebagai jalur kritis

Halaman cepat bukan hanya bundle kecil. Periksa dokumen, CSS kritis, font, gambar utama, discovery resource dan kemampuan browser menampilkan isi. Resource yang ditemukan terlambat dapat menunda konten meski ukurannya kecil. Sebaliknya, preload berlebihan membuat resource saling berebut prioritas.

## Anggaran performa

Tentukan budget per template halaman: initial transfer, JavaScript, CSS, font, gambar utama, jumlah request dan kerja main thread. Budget adalah keputusan proyek, bukan angka universal. Mulai dari baseline yang diukur, kemudian pilih batas yang melindungi target perangkat. Detail contoh budget ada di quality/PERFORMANCE-BUDGET.md.

Setiap penambahan library, video atau scene mempunyai biaya. Catat manfaat dan dampak terhadap budget. Kebutuhan visual dapat dipenuhi dengan representasi lebih ringan, lazy activation atau kualitas adaptif. Jangan menghapus bukti penting hanya demi score.

## Gambar

Ekspor gambar sesuai ukuran tampil, rasio, format dan kualitas. `srcset/sizes` membantu browser memilih sumber, tetapi konfigurasi salah dapat memilih file besar. `width/height` menyediakan rasio agar layout stabil. Gambar konten awal yang penting jangan otomatis lazy. Thumbnail bawah dapat lazy dengan dimensi tetap.

AVIF/WebP dapat menghemat byte pada foto tertentu; hasil bergantung isi, encoding dan dukungan. SVG cocok untuk vektor tertentu, bukan foto. Kompresi diuji dengan crop/detail nyata; teks screenshot yang rusak mengurangi nilai bukti.

## Font dan CSS

Font sistem menghindari request. Bila font khusus penting, kurangi keluarga/weight/subset dan uji fallback. Preload hanya resource kritis yang benar-benar terpakai. CSS besar atau blocking dapat menunda render; hapus aturan tidak terpakai secara hati-hati karena state dinamis bisa belum terlihat pada pemindaian.

Critical CSS inline dapat membantu kasus tertentu, tetapi menambah kompleksitas caching dan CSP. Pada portofolio kecil, stylesheet sederhana sering cukup. Optimasi diukur terhadap baseline sebelum diadopsi.

## JavaScript

Pertahankan isi penting di HTML. Kode enhancement dimuat sesuai kebutuhan. Dynamic import dapat menunda scene berat sampai pengguna memilih atau area relevan, tetapi tidak boleh menyebabkan delay mengejutkan pada tugas utama. Tree shaking bergantung module dan library; tidak semua import otomatis minimal.

Minification mengurangi transfer, bukan jumlah pekerjaan runtime secara otomatis. Library kecil yang menjalankan banyak DOM work bisa lebih berat daripada file lebih besar yang jarang aktif. Ukur parse, execution dan interaction selain byte.

## Video, embeds dan pihak ketiga

Gunakan poster dan kontrol untuk demonstrasi. Video tidak harus dimuat penuh pada awal. Embed pihak ketiga dapat menambah tracking, script dan request; gunakan preview/link atau activation atas pilihan pengguna bila sesuai. Beri fallback jika layanan tidak tersedia.

Portofolio tanpa analytics berbayar atau backend tetap dapat diperiksa melalui testing. Jangan menambah trackers sebagai default. Untuk proyek Rp0, biaya pemeliharaan dan privasi juga merupakan pertimbangan.

## Cache dan output

Resource immutable dengan nama hash membantu versi; HTML perlu dapat menunjuk release terkini. Kemampuan header mengikuti host dan harus diperiksa, bukan diasumsikan. GitHub Pages tidak memberikan seluruh kontrol server custom. Jangan menulis service worker agresif sebelum kebutuhan offline dan invalidasi dirancang.

## Diagnosis

Konten utama lambat: identifikasi elemen LCP dan jalur resource aktual. Gambar muncul terlambat: cek discovery, lazy flag, sizes dan request. Font menggeser layout: uji fallback metrics. Banyak resource tak terpakai: tinjau preload dan dependency. Report setelah optimasi mencatat kondisi sama, raw runs dan perubahan konkret.

## Latihan penerapan

Inventaris resource satu halaman. Identifikasi payload awal versus yang bisa ditunda. Terapkan satu optimasi lalu bandingkan pengukuran dengan kondisi yang sama.

## Bukti penerimaan

- [ ] Budget dan kondisi ukur tertulis.
- [ ] Media punya ukuran dan prioritas yang sesuai.
- [ ] Konten inti tidak menunggu scene berat.
- [ ] Klaim peningkatan didukung pengukuran sebanding.

## Hubungan dan dampak perubahan

[M07 — Typography](../visual-design/07-typography.md), [M08 — Color, Surface & Assets](../visual-design/08-color-surface-assets.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md), [M26 — Runtime & Motion Performance](26-runtime-performance.md), [M30 — Performance Measurement](../verification-production/30-performance-measurement.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S03, S16, S17, S33 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [05-media-font-pipeline](../../deep-dives/05-media-font-pipeline.md).
