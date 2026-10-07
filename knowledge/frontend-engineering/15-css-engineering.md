# M15 — CSS Engineering

> Bidang D · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](13-web-browser-foundations.md), [M14 — HTML Engineering](14-html-engineering.md)

## Cascade sebagai sistem

CSS bukan hanya kumpulan deklarasi. Hasil ditentukan oleh relevance, origin/importance, layer, specificity, scoping bila dipakai, dan order sesuai aturan cascade. Menambah selector panjang untuk setiap masalah memperbesar konflik. Gunakan struktur layer dan selector sederhana ketika membantu proyek; pahami exception sebelum mengandalkan `!important`.

## Box model dan layout

`box-sizing:border-box` membuat ukuran termasuk padding/border dalam perhitungan yang umum. Margin, padding dan gap mempunyai fungsi berbeda. Flexbox cocok untuk distribusi satu dimensi; Grid untuk relasi dua dimensi. Intrinsic sizing seperti min-content dapat menyebabkan overflow jika teks panjang tidak bisa wrap.

`position:absolute` keluar dari flow normal dan perlu containing block yang benar. Sticky tergantung scroll container, ruang dan offset. Fixed dapat berubah perilaku karena ancestor tertentu. Z-index tinggi tidak menembus stacking context ancestor; inspect konteks, jangan terus menaikkan angka.

## Responsif dan token

Custom properties menyimpan nilai peran dan dapat diwariskan. Gunakan logical properties seperti inline/block ketika membantu arah bahasa. `clamp`, min/max dan query membantu ukuran adaptif. Nilai viewport harus diuji terhadap zoom. Container query berguna untuk komponen reusable, tetapi sediakan fallback sesuai browser target.

```css
:root { --space-section: clamp(3rem, 6vw, 6rem); }
* { box-sizing: border-box; }
body { margin: 0; }
section { padding-block: var(--space-section); }
:focus-visible { outline: 3px solid currentColor; outline-offset: 4px; }
[hidden] { display: none !important; }
```

Aturan `[hidden]` ini mempertahankan semantik hidden ketika selector display komponen lain bertabrakan. Penggunaan important lokal punya alasan; bukan strategi umum semua style.

## State dan specificity

Definisikan default, hover, focus-visible, active, selected, disabled dan error. Batasi hover motion pada capability yang sesuai. Jangan menghapus outline tanpa pengganti. State terpilih dapat memakai atribut seperti `aria-pressed="true"` sebagai sumber style agar UI dan semantik tidak memiliki dua state independen.

## Motion dan containment

Transition dipilih per property; `transition:all` dapat menganimasikan perubahan yang tidak dirancang. Transform bisa menciptakan stacking context dan memengaruhi containing block. Containment/content-visibility dapat mengurangi pekerjaan pada bagian tertentu tetapi perlu diuji terhadap layout, focus, pencarian dan ukuran placeholder. Jangan menggunakan optimasi yang belum diukur hanya karena tersedia.

`will-change` merupakan hint dengan biaya memori/layer. Gunakan terbatas pada elemen yang benar-benar membutuhkan, lalu lepaskan jika sesuai. Layer besar beresolusi tinggi dapat berat walau transform murah.

## Arsitektur style

Pisahkan token, base, layout, komponen dan utilities. Nama menggambarkan fungsi atau komponen, bukan tampilan sementara. Hapus override yang tidak digunakan. Dokumentasikan pengecualian seperti hero dengan skala berbeda. CSS architecture harus cukup sederhana untuk skala portofolio; sistem enterprise tidak otomatis diperlukan.

## Debugging

Gunakan computed styles untuk pemenang cascade, box model untuk ukuran, overlay grid/flex untuk relasi, dan performance trace untuk biaya. Teks terpotong mungkin berasal dari height atau overflow, bukan font. Sticky gagal bisa disebabkan ancestor overflow. Dialog di bawah overlay mungkin berasal stacking context. Ubah satu penyebab dominan lalu verifikasi state lain agar perbaikan tidak memindahkan masalah.

## Latihan penerapan

Bangun kartu dengan seluruh state dan komposisi responsif. Buat satu konflik specificity serta satu stacking context, lalu jelaskan perbaikannya menggunakan computed style.

## Bukti penerimaan

- [ ] Cascade dan pengecualian dapat dijelaskan.
- [ ] Semua state penting mempunyai style.
- [ ] Layout tidak bergantung nilai tetap rapuh.
- [ ] Optimasi rendering mempunyai hasil ukur atau alasan terbatas.

## Hubungan dan dampak perubahan

[M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M07 — Typography](../visual-design/07-typography.md), [M11 — Responsive & Adaptive Experience](../ux-accessibility/11-responsive-adaptive.md), [M13 — Web & Browser Foundations](13-web-browser-foundations.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S04, S15, S23 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [01-css-intrinsic-layout](../../deep-dives/01-css-intrinsic-layout.md).
