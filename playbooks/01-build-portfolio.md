# Playbook 01 — Membangun portofolio dari brief

## Masukan

Fakta pemilik, tujuan, audience, inventory proyek, media yang boleh digunakan, kontak, batas frontend/Rp0/github.io. Jangan mulai dengan membeli theme atau memilih library motion.

## Langkah dan keluaran

1. **Brief:** isi M01. Pilih tugas utama dan gate. Keluaran: brief, asumsi dan risiko.
2. **Bukti:** isi M02–M04. Setiap claim mendapat sumber; status proyek jelas. Keluaran: sitemap, content model, case study.
3. **Arah:** gunakan M05–M08. Pilih satu konsep dan uji pada hero + detail. Keluaran: style spec dan asset manifest.
4. **Fondasi:** gunakan M13–M17. Bangun HTML, layout responsive dan route statis. Keluaran: halaman terbaca tanpa JS.
5. **Komponen:** gunakan M09–M12/M18. Implementasikan state serta keyboard. Keluaran: controls dan test cases.
6. **Motion:** gunakan M21–M24. Mulai satu efek kuat, fallback dan cleanup. Keluaran: motion spec + runnable behavior.
7. **Optimasi:** gunakan M25–M28/M30. Measure dahulu, ubah hotspot. Keluaran: baseline/candidate, security review.
8. **QA:** gunakan M29. Render seluruh template/state penting dan perbaiki blockers.
9. **Produksi:** gunakan M31 hanya ketika publishing termasuk scope. Periksa URL final, route, HTTPS dan metadata.
10. **Handoff:** gunakan M32. Catat release, known limits, update process dan recovery.

## Urutan keputusan

Isi menentukan layout; layout dan state menentukan motion; motion/asset menentukan biaya; measurement menentukan optimasi. Accessibility/security diterapkan sejak fondasi. Jangan menunda semua sampai akhir.

## Hentikan dan perbaiki ketika

Fakta belum tersedia, tindakan menampilkan sukses palsu, keyboard buntu, isi hanya muncul setelah animasi, route refresh 404, atau secret masuk output. Perbaikan blocker mendahului polesan tambahan.

## Bukti siap

Requirements-to-evidence matrix lengkap. Gate kritis dalam scope lulus. Bagian belum diuji dinyatakan. Score visual tidak menutupi failure fungsi.
