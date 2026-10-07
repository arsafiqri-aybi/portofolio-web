# M17 — Frontend Architecture

> Bidang E · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md)

## Arsitektur mengikuti kebutuhan

Portofolio frontend membutuhkan konten yang mudah ditemukan, navigasi yang andal dan interaksi terarah. Mulai dengan static HTML/CSS/JS atau generator statis jika isi berulang. Framework dipilih ketika manfaat komponen, routing atau tooling melampaui biaya bundle dan pemeliharaan. Tidak ada stack yang otomatis memberi desain terbaik.

## Rendering dan distribusi

Static rendering menghasilkan HTML sebelum dikirim. Client-side rendering membangun isi melalui JS di browser. Hydration menghubungkan HTML awal dengan runtime tertentu. Islands dapat membatasi interaktivitas pada bagian. Pengetahuan ini membantu memilih strategi, tetapi portofolio sederhana tidak membutuhkan seluruh pola sekaligus.

Sediakan konten inti dalam HTML dan enhancement lokal. Ini mengurangi ketergantungan loading JS untuk tugas utama. Jika memakai generator, periksa output final, route, assets dan metadata. Build sukses belum membuktikan konten benar-benar tersedia di URL produksi.

## Struktur proyek

Pisahkan konten, style, behavior, assets, tooling dan tests. Komponen kecil memiliki tanggung jawab yang jelas. Data proyek tidak perlu menyimpan state hover. State filter tidak perlu disimpan ke server. Data yang dapat diturunkan dihitung dari sumber kebenaran sehingga tidak mudah tidak sinkron.

```text
src/          kode sumber bila menggunakan build
content/      data dan narasi proyek
public/       aset statis
styles/       token dan komponen
scripts/      behavior frontend
checks/       verifikasi
```

Struktur ini contoh konseptual; nama folder dapat berubah. Jangan membuat abstraksi tanpa kebutuhan yang berulang.

## Route dan base path

GitHub Pages menyajikan file statis. Route virtual seperti `/project/123` memerlukan file atau strategi host yang mendukung fallback. Untuk portofolio, halaman detail statis dan anchor dapat menghindari 404 refresh. Jangan mengandalkan rewrite server yang tidak tersedia.

Root-relative asset harus memasukkan base path yang benar pada project site. Uji output melalui server lokal di subpath dan URL langsung. Beranda, halaman detail dan 404 perlu mempunyai navigasi yang masih bekerja.

## Komponen dan dependency boundaries

Komponen menerima data yang diperlukan dan tidak diam-diam mengubah seluruh dokumen. Contoh filter memiliki container, controls, count dan fungsi dispose. Token tidak diimport dari halaman tertentu. Shared utility hanya muncul saat ada kebutuhan bersama nyata.

Untuk library, catat tujuan, license, ukuran terpakai, dukungan browser, versi dan jalur penggantian. Jangan menambah paket untuk satu fungsi yang sederhana jika native API cukup. Sebaliknya, jangan menulis ulang mesin rumit tanpa manfaat dan pengujian memadai.

## Content workflow

Pilih apakah pemilik mengedit Markdown, JSON atau HTML. Jika nonteknis, dokumentasikan proses sederhana; CMS bukan default dalam scope backend ditunda. Schema membantu konsistensi, tetapi konten panjang sering lebih nyaman di Markdown. Pastikan tidak ada fakta yang tertinggal di banyak sumber.

## ADR dan evolution

ADR mencatat keputusan penting: static multipage, font strategy, motion engine, media hosting, analytics omission. Catat alternatif yang masuk akal, alasan, dampak dan kondisi revisit. Perubahan teknis ditinjau terhadap pengguna, kualitas dan biaya Rp0.

## Diagnosis

Arsitektur terlalu kompleks terlihat dari banyak file kosong, state global untuk hover, dan dependency yang tidak terpakai. Terlalu sederhana terlihat dari konten ganda yang tidak konsisten atau behavior saling menimpa. Refactor berdasarkan risiko dan pengulangan yang nyata, lalu jalankan regression pada alur terdampak.

## Latihan penerapan

Tulis ADR stack dan diagram tanggung jawab. Bangun satu halaman detail yang dapat dibuka langsung di subpath tanpa backend.

## Bukti penerimaan

- [ ] Arsitektur memenuhi kebutuhan tanpa layanan berbayar wajib.
- [ ] Konten inti tersedia sebelum enhancement.
- [ ] Route dan assets cocok host statis.
- [ ] Alasan dependensi dan cara penggantian tercatat.

## Hubungan dan dampak perubahan

[M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M13 — Web & Browser Foundations](../frontend-engineering/13-web-browser-foundations.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M18 — Design System & Components](18-design-system-components.md), [M19 — Development & Build Tooling](19-development-tooling.md), [M20 — AI-Assisted Engineering](20-ai-assisted-engineering.md), [M27 — Reliability & Compatibility](../performance-reliability/27-reliability-compatibility.md), [M31 — GitHub Production & Discoverability](../verification-production/31-github-production-seo.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S01, S27, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
