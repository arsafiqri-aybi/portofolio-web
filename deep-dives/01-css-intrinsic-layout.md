# Pendalaman 01 — Intrinsic layout dan diagnosis CSS

## Mengapa width tidak selalu cukup

Ukuran akhir lahir dari constraints, isi, intrinsic size, container dan layout algorithm. Item flex/grid dapat mempertahankan minimum berdasarkan konten. Karena itu `width:100%` pada gambar tidak selalu menyelesaikan overflow ancestor; inspect item yang menolak menyusut.

## Min-content dan max-content

Min-content adalah ukuran minimum dalam aturan pemecahan yang relevan; max-content berkaitan dengan ukuran tanpa pemecahan yang diizinkan. Kata panjang/URL dan elemen replaced dapat menaikkan minimum. `minmax(0,1fr)` memungkinkan track menyusut melewati automatic minimum sesuai konteks. `min-inline-size:0` pada item adalah perbaikan lokal yang sering tepat, tetapi tetap pastikan isi dapat wrap atau scroll dengan jelas.

```css
.case-layout { display:grid; grid-template-columns:minmax(0,2fr) minmax(0,1fr); gap:2rem; }
.case-layout > * { min-inline-size:0; }
.long-url { overflow-wrap:anywhere; }
.media { max-inline-size:100%; block-size:auto; }
@media (max-width:48rem) { .case-layout { grid-template-columns:1fr; } }
```

Contoh mengatasi minimum layout; angka breakpoint adalah usulan. Jangan menerapkan `anywhere` pada seluruh kata display bila merusak komposisi.

## Percentage height dan containing block

Persentase height membutuhkan konteks ukuran yang sesuai. `height:100%` tidak berarti viewport. Absolute positioning menggunakan containing block yang ditetapkan oleh kondisi ancestor. Transform dan beberapa properties dapat mempengaruhi konteks. Debug dengan ancestor chain, computed size dan position, bukan menambah height sampai terlihat.

## Stacking context

Z-index dibandingkan dalam konteks. Child dengan z-index sangat besar tetap tidak keluar di atas sibling ancestor tertentu. Transform, opacity tertentu dan properties lain dapat membuat stacking context. Dialog native modal berada pada top layer ketika `showModal` digunakan; overlay div biasa tidak otomatis memperoleh behavior yang sama.

## Sticky dan overflow

Sticky membutuhkan offset dan ruang untuk bergerak. Ancestor overflow dapat membuat scroll container berbeda. Jika sticky element setinggi viewport atau parent pendek, efeknya bisa tidak sesuai. Pada mobile landscape atau zoom, sticky editorial dapat memakan seluruh ruang. Fallback nonsticky sering tepat untuk viewport pendek.

## Metode diagnosis

1. Reproduksi lebar dan isi yang gagal.
2. Temukan elemen dengan bounding box melebihi viewport.
3. Periksa min-size, fixed width, margin, transform dan resource intrinsic.
4. Ubah constraint yang menyebabkan, bukan menyembunyikan body overflow.
5. Uji narrow/intermediate/wide dan keyboard focus setelah perbaikan.

## Acceptance

Tidak ada clipping yang menyembunyikan bukti; wrap/scroll lokal dapat dipahami; visual order dan DOM order selaras. Catat exceptions untuk media yang memang memerlukan pan/zoom.

Sumber pendalaman: S04, S15, S23; status akses pada [register](../sources/REGISTER.md). [M15](../knowledge/frontend-engineering/15-css-engineering.md).
