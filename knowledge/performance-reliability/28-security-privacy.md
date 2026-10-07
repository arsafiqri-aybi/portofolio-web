# M28 — Static-Site Security & Privacy

> Bidang G · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md)

## Threat model yang sesuai

Situs statis tetap menjalankan kode pada browser pengunjung. Risiko meliputi XSS, dependency compromise, script pihak ketiga, kebocoran rahasia, link berbahaya, publikasi data privat dan tracking yang tidak perlu. Scope frontend tidak membutuhkan autentikasi server; UI yang menyembunyikan informasi bukan proteksi akses.

## Untrusted input dan XSS

Query URL, hash, data JSON external, Markdown external dan input pengguna perlu diperlakukan sesuai trust boundary. Gunakan `textContent` untuk teks dan API DOM untuk struktur. Jangan menyusun HTML dari input tersebut. Jika rich HTML memang perlu, gunakan sanitization yang cocok dan dipelihara; escaping hanya untuk konteks tertentu bukan sanitizer universal.

URL yang menjadi href/src perlu dibatasi protokol dan tujuan sesuai fungsi. Jangan menerima `javascript:` dari data. Link external mempunyai risiko tujuan berubah; simpan URL yang benar dan tinjau. Pembukaan tab baru mengikuti behavior browser, dengan `rel` sesuai kebutuhan dan privasi.

## Rahasia dan repository

Semua file frontend yang dikirim ke browser dapat dibaca. Environment variable yang diinjeksi ke bundle tidak menjadi rahasia. Token GitHub, private key, password, credentials dan data privat tidak masuk assets, source map atau history. Menghapus file terakhir tidak menghapus commit lama; credential yang terlanjur bocor perlu dirotasi melalui mekanisme yang sesuai.

Repository knowledge base ini dibuat private. Hal itu tidak membuktikan site Pages kelak private; visibility host dan plan berbeda. Untuk portfolio gratis via GitHub Free, publishing source Pages umumnya public sesuai ketentuan yang harus diperiksa lagi saat deployment. Jangan menjadikan repo private sebagai proteksi file yang dipublikasikan.

## CSP dan host limits

CSP membatasi sumber tertentu dan dapat membantu defense in depth. Header dan meta mempunyai kemampuan berbeda; directive seperti `frame-ancestors` tidak bekerja lewat meta. GitHub Pages tidak memberi seluruh kontrol header server custom. Jangan menuliskan file konfigurasi host lain lalu menganggap policy aktif.

Policy harus diuji terhadap resource nyata. Strict policy yang memblokir script sendiri membuat fitur gagal; policy permisif bukan proteksi kuat. Fokus pertama tetap safe DOM, minimisasi third party dan pengelolaan dependency. Catat limitation host.

## Dependencies dan third party

Catat tujuan package, license, versi, update dan sumber. Script external dapat berubah dan melihat data halaman. Self-host resource bila lisensi dan pemeliharaan mendukung. SRI dapat membantu integritas resource tertentu tetapi bukan izin penggunaan dan bukan jaminan semua risiko teratasi.

External embed dapat menambahkan cookies atau tracking sebelum pengguna memilih. Preview lokal dengan link sering cukup untuk portfolio. Jangan memasang analytics tanpa tujuan data yang jelas.

## Privacy dan hak aset

Tampilkan data kontak yang pemilik memang ingin publik. Case study tidak memuat data pelanggan, rekaman peserta atau dokumen privat tanpa izin. Manifest media mencatat hak penggunaan. Knowledge base memberi prinsip minimisasi, bukan nasihat hukum menyeluruh; keputusan hukum spesifik memerlukan sumber yurisdiksi terkini.

## Security verification

Cari sink DOM berisiko, data yang masuk, secret-like string dan dependency baru. Uji payload harmless untuk memastikan teks tidak dieksekusi. Pemeriksaan string bukan audit keamanan lengkap. Hasil PASS berarti gate yang diuji lulus dalam lingkupnya, bukan situs kebal seluruh serangan.

## Latihan penerapan

Audit aliran query/data ke DOM dan daftar third party. Uji rendering teks berisi karakter HTML tanpa eksekusi. Periksa seluruh file yang akan dipublikasikan.

## Bukti penerimaan

- [ ] Tidak ada rahasia atau data privat dalam output.
- [ ] Untrusted input tidak menjadi HTML executable.
- [ ] Header/CSP claims sesuai kemampuan host yang diuji.
- [ ] Aset dan tracking mempunyai dasar penggunaan.

## Hubungan dan dampak perubahan

[M08 — Color, Surface & Assets](../visual-design/08-color-surface-assets.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md), [M27 — Reliability & Compatibility](27-reliability-compatibility.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S09, S36, S37, S11 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
