# M31 — GitHub Production & Discoverability

> Bidang H · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M29 — Testing & Design QA](29-testing-design-qa.md)

## Git sebagai riwayat yang dapat ditinjau

Commit menyimpan perubahan yang koheren. Baca diff sebelum commit, pilih file yang relevan dan tulis pesan menjelaskan masalah/hasil. Branch membantu isolasi pekerjaan; PR membantu review. Jangan force-push atau menghapus history bersama tanpa kebutuhan dan otorisasi yang sesuai.

Untuk perubahan konten kecil, workflow sederhana cukup. Untuk release yang memengaruhi route, assets atau logic, siapkan preview/checks dan recovery. `git revert` membuat commit yang membalik perubahan, berbeda dari reset yang memindahkan ref. Konflik revert tetap perlu diperiksa.

## GitHub Pages dan biaya

Saat sumber diperiksa, Pages tersedia untuk public repository pada GitHub Free. User site memakai repository `<username>.github.io`; project site memakai subpath. Knowledge base bernama `portofolio-web` ini bukan otomatis user site dan tidak dipublikasikan sebagai website melalui permintaan ini.

Ringkasan batas yang diperiksa: published site ≤1GB, soft bandwidth 100GB/bulan, timeout deployment 10 menit, dan soft build limit 10/jam dengan pengecualian custom Actions workflow. Ketentuan dapat berubah; cek ulang saat deployment. Paket gratis bukan kapasitas tanpa batas.

## Publish source dan output

Pilih branch/folder publishing source atau workflow sesuai stack. Output harus berisi entry HTML dan assets yang tepat. Jangan mengirim source yang membutuhkan server runtime ketika host hanya static. Untuk generator, pastikan base URL dan output path benar.

GitHub Actions permissions minimum sesuai kebutuhan. Workflow config diperiksa melalui dokumentasi resmi dan kebijakan integrasi. Tidak ada workflow yang harus ditambahkan hanya untuk terlihat lengkap; repo pengetahuan ini menyediakan checks lokal dan dapat diintegrasikan ke CI ketika diperlukan.

## Post-deploy verification

Buka beranda, detail, 404, asset dan kontak melalui URL final. Uji direct route, reload, subpath dan HTTPS. Commit berhasil bukan bukti deploy live. Deployment berhasil bukan bukti visual QA. Tautan CV/download harus benar dan tidak mengarah ke file privat yang tak dapat diakses pengunjung.

## SEO dan metadata

Title, description, heading, canonical sesuai URL final, internal links dan konten HTML membantu penemuan. Sitemap memakai URL absolut yang benar. Robots mengatur crawler sesuai fungsi, tetapi tidak mengamankan data privat. Jangan menambahkan canonical sebelum domain final diketahui.

Structured data menggunakan fakta yang benar dan schema sesuai. Open Graph/preview sharing memberi title, description dan image yang representatif. Search ranking tidak dijamin oleh metadata atau score tinggi. Portfolio perlu isi yang jelas dan bukti karya, bukan keyword stuffing.

## Accessibility dan discoverability

Link deskriptif dan hierarchy membantu manusia serta mesin. Client-side content tanpa fondasi dapat memperbesar dependence pada rendering script. Halaman detail statis dapat memberi metadata sendiri. Jangan mengekspor seluruh case study menjadi gambar saja.

## Recovery dan maintenance

Catat release commit dan perubahan penting. Jika deploy gagal, periksa log dan output sebelum mengulang mutasi. Jika release merusak fungsi, revert perubahan dan verifikasi deployment hasilnya. Recovery script tidak boleh menghapus konten valid secara membabi buta.

## Diagnosis

Root berhasil tetapi project route gagal: cek base path. Private repo tidak bisa Pages gratis: periksa plan/visibility sebelum mengubah exposure. 404 setelah reload: route virtual tanpa file. Metadata sharing lama: preview cache external mungkin berbeda dari page source; jangan mengklaim semua platform langsung diperbarui.

## Latihan penerapan

Dokumentasikan deployment plan untuk user site dan project site. Jalankan preview output pada subpath; jangan mengubah visibility atau publish site tanpa lingkup yang sesuai.

## Bukti penerimaan

- [ ] Output dan base path cocok Pages.
- [ ] Biaya/visibility diketahui sebelum publishing.
- [ ] Metadata berdasarkan URL dan fakta final.
- [ ] Deploy dan post-deploy checks mempunyai bukti terpisah.

## Hubungan dan dampak perubahan

[M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md), [M19 — Development & Build Tooling](../architecture-tooling/19-development-tooling.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M29 — Testing & Design QA](29-testing-design-qa.md), [M30 — Performance Measurement](30-performance-measurement.md), [M32 — Maintenance & Feedback](32-maintenance-feedback.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S11, S10, S12, S40, S41 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
