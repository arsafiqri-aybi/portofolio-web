# M23 — Scroll & Visual Storytelling

> Bidang F · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M21 — Motion Foundations](21-motion-foundations.md), [M22 — Interface Motion](22-interface-motion.md)

## Scroll sebagai input yang dimiliki pengguna

Scroll bermanfaat untuk narasi karena menghubungkan posisi dengan urutan. Pengguna tetap mengendalikan kecepatan dan arah. Hindari scroll hijacking, scroll lock tanpa alasan atau kewajiban menunggu scene. Link anchor dan Back harus tetap bekerja.

## Pemetaan progress

Definisikan interval dengan jelas: titik awal section, titik akhir, viewport dan range aktif. Progress dasar dapat dihitung sebagai `(scroll-start)/(end-start)`, lalu clamp ke 0..1. Interval nol perlu fallback. Elemen sticky mengubah hubungan geometry; hitung berdasarkan layout yang dirancang, bukan formula disalin tanpa inspeksi.

Pisahkan progress global halaman, progress section dan progress elemen. Memakai progress halaman untuk seluruh animasi sering membuat timing tergantung panjang konten yang berubah. Resize, font loading dan gambar dapat mengubah interval; perbarui geometry ketika sumber perubahan terjadi.

## Sticky storytelling

Sticky scene memiliki area visual dan narasi yang dapat dibaca. Tentukan tinggi ruang yang diperlukan, timing tiap adegan dan fallback mobile. Jangan menciptakan ribuan pixel kosong tanpa informasi. Text harus hadir dalam DOM dan tidak bergantung frame canvas tertentu.

Scene awal dan akhir harus bermakna ketika pengguna masuk melalui link langsung. Pengguna yang scroll cepat tidak boleh kehilangan satu-satunya penjelasan. Reverse scroll menghasilkan state yang masuk akal tanpa queue transisi lama.

## Parallax dan intensitas

Parallax membedakan gerak lapisan. Nilai perpindahan kecil sering cukup untuk memberi depth, tetapi manfaat artistik harus dibandingkan dengan sensitivitas gerak dan performance. Reduced motion menghilangkan perpindahan nonesensial, bukan memindahkannya ke fade panjang.

Gambar berukuran besar, blur dan beberapa layer bisa mahal meski bergerak dengan transform. Periksa ukuran layer, rasterization dan memory. Pada mobile, versi lebih sederhana dapat mempertahankan identitas tanpa effect density yang sama.

## Implementasi

CSS scroll-driven animation dapat menjadi pilihan jika dukungan target memenuhi; cek dokumentasi dan fallback saat implementasi. JavaScript dapat memakai listener passive untuk observasi serta rAF untuk menggabungkan visual write. Listener passive tidak cocok bila perlu mencegah default input, dan pencegahan scroll umumnya tidak diperlukan di portfolio.

Baca posisi/layout secara terkontrol, hitung progress, lalu tulis transform. Jangan `getBoundingClientRect` tiap elemen setelah setiap style write. Observer dapat membatasi pekerjaan pada scene yang terlihat. Stop pekerjaan ketika tab hidden atau scene tidak aktif.

## Accessibility dan navigation

Navigasi tidak bergantung gestur kompleks. Heading, anchor, fokus dan urutan DOM tetap logis. Sticky area jangan menutup isi pada viewport pendek atau zoom. Audio/video yang terkait scroll tidak boleh memulai suara tanpa kontrol. Berikan versi statis yang menampilkan penjelasan utama.

## Failure modes

| Gejala | Diagnosis | Tindakan |
| --- | --- | --- |
| Scene meloncat setelah font load | Range dihitung sebelum layout stabil | Perbarui geometry tanpa loop layout |
| Mobile tidak bisa mencapai teks | Sticky terlalu tinggi/overflow | Reorganisasi layout atau nonaktifkan sticky |
| Scroll terasa berat | Write/read berulang atau layer besar | Trace, batch pekerjaan, kurangi layer |
| Link langsung masuk scene kosong | State awal hanya dari event scroll | Sinkronkan state saat init dan direct load |
| Reverse scroll kacau | Animation queue mengikuti arah lama | Pakai progress-driven state atau cancellation |

Gunakan satu demonstrasi yang kuat sebelum memperluas motion seluruh halaman. Narasi efektif ditentukan hubungan informasi, bukan banyaknya adegan.

## Latihan penerapan

Buat dua versi section: statis dan scroll-driven. Uji direct anchor, reverse cepat, viewport pendek, font terlambat dan reduced motion.

## Bukti penerimaan

- [ ] Scroll native dan navigasi tetap bekerja.
- [ ] Isi tetap lengkap pada fallback.
- [ ] Geometry diperbarui ketika layout berubah.
- [ ] Pekerjaan dibatasi pada scene yang relevan.

## Hubungan dan dampak perubahan

[M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M21 — Motion Foundations](21-motion-foundations.md), [M24 — Animation & Graphics Engineering](24-animation-graphics.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S07, S30, S05 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
