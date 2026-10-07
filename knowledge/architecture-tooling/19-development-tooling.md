# M19 — Development & Build Tooling

> Bidang E · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M17 — Frontend Architecture](17-frontend-architecture.md)

## Tooling membantu reproducibility

Editor, terminal, version control dan build tool dipilih untuk menjaga pekerjaan dapat diulang. Portofolio HTML/CSS/JS kecil dapat berjalan tanpa bundler. Generator atau bundler bermanfaat ketika ada import, transform, minification atau banyak halaman. Jangan memaksakan toolchain kompleks hanya agar terlihat profesional.

## Lingkungan dan dependency

Catat runtime, package manager, versi yang dipakai dan perintah utama. Lockfile mengunci resolusi dependensi; pembaruan disengaja dan diuji. Package scripts harus menjelaskan build, lint, check dan preview. Secret tidak boleh masuk repository atau output frontend.

Pahami perbedaan source dan generated output. GitHub Pages menyajikan output siap browser, bukan file TypeScript mentah. Build menghasilkan direktori yang jelas dan dapat dipreview. Jangan commit cache, node_modules, log sensitif atau file lingkungan lokal.

## Build pipeline

Urutan umum: validate content → type/lint jika digunakan → build → inspect output → tests yang relevan → deployment. Minification mengurangi byte tetapi bukan solusi untuk logic berat. Source map membantu diagnosis; pilih publikasi sesuai kebutuhan dan risiko informasi.

Aset hash memudahkan invalidasi cache, tetapi HTML harus menunjuk versi yang benar. Build deterministik lebih mudah direview. Jika output berbeda tanpa perubahan source, periksa timestamp, dependency atau environment.

## Debugging workflow

Reproduksi masalah dengan input dan keadaan minimal. Baca pesan error lengkap; identifikasi tahap parse, build, runtime, jaringan atau render. Gunakan breakpoint dan Network/Performance, bukan sekadar console log di setiap baris. Catat tindakan yang dilakukan agar masalah bisa diulang.

Saat tool gagal, periksa lingkungan dan konfigurasi sebelum mengganti seluruh stack. Rerun hanya jika kondisi berubah atau gangguan sementara masuk akal. Mutasi remote yang hasilnya tidak diketahui diperiksa sebelum diulang.

## Static preview

Gunakan server HTTP lokal untuk contoh module script. Membuka file melalui `file://` dapat berbeda untuk import, fetch dan origin. Dalam repo ini contoh dapat dipreview melalui `python3 -m http.server 8000 --directory examples`. Perintah tersebut hanya preview lokal, bukan deployment publik.

Uji subpath yang menyerupai project Pages. Jalur absolute yang bekerja di root bisa gagal dalam `/portofolio-web/`. Periksa resource dari Network dan akses direct URL.

## Quality automation

Lint menilai pola; typecheck menilai kontrak statis; tests menilai skenario; screenshot menilai tampilan. Tidak ada satu alat yang membuktikan seluruh kualitas. Jalankan checks yang berhubungan dengan perubahan dan risiko. Jangan menulis tests yang hanya mengulang implementation tanpa invariant yang bermakna.

## Supply chain dan keterawatan

Setiap package mempunyai update, license dan trust cost. Periksa dependensi transitif saat keputusan material. Script install dapat menjalankan kode; lingkungan CI sebaiknya memiliki permission minimum. Jangan mengartikan laporan nol vulnerability sebagai jaminan aman sepenuhnya.

## Diagnosis

Build lokal berhasil tetapi produksi gagal: cek versi runtime, working directory, env dan case sensitivity. Script hanya berfungsi di satu shell: tulis command portable atau dokumentasikan batas. Repo berat: cek generated artifacts dan media source. Tooling selesai ketika pemilik bisa mengikuti langkah, bukan ketika daftar paket terlihat lengkap.

## Latihan penerapan

Dokumentasikan setup dari checkout bersih sampai preview. Jalankan perintah yang tercatat dan pastikan tidak bergantung file privat tersembunyi.

## Bukti penerimaan

- [ ] Perintah utama dapat dijalankan ulang.
- [ ] Runtime/dependency sesuai kebutuhan.
- [ ] Output deploy jelas.
- [ ] Secret, cache dan paket terpasang tidak ikut commit.

## Hubungan dan dampak perubahan

[M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M17 — Frontend Architecture](17-frontend-architecture.md), [M20 — AI-Assisted Engineering](20-ai-assisted-engineering.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S28, S29, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
