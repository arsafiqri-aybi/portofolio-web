# M13 — Web & Browser Foundations

> Bidang D · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** Tidak ada; mulai dari brief proyek.

## Dari URL menjadi halaman

Browser menyelesaikan alamat, membuka koneksi, meminta dokumen, memproses HTML dan memuat resource. HTTP memberi status, header dan isi. HTTPS melindungi transport, bukan membuktikan script atau konten aman. Cache dapat memakai resource yang sudah ada; pengujian cold dan warm perlu dibedakan.

Origin terdiri dari scheme, host dan port. Path bukan origin baru. CORS mengatur akses script terhadap respons lintas origin; ia bukan cara menyembunyikan API key dan bukan sistem otorisasi. Portofolio statis umumnya dapat menghindari request pihak ketiga pada perjalanan utama.

## Parsing dan struktur

HTML menjadi DOM, CSS menjadi aturan style. Parsing dapat dipengaruhi script yang memblokir. `defer` dan module script membantu menjalankan setelah parsing sesuai behavior masing-masing; `async` tidak menjamin urutan antarfile. Pilih sesuai dependensi, bukan menambahkan atribut secara acak.

Browser membangun accessibility tree dari semantik, nama dan state. Tampilan visual dan tree ini dapat berbeda jika elemen disembunyikan, role salah atau label tidak sinkron. Inspect DOM tidak cukup untuk membuktikan semua teknologi bantu mendapatkan informasi yang benar.

## Pipeline rendering

Model kerja: style → layout → paint → compositing. Perubahan tertentu memerlukan tahap lebih banyak. Ukuran/posisi layout dapat memengaruhi banyak elemen; opacity/transform sering lebih murah, tetapi tidak selalu gratis. Efek besar, layer besar, filter dan blending tetap dapat berat.

Membaca geometry setelah menulis style dapat memaksa browser menyelesaikan layout. Pada loop, pola read-write berulang bisa menghasilkan layout thrashing. Ukur geometry bersama, hitung nilai, lalu tulis bersama. Trace diperlukan untuk mengetahui penyebab aktual.

## Event loop dan frame

JavaScript main thread menjalankan task; microtask diproses pada titik tertentu. Banyak microtask dapat menunda kesempatan browser melakukan pekerjaan lain. Long task dapat menunda input dan frame. `requestAnimationFrame` menyelaraskan callback dengan kesempatan render, bukan menjamin semua pekerjaan selesai cepat.

Gunakan timestamp rAF untuk gerak berbasis waktu; menambah posisi satu unit tiap callback bergantung refresh rate. Saat tab tersembunyi, browser dapat mengurangi atau menghentikan callback. Saat kembali, batasi delta untuk simulasi agar objek tidak melompat karena jeda panjang.

## Storage, lifecycle dan jaringan

`localStorage` sinkron dan dapat gagal; gunakan hanya untuk preferensi kecil, dengan `try/catch` dan fallback. Jangan menyimpan rahasia. Service worker menambah lifecycle cache dan invalidasi; gunakan hanya bila manfaat offline membenarkan kompleksitas. Cache yang salah dapat mempertahankan versi lama setelah rilis.

Listener, timer dan observer mempunyai lifecycle. Komponen yang dilepas harus melepas efek yang dimilikinya. Request yang dibatalkan di klien tidak berarti operasi server batal; dalam scope ini kita menghindari transaksi backend.

## DevTools sebagai alat penalaran

Network menjelaskan resource, status, byte dan timing. Elements menunjukkan style computed dan geometry. Performance memperlihatkan task, render dan frame. Memory membantu menemukan retensi. Console membantu error, tetapi ketiadaan error tidak membuktikan UI benar.

## Diagnosis

Halaman kosong: periksa dokumen, status dan error parse sebelum framework. Gambar 404: cek base path dan case filename. Input lambat: trace task yang berjalan saat input. Animasi patah: bedakan layout, paint, compositing dan logic. Cache lama: reproduksi dengan kondisi terkontrol dan revisi strategi aset, bukan menyuruh semua pengunjung menghapus cache.

## Latihan penerapan

Rekam satu pemuatan dan satu interaksi melalui DevTools. Jelaskan urutan resource, task dan rendering dengan menunjuk bukti trace, bukan asumsi.

## Bukti penerimaan

- [ ] Dapat membedakan jaringan, JavaScript dan render sebagai penyebab.
- [ ] Base path dan origin dipahami.
- [ ] Setiap efek mempunyai lifecycle.
- [ ] Cache dan kondisi ukur dicatat.

## Hubungan dan dampak perubahan

[M14 — HTML Engineering](14-html-engineering.md), [M15 — CSS Engineering](15-css-engineering.md), [M16 — JavaScript & Type Systems](16-javascript-types.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md), [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S01, S20, S21 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
