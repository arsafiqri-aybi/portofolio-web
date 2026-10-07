# M14 — HTML Engineering

> Bidang D · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](13-web-browser-foundations.md)

## HTML adalah kontrak makna

HTML memberi struktur sebelum CSS dan JavaScript. Dokumen harus mempunyai doctype, charset, viewport, bahasa dan title yang sesuai. Main content dapat dibaca ketika script tidak tersedia. Progressive enhancement menambah fitur setelah fondasi berhasil.

```html
<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nama Pemilik — Portofolio</title>
</head>
<body>
  <a href="#main">Lewati navigasi</a>
  <header><nav aria-label="Utama"><a href="#proyek">Proyek</a></nav></header>
  <main id="main"><h1>Peran dan nilai yang benar</h1>
    <section id="proyek" aria-labelledby="projects-title">
      <h2 id="projects-title">Proyek pilihan</h2>
    </section>
  </main>
</body>
</html>
```

Nama dan teks contoh harus diganti fakta sebelum publikasi portofolio.

## Struktur dan relasi

Heading mengikuti topik, bukan dipilih karena ukuran default. Article cocok untuk item mandiri; section mengelompokkan topik; div untuk wrapper tanpa makna khusus. List cocok untuk kumpulan item. Table untuk data yang mempunyai hubungan baris/kolom, bukan layout halaman.

Gunakan `figure/figcaption` ketika media dan caption satu unit. `time` dengan nilai mesin membantu tanggal. Semantik yang baik memperjelas isi, tetapi bukan jaminan ranking atau skor aksesibilitas otomatis.

## Link dan button

Anchor memerlukan href yang benar. Hindari `href="#"` sebagai placeholder aksi. Button menggunakan `type="button"` bila tidak mengirim form. Teks link harus menjelaskan tujuan. Link external yang membuka tab baru dapat memberi indikasi; jangan membuka semua link baru tanpa alasan.

Kartu dengan beberapa tindakan jangan dibungkus anchor yang berisi button/link lain. Pisahkan link judul, demo dan repository. Area klik yang terlalu besar dapat menghambat pemilihan teks; uji kebutuhan sebelum memakai stretched link.

## Media dan dimensi

Gambar memakai alt sesuai fungsi, dimensi intrinsik, dan sumber yang tepat. Gambar utama yang menjadi konten awal jangan otomatis lazy-loaded. Gambar bawah dapat memakai lazy loading. SVG dekoratif diberi perlakuan aksesibel yang tidak menambah noise; SVG informatif memerlukan nama atau padanan.

Video mempunyai kontrol dan poster sesuai fungsi. Jangan autoplay audio sebagai dekorasi. Screenshot berisi teks bukan pengganti narasi HTML. Embedding pihak ketiga menambah request, privasi dan kegagalan; alternatif link sering cukup untuk portofolio gratis.

## Forms dalam scope statis

Label harus terhubung dengan input, tipe sesuai data, dan error terjelaskan. Validasi klien membantu input tetapi bukan keamanan. Tanpa backend atau layanan form yang benar, jangan membuat UI yang mengaku menerima pesan. Link email atau kontak yang nyata lebih jujur. Form latihan harus ditandai demonstrasi.

## Progressive enhancement

Simpan proyek penting sebagai HTML. Script dapat menampilkan tombol filter setelah listener siap. Bila JS gagal, daftar tetap lengkap. Elemen hidden bisa mengeluarkan kontrol yang belum berfungsi; jangan menyembunyikan konten inti untuk menunggu animasi. Enhancement harus dapat gagal secara lokal tanpa merusak seluruh halaman.

## Validasi dan diagnosis

Periksa id unik, heading, nesting, label, link, resource dan metadata. Parser browser memperbaiki beberapa markup invalid sehingga halaman tampak bekerja, tetapi struktur DOM hasilnya bisa berbeda dari sumber. Validator membantu syntax; pemeriksaan manual menilai makna. Ketika event target tidak sesuai, cek DOM aktual dan nesting terlebih dahulu.

## Latihan penerapan

Bangun beranda tanpa CSS/JS terlebih dahulu. Pastikan identitas, proyek dan kontak terbaca, lalu tambahkan enhancement satu per satu.

## Bukti penerimaan

- [ ] Konten inti ada dalam HTML.
- [ ] Struktur dan nama kontrol sesuai fungsi.
- [ ] Id dan jalur resource valid.
- [ ] Kegagalan JS tidak menghilangkan seluruh portofolio.

## Hubungan dan dampak perubahan

[M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M13 — Web & Browser Foundations](13-web-browser-foundations.md), [M15 — CSS Engineering](15-css-engineering.md), [M16 — JavaScript & Type Systems](16-javascript-types.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S01, S22 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
