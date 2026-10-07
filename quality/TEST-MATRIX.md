# Matriks pengujian

Isi status setelah pelaksanaan. Tabel ini rencana, bukan hasil.

| Area | Variasi/kasus | Expected | Status awal |
| --- | --- | --- | --- |
| Konten | judul panjang, proyek archived, case study nyata | Makna dan layout tetap benar | NOT_RUN |
| Viewport | 320, 390, 768, 1440; di antara breakpoint | Tidak clipping/overflow tak disengaja | NOT_RUN |
| Input | keyboard, pointer, touch/coarse | Tugas selesai tanpa hover wajib | NOT_RUN |
| Preference | reduced motion awal dan berubah runtime | Gerak nonesensial berhenti, isi utuh | NOT_RUN |
| Filter | all, subset, nol, reset, rapid clicks | Count dan visibility sinkron | NOT_RUN |
| Dialog | open/close/Escape/Tab/resize | Fokus logis dan terkendali | NOT_RUN |
| Clipboard | success, denial, unavailable | Sukses hanya jika benar, fallback tersedia | NOT_RUN |
| Static fallback | JS off, API observer/dialog unavailable | Isi/link utama tetap tersedia | NOT_RUN |
| Assets | gambar/font gagal/lambat | Informasi dan layout layak | NOT_RUN |
| Canvas | start/pause/offscreen/hidden/resize/DPR | Loop dan ukuran sesuai state | NOT_RUN |
| Route | root/subpath/direct detail/reload/404 | URL/resource berfungsi | NOT_RUN |
| Browser | Chromium/Firefox/WebKit; real mobile | Status per engine/device tercatat | NOT_RUN |
| Security | HTML-like text/query, secret scan | Tidak mengeksekusi input/data privat | NOT_RUN |
| Performance | cold/warm, loading/interactions/motion | Budget pada kondisi terpenuhi | NOT_RUN |

Expected perlu diperinci sesuai fitur. Jika tidak ada dialog dalam portfolio final, NA dengan alasan. Tests lab tidak otomatis dipindahkan sebagai PASS portfolio final.
