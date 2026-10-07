# Laboratorium runnable

Semua contoh memakai file lokal HTML/CSS/JS dan data fiktif. Tidak ada backend, font remote, telemetry, form submission atau dependency produksi. Alamat email memakai example.com dan bukan kontak pemilik.

```bash
python3 -m http.server 8000 --directory examples
```

Buka http://localhost:8000/ melalui browser. File module sebaiknya disajikan HTTP, bukan file://.

| Lab | Tujuan | Modul |
| --- | --- | --- |
| portfolio-lab | Filter, empty state, dialog/fokus, clipboard failure, reveal fallback | M10, M12, M14, M16, M22, M27 |
| canvas-lab | Time-based motion, resize/DPR, pause, offscreen, reduced motion | M13, M21, M24, M26 |
| scroll-lab | Progress, scroll native, anchor, preference dan resize | M11, M23, M26 |

## Skenario manual

- Tanpa JS: daftar dan detail tetap tersedia, controls yang belum berfungsi tidak ditampilkan.
- Filter: All=3, Frontend=2, Motion=2, Research=0; reset mengembalikan daftar lengkap.
- Dialog: keyboard membuka, Tab tetap dalam modal native, Escape menutup, focus kembali.
- Clipboard: denial tidak mengklaim sukses; email tetap tersedia.
- Motion: preference sejak awal dan perubahan runtime menghentikan gerak dekoratif.
- Canvas: start/pause, scroll offscreen, resize, tab visibility; text tetap dapat dibaca.
- Scroll: anchor langsung, reverse cepat, viewport pendek, JS mati.

## Batas

Contoh menunjukkan patterns dan dapat diuji. Belum menjadi portofolio final atau jaminan kelancaran pada seluruh perangkat. API baru/dukungan browser dicek saat adaptasi. Screen-reader dan manusia diuji terpisah dari otomasi.
