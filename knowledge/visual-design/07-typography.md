# M07 — Typography

> Bidang B · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M05 — Art Direction & Identity](05-art-direction-identity.md), [M06 — Composition & Layout](06-composition-layout.md)

## Peran tipografi

Tipografi mengatur suara, hirarki dan keterbacaan. Tetapkan peran display, heading, body, meta, angka dan kode. Satu keluarga dengan variasi weight dapat cukup. Dua keluarga berguna jika mempunyai perbedaan fungsi; lebih banyak keluarga menambah beban visual dan aset.

## Pemilihan font

Periksa bentuk huruf, dukungan bahasa, lisensi, panjang judul, karakter angka dan kualitas fallback. Font yang menarik di kata pendek belum tentu nyaman di case study panjang. Gunakan isi realistis, termasuk nama, istilah teknis, tanda baca dan URL. Font sistem dapat menghasilkan tampilan matang tanpa download; web font dipilih bila manfaat identitasnya sebanding dengan biaya.

## Skala dan ritme

Tentukan hubungan ukuran judul, subjudul dan body. Skala modular adalah titik awal, bukan hukum. Line-height body lebih longgar daripada display; heading besar dapat lebih rapat selama karakter tidak bertabrakan. Panjang baris membatasi gerakan mata, tetapi target numerik harus diuji dengan font dan bahasa yang dipakai.

```css
:root {
  --text-body: 1rem;
  --text-display: clamp(2.5rem, 1.2rem + 5vw, 5rem);
}
h1 { font-size: var(--text-display); line-height: 1.06; }
p { max-inline-size: 65ch; line-height: 1.65; }
```

Angka di atas contoh desain. `clamp` memberi batas bawah dan atas; komponen `rem` membantu mengikuti ukuran dasar pengguna. Hindari skala berbasis viewport murni yang dapat melemahkan pembesaran teks. Uji zoom dan text spacing secara nyata.

## Detail optik

Tracking negatif pada display dapat membantu kepadatan, tetapi terlalu rapat merusak huruf. Uppercase panjang sulit dipindai; gunakan untuk label singkat bila sesuai. Kerning font tidak selalu sama pada semua kombinasi. Angka tabular membantu kolom nilai, sementara proportional figures lebih natural untuk narasi.

Font weight bukan satu-satunya pembeda; gabungkan ukuran, posisi dan ruang. Teks meta yang terlalu samar sering dipilih demi estetika tetapi kehilangan keterbacaan. Hindari informasi penting dalam huruf dekoratif yang sangat kecil.

## Loading dan fallback

Web font mempengaruhi tampilan awal dan potensi pergeseran layout. Batasi keluarga, weight dan subset yang diperlukan. Variable font bisa mengurangi beberapa file, tetapi ukuran dan penggunaan aktual harus dibandingkan. `font-display` mengatur perilaku pemuatan, bukan menghilangkan seluruh biaya. Preload hanya font kritis yang benar-benar digunakan segera; preload semua file memboroskan prioritas.

Fallback dengan metrik berbeda dapat mengubah wrapping. Uji halaman sebelum font utama selesai dan ketika font gagal. Teknik penyesuaian metrik seperti `size-adjust` memerlukan pengukuran, bukan angka acak. Jangan menyembunyikan seluruh halaman sampai font selesai.

## Konten dan akses

Jangan merender body menjadi gambar atau Canvas demi efek tipografi. Teks HTML tetap dapat dipilih, dicari, dibaca teknologi bantu dan disesuaikan. Motion per huruf membutuhkan salinan semantik yang benar dan menghindari pengalaman pembaca layar yang terpecah. Heading yang dianimasikan tetap harus memiliki nama utuh.

## Diagnosis

Layout berubah ketika font datang: bandingkan metrik fallback, ukuran dan area yang disediakan. Judul terlalu banyak baris: tinjau panjang konten dan lebar, bukan langsung mengecilkan semua heading. Teks terlihat tipis pada background terang: periksa weight, kontras dan rendering perangkat. QA harus mencakup layar nyata, bukan hanya gambar desain.

## Latihan penerapan

Buat specimen berisi heading panjang, paragraf, angka dan label. Bandingkan font sistem dengan satu kandidat web font pada pemuatan lambat dan kondisi gagal.

## Bukti penerimaan

- [ ] Hierarki terbaca pada mobile dan desktop.
- [ ] Font berlisensi sesuai penggunaan.
- [ ] Zoom dan penyesuaian teks tidak memotong isi.
- [ ] Fallback tetap layak dipakai.

## Hubungan dan dampak perubahan

[M04 — Writing & Storytelling](../portfolio-content/04-writing-storytelling.md), [M06 — Composition & Layout](06-composition-layout.md), [M08 — Color, Surface & Assets](08-color-surface-assets.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S16, S02, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
