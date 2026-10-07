# M02 — Content Architecture

> Bidang A · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M01 — Portfolio Strategy](01-portfolio-strategy.md)

## Informasi sebelum layout

Arsitektur konten menentukan informasi apa yang ada, bagaimana dihubungkan, dan bagaimana ditemukan. Mulai dari inventory: identitas, bio, kemampuan, proyek, bukti, kontak, CV bila tersedia, serta tanggal pembaruan. Untuk setiap item catat sumber, status faktual, pemilik, sensitivitas, dan lokasi penggunaannya. Gambar dengan izin tidak jelas belum siap tayang.

## Hierarki dan navigasi

Susun lapisan: ringkasan identitas → pilihan proyek → detail bukti → kontak. Urutan ini usulan untuk portofolio; ubah bila tugas utama berbeda. Gunakan nama navigasi yang bisa dimengerti tanpa membaca slogan. Label “Work” atau “Proyek” menjelaskan tujuan; label metaforis dapat memerlukan penjelasan tambahan.

Situs satu halaman cocok untuk isi ringkas. Halaman detail terpisah cocok ketika case study panjang, perlu tautan langsung, metadata khusus, atau banyak media. Kombinasi beranda ringkas dan detail statis sering menjaga orientasi. Keputusan jumlah halaman berasal dari panjang dan hubungan isi, bukan tuntutan sebuah framework.

## Model data konten

Definisikan kontrak proyek: id stabil, judul, ringkasan, status, tahun, peran, kategori, masalah, keputusan, hasil, bukti, media, dan link. Pisahkan hasil yang diukur dari kesan reviewer. Jangan simpan informasi privat atau dokumen klien tanpa izin dalam data publik. Gunakan kategori terbatas dan konsisten; “AI”, “Design”, dan “Frontend” boleh tumpang tindih jika filter mendukung banyak kategori.

```json
{
  "id": "motion-study",
  "title": "Motion Study",
  "status": "experiment",
  "role": ["Design", "Frontend"],
  "summary": "Eksperimen interaksi kartu dengan fallback statis.",
  "evidence": [{"kind": "demo", "path": "./motion-study/"}]
}
```

Objek ini contoh fiktif dan tidak menyatakan proyek milik pemilik sudah ada.

## URL, jalur, dan orientasi

URL harus stabil dan deskriptif. Untuk project Pages, situs dapat berada di `/nama-repo/`; URL aset berawalan `/` mengarah ke root domain, bukan root proyek. Jalur relatif cocok untuk contoh sederhana. Untuk generator, gunakan konfigurasi base URL dan bangun di subpath saat uji. Fragmen seperti `#proyek` memerlukan id unik dan heading yang tidak tertutup sticky header.

Navigasi internal mempertahankan perilaku browser: Back, membuka tab baru, menyalin alamat, dan akses langsung. Client-side filter tidak otomatis menjadi halaman indeks terpisah. Jangan bergantung pada route virtual yang menghasilkan 404 ketika direfresh di host statis.

## Progressive disclosure dan penemuan

Kartu berisi cukup informasi untuk memilih: judul, jenis proyek, kontribusi, serta hasil atau pembelajaran. Case study memuat detail. Accordion membantu konten tambahan, tetapi informasi kritis jangan tersembunyi tanpa alasan. Pengunjung tidak perlu menonton animasi penuh untuk menemukan link proyek.

Bila kategori sedikit, navigasi sederhana bisa lebih efektif daripada pencarian. Ketika filter digunakan, tampilkan jumlah hasil dan pesan kosong, sediakan reset, dan pertahankan akses keyboard. Definisikan perilaku saat proyek cocok dengan beberapa kategori.

## Bahasa, arsip, dan isi yang berubah

Tetapkan bahasa utama dan konsistensi istilah. Jika multibahasa diperlukan, tiap versi memiliki padanan konten, `lang`, navigasi bahasa dan strategi URL. Terjemahan tidak boleh menambah hasil atau kemampuan baru. Halaman proyek yang diarsipkan dapat tetap menjelaskan peran dan status demo; tandai bila link tidak lagi tersedia.

## Diagnosis

Kartu yang terlalu padat biasanya mencampurkan ringkasan dan seluruh proses. Detail yang sulit ditemukan sering disebabkan label samar atau hierarki datar. Halaman mobile yang panjang tanpa orientasi membutuhkan heading, anchor atau ringkasan, bukan sekadar lebih banyak animasi. Perbaiki model isi sebelum memaksa CSS menampung struktur yang tidak jelas.

## Latihan penerapan

Buat inventory dan sitemap portofolio. Jalankan tugas “temukan kontribusi pada proyek X” melalui beranda dan tautan langsung. Uji URL di root dan subpath.

## Bukti penerimaan

- [ ] Semua halaman/detail mempunyai tujuan.
- [ ] Heading, id, kategori dan URL konsisten.
- [ ] Navigasi Back dan akses langsung direncanakan.
- [ ] Fakta, status proyek dan bukti dapat ditelusuri.

## Hubungan dan dampak perubahan

[M01 — Portfolio Strategy](01-portfolio-strategy.md), [M03 — Case Study & Evidence](03-case-study-evidence.md), [M04 — Writing & Storytelling](04-writing-storytelling.md), [M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S01, S12, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
