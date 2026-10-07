# M27 — Reliability & Compatibility

> Bidang G · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md)

## Reliability untuk situs statis

Tanpa backend bukan berarti tanpa kegagalan. Script bisa gagal, gambar 404, font terlambat, API browser tidak tersedia, koneksi terputus, cache lama dan layout berubah. Reliability berarti tugas utama tetap tersedia atau kegagalan dijelaskan dengan jalur yang masuk akal.

## Progressive enhancement

Bangun isi dan link dalam HTML, kemudian tambahkan filter, dialog atau motion. Bila fitur tak tersedia, daftar proyek dan kontak tetap dapat dipakai. Sembunyikan controls enhancement sampai handler siap; jangan sembunyikan seluruh isi untuk menunggu initialization.

Feature detection lebih relevan daripada user-agent sniffing. Cek API yang digunakan dan kemampuan aktual. Dukungan syntax tidak selalu membuktikan behavior sempurna; uji input, rendering dan lifecycle pada browser target.

## Browser matrix

Tentukan browser/versi target dari audiens atau asumsi tertulis. Chromium, Firefox dan WebKit/Safari mempunyai perbedaan. Android emulation tidak sama dengan hardware Android; WebKit test environment tidak selalu sama dengan Safari perangkat nyata. Catat tier: benar-benar diuji, diuji emulasi, atau belum diuji.

Fitur baru seperti view transitions, scroll-driven animations dan CSS terbaru membutuhkan baseline/fallback. Jangan menurunkan seluruh pengalaman hanya karena satu efek tidak tersedia. Motion decorative dapat hilang sementara layout tetap utuh.

## Asset dan content failure

Gambar gagal perlu mempertahankan area/teks yang dapat dipahami. Jika alt menjelaskan fungsi, browser dapat memberi petunjuk; layout jangan mengandalkan gambar berhasil. Font fallback dapat mengubah wrapping; template diuji sebelum dan sesudah font load. Konten panjang dan kategori kosong adalah keadaan normal, bukan exception yang diabaikan.

Halaman 404 mempunyai link ke beranda dan proyek. Base path harus benar; akses langsung halaman detail dan reload penting di host statis. Tautan demo external dapat mati; periksa berkala dan tandai archived daripada meninggalkan klaim live.

## Preference dan capability changes

Reduced motion dan tema dapat berubah saat halaman aktif. Listener preference harus sinkron dengan state dan cleanup. Resize saat menu/dialog terbuka memerlukan behavior yang dirancang. Pergantian tab menghentikan scene; resume tidak menghasilkan lompatan waktu.

Storage dan clipboard bisa ditolak. Situs tetap mempunyai state default dan kontak yang terlihat. Jika library tidak termuat, behavior utama tidak boleh kosong. Error handling lokal menghindari satu fitur dekoratif merusak seluruh script.

## Failure recovery

Tentukan failure → fallback → informasi → cara melanjutkan. Untuk filter, reset ke daftar lengkap jika logic tidak siap. Untuk canvas, frame statis atau background biasa. Untuk video, poster dan link. Jangan menyatakan berhasil ketika hasil belum diketahui.

## Diagnosis

Masalah browser tertentu: reproduksi minimal dan cek compatibility data resmi. Masalah setelah release: periksa cache dan assets hash. Masalah hanya subpath: cek href/src/import. Masalah setelah resize: cek geometry dan state breakpoint. Solusi harus diverifikasi pada kondisi penyebab, kemudian jalur utama untuk mencegah regresi.

## Latihan penerapan

Buat failure injection: blok script, gambar, font dan clipboard; uji route langsung serta preference changes. Dokumentasikan fallback yang benar-benar bekerja.

## Bukti penerimaan

- [ ] Perjalanan utama memiliki fallback.
- [ ] Browser matrix mempunyai status jujur.
- [ ] Route/subpath/reload teruji.
- [ ] Preference changes tidak meninggalkan state salah.

## Hubungan dan dampak perubahan

[M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S19, S27, S35 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
