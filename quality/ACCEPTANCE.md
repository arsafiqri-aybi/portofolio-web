# Gerbang penerimaan

Gerbang wajib tidak ditutupi skor estetika. Gunakan PASS/FAIL/NOT_RUN/NA dan simpan evidence. Checklist ini acceptance proyek, bukan sertifikasi keseluruhan WCAG atau keamanan.

| Gate | Kondisi | Metode/bukti |
| --- | --- | --- |
| G01 Akurasi isi | Identitas, peran, proyek, hasil dan status punya sumber; contoh fiktif jelas | Claim/evidence matrix dan review pemilik |
| G02 Perjalanan utama | Identitas → proyek → detail → kontak berfungsi | Browser test + manual task |
| G03 Fondasi statis | Isi utama tersedia tanpa JS; link langsung bekerja | Browser JS-off + direct routes |
| G04 Responsive | Tidak ada clipping/overflow tak disengaja, urutan logis | Render sempit/menengah/lebar + zoom |
| G05 Keyboard/fokus | Kontrol dapat digunakan, fokus terlihat dan kembali dengan benar | Manual + browser interaction |
| G06 Media/akses | Nama/peran/alt sesuai, informasi inti punya padanan | Review semantics + screen reader bila tersedia |
| G07 Motion | Reduced motion, interruption, resume, fallback, cleanup | Preference/rapid input/visibility checks |
| G08 Performance | Budget pada kondisi uji tercapai, raw data tersedia | Profiling dan report; field terpisah |
| G09 Security/privacy | Secret tidak masuk output, safe DOM, third party terkontrol | Audit source/output dan dataflow |
| G10 Visual system | Hierarki, token, crop dan state konsisten | Review actual render, bukan source saja |
| G11 Production | Base path, resource, route, metadata dan recovery benar | Post-deploy checks di URL final |
| G12 Handoff | Source, keputusan, checks, known issues aktual | README/changelog/verification |

Untuk repository knowledge base ini, G01 berhubungan ke materi/sumber/contoh, validator dan tests contoh menjadi bukti scope release. G08/G11 website final belum berlaku karena tidak ada portfolio final dipublikasikan.

## Rubrik visual

Nilai dengan temuan, bukan angka palsu: kejelasan hierarki, kecocokan identitas, konsistensi rhythm, typography, color roles, kualitas aset/crop, status interaksi dan choreography. Untuk tiap kelemahan tunjuk elemen, konteks dan perbaikan. Human preference terpisah dari review AI.

## Definisi siap

Semua gate wajib dalam scope harus PASS, pengecualian disertai alasan, dan NOT_RUN tidak disebut lulus. Bila satu gate kritis gagal, perbaiki sebelum publikasi. Coverage dokumen tidak sama dengan website yang memenuhi gate.
