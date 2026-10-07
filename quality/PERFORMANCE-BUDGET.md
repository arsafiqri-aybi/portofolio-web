# Budget performa awal

Nilai berikut **usulan awal untuk portfolio ringan**, bukan standar universal dan bukan hasil pengukuran release ini. Sesuaikan setelah baseline, perangkat target dan konsep visual diketahui. Ketentuan host ada di M31; metrik resmi ada di M30.

| Resource/perilaku | Usulan awal | Konteks |
| --- | --- | --- |
| HTML + CSS + JS awal | ≤150 KiB transfer terkompresi | Satu template landing tanpa media |
| JS awal | ≤50 KiB transfer terkompresi | Enhancement; isi utama sudah HTML |
| Media awal viewport | ≤400 KiB | Foto/screenshot; tampil tetap jelas |
| Font awal | ≤100 KiB atau font sistem | Hanya family/weight kritis |
| Resource pihak ketiga pada load | 0 bila tidak diperlukan | Privasi, reliability dan biaya |
| Layout shift yang dirancang | Tidak ada insertion dekoratif tanpa ruang | Ukur metric terpisah |
| Work saat hidden/offscreen | Loop dekoratif berhenti | Tidak berarti semua browser task nol |
| Error runtime/resource | 0 pada alur utama yang diuji | Dalam kondisi/scope tercatat |

KiB=1024 byte. Transfer terkompresi berbeda dari ukuran file repository. Contoh lab sangat kecil, tetapi ukuran file tidak membuktikan semua metrik.

## Prosedur baseline

1. Tetapkan commit, URL/template, browser, viewport/DPR, device, CPU/network dan cache.
2. Lakukan beberapa run dalam kondisi yang sama; simpan seluruh hasil.
3. Rekam loading, satu filter, satu transisi dan scroll scene yang paling berat.
4. Identifikasi resource/long task/layout/paint yang dominan.
5. Ubah satu penyebab atau kelompok koheren, lalu ulangi kondisi.
6. Laporkan nilai mutlak, perubahan, variasi dan batas.

## Motion

FPS rata-rata saja tidak cukup. Catat interval/spike dan trace dengan refresh/perangkat yang relevan. Tentukan target dari device baseline; jangan menjanjikan 60/120fps pada seluruh perangkat. Jika motion berat, kurangi area bitmap, layer, blur, partikel atau scene aktif; jangan sekadar mengubah easing.

## Lab versus field

Lab dapat membandingkan candidate secara terkontrol; field menggambarkan distribusi nyata. Tidak ada field data berarti NOT_AVAILABLE, bukan nol. Tool throttling bukan perangkat nyata. TBT tidak dilaporkan sebagai INP. Bukti akhir portfolio diperbarui ketika website actual tersedia.
