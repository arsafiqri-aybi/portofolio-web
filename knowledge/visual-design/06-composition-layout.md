# M06 — Composition & Layout

> Bidang B · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M05 — Art Direction & Identity](05-art-direction-identity.md)

## Layout sebagai hubungan

Komposisi mengatur hubungan informasi, bukan sekadar posisi kotak. Tentukan titik masuk mata, kelompok informasi, urutan baca, dan titik tindakan. Hierarki terbentuk dari skala, posisi, kontras, spacing dan isi. Ketika semua elemen berukuran besar, tidak ada hierarki yang kuat.

## Grid, alignment dan proporsi

Gunakan container untuk membatasi lebar, grid untuk hubungan antarkolom, dan gap untuk ritme. Grid bukan kewajiban dua belas kolom. Pilih struktur sesuai jumlah konten: satu kolom narasi, dua kolom perbandingan, atau auto-fit untuk kartu. Garis tepi judul, gambar dan paragraf yang konsisten sering meningkatkan kerapian lebih daripada efek baru.

Spacing menunjukkan hubungan: jarak label dengan judul lebih kecil daripada jarak antarseksi. Bangun skala, misalnya `0.5, 0.75, 1, 1.5, 2, 3, 4rem`; nilai ini contoh token proyek, bukan ukuran optimal universal. Gunakan optical alignment ketika bentuk ikon atau huruf terasa tidak sejajar meski koordinat sama.

## Ritme halaman

Bentuk ritme dengan pergantian kepadatan: pembuka singkat, proyek visual, penjelasan terukur, dan kontak jelas. Ruang kosong memberi pemisahan, tetapi terlalu banyak ruang dapat memaksa scroll tanpa informasi. Tentukan tinggi section dari isi dan tujuan; jangan menetapkan semua section `100vh` bila teks panjang terpotong.

Proporsi gambar mengikuti bukti: screenshot desktop membutuhkan ruang lebih lebar, detail antarmuka dapat di-crop. Simpan rasio agar layout stabil. Untuk case study, pisahkan narasi inti dari caption dan meta. Sidebar sticky boleh dipakai jika tidak menutup fokus dan tidak memaksa pembaca melompat urutan.

## Responsive composition

Pada mobile, urutan dan prioritas harus tetap bermakna. Layout dua kolom dapat menjadi satu; gambar dan penjelasan mengikuti urutan DOM yang sesuai. CSS `order` yang berbeda dari DOM dapat menciptakan ketidakcocokan fokus keyboard. Breakpoint ditentukan saat isi mulai gagal, bukan hanya mengikuti nama perangkat.

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}
.prose { max-inline-size: 65ch; }
```

Contoh ini menghindari kartu minimum lebih lebar daripada container sempit. Layout tetap perlu diuji dengan teks panjang, font berbeda dan zoom.

## Kepadatan dan responsive content

Jangan menghilangkan bukti penting hanya agar mobile ringkas. Ringkas isi atau lakukan progressive disclosure dengan kontrol yang jelas. Menyembunyikan teks dapat mengubah makna proyek. Tabel lebar perlu strategi: wrap, reorganisasi per item, atau scroll lokal dengan petunjuk. Hindari horizontal scroll seluruh halaman.

## QA visual

Periksa garis tepi, gap, baseline, pusat optik ikon, padding, overlap, urutan, dan crop. Gunakan screenshot pada beberapa lebar termasuk di antara breakpoint. Screenshot perbandingan membantu menemukan regresi, tetapi perubahan rendering font antarplatform perlu toleransi.

## Diagnosis

Overflow sering berasal dari `min-width:auto` pada item flex/grid, URL panjang, gambar tanpa batas atau nilai width tetap. Coba `min-inline-size:0`, `overflow-wrap:anywhere` pada area yang tepat, dan ukuran media responsif. Jangan langsung memakai `overflow-x:hidden` di body karena dapat menyembunyikan penyebab serta memotong fokus. Jika tampilan terasa tidak seimbang, identifikasi satu penekanan dominan yang salah sebelum mengubah semua spacing.

## Latihan penerapan

Bangun satu section proyek dengan tiga panjang judul dan rasio media berbeda. Uji 320px, lebar menengah, desktop, dan zoom; nilai tersebut matriks latihan, bukan definisi seluruh perangkat.

## Bukti penerimaan

- [ ] Tidak ada overflow halaman yang tidak disengaja.
- [ ] Urutan visual dan DOM selaras.
- [ ] Layout menampung isi panjang tanpa memotongnya.
- [ ] Spacing dan alignment mempunyai aturan konsisten.

## Hubungan dan dampak perubahan

[M02 — Content Architecture](../portfolio-content/02-content-architecture.md), [M05 — Art Direction & Identity](05-art-direction-identity.md), [M07 — Typography](07-typography.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S04, S15, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
