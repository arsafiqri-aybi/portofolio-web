# M32 — Maintenance & Feedback

> Bidang H · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M29 — Testing & Design QA](29-testing-design-qa.md), [M30 — Performance Measurement](30-performance-measurement.md), [M31 — GitHub Production & Discoverability](31-github-production-seo.md)

## Portofolio sebagai sistem yang hidup

Portfolio yang baik perlu isi aktual, link yang bekerja dan dependencies yang terawat. Maintenance tidak harus kompleks: inventory, review berkala dan changelog dapat cukup. Pengetahuan baru memperbarui keputusan ketika relevan, bukan mengejar trend tanpa manfaat.

## Content operations

Pemilik mempunyai satu sumber identitas, peran dan proyek. Perubahan pengalaman/CV harus tercermin konsisten. Proyek archived tetap mempunyai konteks dan tanggal. Demo yang mati diberi status atau diganti bukti yang sah. Jangan mengubah hasil terukur lama tanpa sumber baru.

Tetapkan pemicu review: proyek selesai, kontak berubah, demo mati, dependency security issue, browser behavior berubah atau regression muncul. Interval waktu dapat dipilih sesuai aktivitas; tidak ada automation terjadwal yang dibuat hanya karena panduan menyebut jadwal.

## Feedback loop

Temuan mengikuti struktur: observasi → dampak → dugaan penyebab → perubahan → verifikasi → pembelajaran. Catat feedback manusia, review AI dan measurement secara terpisah. Komentar selera dapat menjadi pilihan desain; error pada tugas utama menjadi prioritas perbaikan.

Jangan mengoptimalkan clicks semata. Pengunjung yang cepat menemukan email mungkin membutuhkan lebih sedikit klik. Perubahan yang meningkatkan engagement tetapi membuat tugas lebih sulit perlu ditinjau ulang.

## Release dan regression

Setiap release mencatat commit, perubahan, checks dan batas. Perubahan token diuji pada komponen yang memakai. Perubahan route diuji direct link. Perubahan library diuji behavior dan bundle. Perubahan asset diperiksa hak penggunaan, dimensi dan payload.

Gunakan dependency update yang disengaja; baca perubahan yang relevan dan jalankan checks. Tidak perlu update semua package setiap hari. Legacy code yang stabil dapat dipertahankan ketika tidak menimbulkan risiko material.

## Incident kecil

Jika halaman kosong, prioritaskan pemulihan alur utama. Catat waktu, gejala, commit terakhir, diagnosis dan perbaikan. Jangan menghapus log atau test yang menunjukkan masalah. Jika asset external mati, fallback dapat menjadi solusi permanen dengan dependency lebih kecil.

Rollback melindungi pengguna, tetapi tidak memperbaiki penyebab secara otomatis. Setelah fungsi kembali, cari regression test yang relevan dan revisi runbook. Jangan menganggap satu perbaikan membuktikan semua browser lulus.

## Pemeliharaan knowledge base

Setiap sumber mempunyai URL, jenis bukti, status akses, tanggal, bagian yang mendukung klaim dan kapan perlu cek ulang. API/host/pricing/compatibility diperiksa lagi saat dipakai. Materi stable conceptual dapat dipertahankan dengan review terarah.

Ubah modul dan hubungan downstream bila konsep berubah. Simpan claim register agar angka standar tidak bercampur keputusan desain. Sumber yang hanya reading list tidak boleh disebut telah diverifikasi. Materi yang belum mendalam ditandai perluasan, bukan disembunyikan dengan label “super lengkap”.

## Backlog berdasarkan manfaat

Pisahkan blocker fungsi/akses/data, perbaikan penting dan eksperimen. Untuk kualitas artistik, gunakan rubrik dan contoh konkret. Untuk performance, pakai measurement. Tugas selesai saat gate relevan lulus dan perubahan dapat dipelihara. Berhenti menambah dekorasi ketika biaya melebihi manfaat untuk tujuan portofolio.

## Handoff dan continuity

Simpan README, architecture decision, content schema, asset manifest, check commands, latest verification dan known limitations. Pemilik lain atau sesi AI berikutnya dapat melanjutkan tanpa membangun ulang. Dokumentasi harus menggambarkan state aktual, termasuk hal yang belum diuji.

## Latihan penerapan

Buat satu issue/entry perbaikan dari temuan nyata dan satu catatan release. Update modul yang relevan dengan bukti baru tanpa mengubah fakta lama diam-diam.

## Bukti penerimaan

- [ ] Konten, link dan status proyek aktual.
- [ ] Release mempunyai bukti serta recovery path.
- [ ] Feedback dan klaim baru mempunyai provenance.
- [ ] Knowledge base membedakan coverage dari kedalaman yang belum selesai.

## Hubungan dan dampak perubahan

[M01 — Portfolio Strategy](../portfolio-content/01-portfolio-strategy.md), [M03 — Case Study & Evidence](../portfolio-content/03-case-study-evidence.md), [M20 — AI-Assisted Engineering](../architecture-tooling/20-ai-assisted-engineering.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M29 — Testing & Design QA](29-testing-design-qa.md), [M30 — Performance Measurement](30-performance-measurement.md), [M31 — GitHub Production & Discoverability](31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S10, S13, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
