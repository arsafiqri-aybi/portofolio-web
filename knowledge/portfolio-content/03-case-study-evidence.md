# M03 — Case Study & Evidence

> Bidang A · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M01 — Portfolio Strategy](01-portfolio-strategy.md), [M02 — Content Architecture](02-content-architecture.md)

## Case study sebagai penalaran yang dapat diperiksa

Case study menghubungkan masalah, pilihan, implementasi, dan hasil. Screenshot saja menunjukkan bentuk akhir; penjelasan keputusan memperlihatkan kemampuan. Mulai dengan ringkasan singkat berisi konteks, peran dan kontribusi. Proyek tim harus membedakan pekerjaan pemilik dari pekerjaan orang lain tanpa mengecilkan kolaborasi.

## Struktur narasi

Gunakan alur: konteks → hambatan → batas → alternatif → keputusan → implementasi → verifikasi → hasil → pembelajaran. Tidak setiap bagian memerlukan panjang sama. Hambatan dapat berupa waktu, perangkat, isi, performa, atau kemampuan host. Alternatif memperjelas alasan; jangan menciptakan alternatif yang sebenarnya tidak pernah dipertimbangkan pada proyek nyata.

Berikan contoh sebelum/sesudah pada masalah yang konkret: navigasi tertutup header, gambar menggeser layout, atau efek terasa terlambat. Sebelum/sesudah dengan kondisi berbeda tidak membuktikan peningkatan. Untuk benchmark, samakan halaman, perangkat, browser, jaringan, cache dan prosedur.

## Jenis bukti

| Jenis | Apa yang dibuktikan | Batas |
| --- | --- | --- |
| Repo dan commit | Riwayat implementasi yang dapat diperiksa | Tidak membuktikan seluruh kode ditulis sendiri |
| Demo berjalan | Perilaku pada keadaan yang dicoba | Tidak membuktikan kompatibilitas semua perangkat |
| Screenshot/video | Bentuk dan urutan tertentu | Tidak membuktikan keyboard atau performa |
| Laporan pengujian | Hasil dalam protokol tercatat | Terikat kondisi dan versi |
| Feedback manusia | Pengalaman peserta yang diamati | Tidak otomatis mewakili populasi |

Klaim “lebih cepat 40%” memerlukan baseline, formula, nilai mentah dan konteks. Tanpa itu, tuliskan perubahan konkret: mengurangi payload gambar, mengganti efek layout dengan transform, atau menyediakan fallback. Jangan mengganti keterbatasan data dengan angka meyakinkan.

## Status proyek dan kejujuran editorial

Bedakan live, prototype, experiment, archived, dan contribution. Karya fiktif untuk latihan diberi label contoh. Produk prototipe boleh menunjukkan kemampuan desain, tetapi jangan diberi pelanggan, omzet, testimoni atau dampak bisnis rekaan. Bila NDA berlaku, gunakan ringkasan yang diizinkan atau contoh ulang yang jelas terpisah.

Pertahankan bukti yang dapat disalin: URL, tanggal, commit, file laporan, kondisi ukur. Screenshot yang menampilkan data pribadi harus direduksi atau diganti aset yang diizinkan. Tidak perlu mempublikasikan log lengkap bila berisi rahasia.

## Media dan anotasi

Pilih satu gambar utama yang menerangkan hasil. Gambar proses membantu bila menjelaskan keputusan; board besar yang tidak terbaca pada mobile perlu crop dan penjelasan. Caption menjelaskan apa yang perlu diperhatikan. Alt berfungsi sebagai padanan sesuai konteks, bukan menyalin seluruh caption otomatis.

Untuk video, sediakan poster, durasi, kontrol, dan padanan informasi yang relevan. Video dekoratif tidak boleh memuat satu-satunya penjelasan proyek. Catat perubahan yang belum terlihat pada video agar demo tidak menyesatkan setelah kode diperbarui.

## Rubrik kedalaman

Case study kuat memungkinkan pembaca menjawab: mengapa proyek ada, apa yang dikerjakan pemilik, apa alasan desain/teknologi, bagaimana hasil diperiksa, dan apa keterbatasannya. Panjang tulisan bukan ukuran kedalaman. Potong daftar alat yang tidak menjelaskan keputusan; pertahankan alasan penting dan bukti.

## Kegagalan umum

Narasi “kami membuat website modern” tidak mengungkap masalah. Klaim kelompok sebagai kontribusi individu mengaburkan peran. Hasil tanpa kondisi pengukuran sulit dipercaya. Case study terlalu kronologis sering menenggelamkan hasil; letakkan ringkasan outcome di awal, lalu jelaskan penalaran yang mendukungnya.

## Latihan penerapan

Tulis satu case study berdasarkan proyek nyata. Buat tabel klaim → bukti → kondisi → keterbatasan. Hapus atau revisi klaim yang tidak memiliki dukungan.

## Bukti penerimaan

- [ ] Peran pribadi dan kolaborasi jelas.
- [ ] Prototipe/eksperimen ditandai.
- [ ] Angka mempunyai baseline dan prosedur.
- [ ] Media dan data boleh dipublikasikan.

## Hubungan dan dampak perubahan

[M01 — Portfolio Strategy](01-portfolio-strategy.md), [M02 — Content Architecture](02-content-architecture.md), [M04 — Writing & Storytelling](04-writing-storytelling.md), [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md), [M30 — Performance Measurement](../verification-production/30-performance-measurement.md), [M32 — Maintenance & Feedback](../verification-production/32-maintenance-feedback.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S13, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
