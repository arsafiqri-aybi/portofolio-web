# M18 — Design System & Components

> Bidang E · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M05 — Art Direction & Identity](../visual-design/05-art-direction-identity.md), [M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M07 — Typography](../visual-design/07-typography.md), [M08 — Color, Surface & Assets](../visual-design/08-color-surface-assets.md), [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md)

## Design system yang sesuai ukuran

Sistem desain portofolio berisi aturan yang benar-benar dipakai. Mulai dari token dan komponen berulang, bukan katalog semua varian yang mungkin. Tujuannya menjaga konsistensi visual, behavior dan accessibility saat halaman bertambah.

## Token bertingkat

Primitive menyimpan nilai; semantic menyimpan fungsi; component token menyimpan kebutuhan lokal bila perlu. Contoh `--blue-600` → `--color-action` → `--button-background`. Skala spacing, type, radius, shadow, duration dan easing perlu mempunyai peran. Jumlah token mengikuti kebutuhan, bukan ukuran kedewasaan proyek.

```css
:root {
  --space-2: .5rem;
  --space-4: 1rem;
  --color-bg: #10141b;
  --color-text: #f3f5f8;
  --color-action: #b6d8ff;
  --motion-fast: 160ms;
  --ease-response: cubic-bezier(.2,.8,.2,1);
}
```

Nilai warna/durasi ini contoh; uji pasangan final dan behavior. Jangan menganggap satu easing cocok seluruh motion.

## Spesifikasi komponen

Tiap komponen mencatat tujuan, semantik, isi, props/state, varian, responsive rules, keyboard, focus, motion, fallback dan edge cases. Button berbeda dari link meski style serupa. Card memerlukan aturan judul panjang, gambar gagal dan tindakan ganda. Dialog memerlukan focus lifecycle; filter memerlukan hasil kosong.

Buat component specimen yang memperlihatkan status default, hover, focus, pressed, selected, disabled, loading, error dan success sesuai fungsi. Jangan membuat loading palsu hanya agar katalog lengkap. State yang tidak relevan ditandai tidak berlaku.

## Konsistensi desain dan kode

Gunakan satu sumber token yang didokumentasikan. Ketika desain berubah, periksa seluruh pemakaian. Custom override harus mempunyai alasan; jika berulang, mungkin varian komponen. Dokumentasikan pengecualian supaya polesan tidak menjadi patch CSS berlapis.

Visual consistency tidak mengharuskan semua proyek mempunyai warna sama. Bingkai portofolio tetap konsisten sementara gambar proyek mempertahankan identitas sendiri. Bedakan perubahan gaya halaman dan perubahan fungsi kontrol.

## Motion tokens dan choreography

Token duration memberi rentang awal untuk feedback, reveal dan scene transition. Choreography menentukan urutan dan hubungan elemen. Token tidak menggantikan state machine. Animasi yang batal perlu kembali ke state visual benar dan tidak meninggalkan fill style yang bertabrakan dengan responsive layout.

Reduced-motion variant bagian dari spesifikasi komponen. Tooltip atau card hover tidak boleh membutuhkan gerak agar informasi terlihat. Library komponen tidak membebaskan proyek dari pemeriksaan aksesibilitas final.

## Versioning dan pengelolaan

Catat perubahan token/behavior di changelog. Bila ukuran target atau urutan fokus berubah, lakukan regression pada halaman yang memakai komponen. Tidak perlu versioning paket terpisah bila hanya satu portofolio, tetapi perubahan yang memengaruhi semua halaman harus teridentifikasi.

## Diagnosis

Komponen terlalu banyak variant: cek apakah sebenarnya konten berbeda atau layout berbeda. Style tampak serupa tapi behavior berbeda: periksa apakah semantics salah disatukan. Visual QA gagal pada isi panjang: tambahkan fixtures realistis, bukan memotong konten. Token berlebihan: hapus duplikasi fungsi dan pertahankan daftar peran yang bisa dipahami.

## Latihan penerapan

Buat token dan specimen tiga komponen inti. Isi dengan judul panjang, gambar gagal, keyboard focus dan reduced motion.

## Bukti penerimaan

- [ ] Token mempunyai fungsi yang jelas.
- [ ] Spesifikasi mencakup behavior dan fallback.
- [ ] Pengecualian dicatat.
- [ ] Komponen diuji dengan isi realistis dan status penting.

## Hubungan dan dampak perubahan

[M05 — Art Direction & Identity](../visual-design/05-art-direction-identity.md), [M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M07 — Typography](../visual-design/07-typography.md), [M08 — Color, Surface & Assets](../visual-design/08-color-surface-assets.md), [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md), [M21 — Motion Foundations](../motion/21-motion-foundations.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S02, S04, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
