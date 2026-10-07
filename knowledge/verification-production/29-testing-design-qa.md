# M29 — Testing & Design QA

> Bidang H · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md)

## Strategi berdasarkan risiko

Testing membuktikan perilaku tertentu, bukan seluruh kualitas melalui jumlah tes. Petakan kebutuhan → kasus → metode → bukti → status. Wajib memeriksa perjalanan utama, state gagal dan area perubahan. Test yang hanya mencocokkan implementation sendiri tidak memberi banyak keyakinan.

## Lapisan pemeriksaan

Static checks memeriksa syntax, references, schema dan pola. Unit tests memeriksa logic murni. Integration tests memeriksa hubungan state dan DOM. Browser E2E memeriksa perilaku pengguna pada engine yang dipakai. Visual QA memeriksa komposisi/crop. Manual accessibility memeriksa keyboard, semantics dan teknologi bantu. User testing memeriksa manusia dalam tugas yang nyata.

Pilih lapisan sesuai risiko. Mengubah warna lokal memerlukan review kontras/render, bukan selalu suite E2E baru. Mengubah filter memerlukan hasil, jumlah, focus, empty state dan rapid input. Mengubah base path memerlukan link/resource/direct route.

## Test matrix

Dimensi minimum: template halaman, viewport, browser, input, preferensi, content variant dan failure. Jangan mengambil semua kombinasi tanpa manfaat; prioritaskan pasangan yang berisiko. Simpan isi panjang, gambar gagal, kategori kosong dan state dialog sebagai fixtures.

Kasus inti: baca identitas; pilih proyek; buka detail; kembali; gunakan kontak; keyboard; reduced motion; JS mati; direct URL; resource 404. Setiap kasus punya expected result yang observable.

## Visual QA

Render actual output, bukan hanya mockup. Periksa hierarchy, alignment, rhythm, crop, clipping, overlap, icon weight dan state penting. Screenshot diff memerlukan baseline yang diterima; update baseline karena perubahan yang dimaksud, bukan untuk menghilangkan fail. Font antarsistem dapat berbeda, sehingga toleransi dipilih secara sadar.

Hero saja tidak cukup. Periksa case study panjang, footer, dialog, daftar kosong dan mobile landscape. Zoom serta teks diperbesar dapat mengungkap constraint yang tidak terlihat di screenshot normal.

## Accessibility QA

Scanner menangkap sebagian masalah. Manual keyboard memeriksa focus, trap, action, order dan return. Pembaca layar memeriksa nama/peran/status dalam engine yang digunakan. Reduced motion harus mencakup CSS, JS dan media. Klaim konformansi penuh memerlukan lingkup dan evaluasi seluruh kriteria relevan, bukan score tinggi.

## Performance dan regression

Test performance memakai kondisi konsisten dan raw data. Regression budget dapat memberi alarm, tetapi noisy run memerlukan diagnosis. Jangan memilih hasil tercepat untuk menunjukkan keberhasilan. Browser automation tidak otomatis mewakili ponsel nyata.

## Status dan evidence

Gunakan PASS, FAIL, NOT_RUN, atau NA dengan alasan. Untuk FAIL, catat reproduksi, dampak, file dan perbaikan. Untuk NOT_RUN, jelaskan alat/perangkat yang belum tersedia. Bukti dapat berupa log, trace, screenshot, checklist bertanggal dan commit. Nama file laporan tidak membuktikan tes berjalan.

## Diagnosis dan completion

Test gagal karena logic: perbaiki behavior dan tambah regression yang mencakup invariant. Test rapuh karena implementation detail: ubah ke observable behavior tanpa menurunkan requirement. Check flaky: cari timing, state sharing atau resource dependence. Jangan memakai sleep panjang sebagai solusi default; tunggu kondisi yang relevan.

Website siap ketika gate wajib lulus dan batas yang belum diuji dinyatakan. Mutu subjektif dinilai dengan rubrik dan contoh; keamanan/fungsi tidak boleh dikompensasi skor visual.

## Latihan penerapan

Isi test matrix untuk satu template dan jalankan check yang tersedia. Simpan satu temuan visual dan satu behavior regression dengan langkah reproduksi.

## Bukti penerimaan

- [ ] Requirements terhubung ke test/evidence.
- [ ] Semua failure material mempunyai kasus.
- [ ] Render final benar-benar ditinjau bila diklaim.
- [ ] PASS dan NOT_RUN tidak dicampur.

## Hubungan dan dampak perubahan

[M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M30 — Performance Measurement](30-performance-measurement.md), [M31 — GitHub Production & Discoverability](31-github-production-seo.md), [M32 — Maintenance & Feedback](32-maintenance-feedback.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S38, S02, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
