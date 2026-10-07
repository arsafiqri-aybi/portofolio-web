# Pendalaman 03 — Dialog, fokus dan semantics

## Kapan dialog tepat

Dialog cocok untuk tugas singkat yang membutuhkan konteks halaman tetap tersedia. Case study panjang sering lebih baik di halaman statis dengan URL tersendiri. Pilihan visual tidak boleh menghapus kemampuan direct link, Back dan reading yang nyaman.

## Native foundation

Elemen `dialog` dengan `showModal` menyediakan behavior modal browser. Tetap beri accessible name, close control, isi dan strategi fokus. `open` attribute sendiri tidak sama dengan pemanggilan showModal. Fallback link detail tetap ada ketika API/script tidak tersedia.

```html
<button type="button" id="open">Buka ringkasan</button>
<dialog aria-labelledby="title" id="dialog">
  <button type="button" id="close">Tutup</button>
  <h2 id="title">Ringkasan proyek</h2>
  <p>Isi yang benar dan singkat.</p>
</dialog>
```

## Fokus awal dan kembali

Fokus awal bergantung tugas. Close button masuk akal untuk ringkasan sederhana; heading static dengan tabindex=-1 dapat membantu reading isi kompleks bila sesuai pola. Jangan menetapkan semua dialog fokus ke aksi destruktif. Simpan opener dan kembalikan ketika masih connected, terlihat dan dapat digunakan. Bila opener hilang, pilih posisi logis lain.

Labs menggunakan native dialog dan explicit close-focus. Browser tests yang disediakan memeriksa Escape dan return; simulasi DOM hanya memeriksa script handler, bukan native trap. Ini perbedaan bukti yang penting.

## Closing dan animasi

State modal dan closing animation mempunyai timing berbeda. Menunda close tanpa mekanisme cancellation dapat membuat Escape terasa gagal. Jika animasi closing digunakan, sediakan interruption dan jaga kendali. Menghapus dialog sebelum focus return dapat kehilangan reference.

## Scroll, tinggi dan ukuran

Dialog perlu fit viewport, scroll internal yang jelas dan close control yang dapat dicapai. Viewport pendek dan zoom dapat memerlukan layout berbeda. Hindari fixed height dengan overflow hidden yang memotong isi. Scroll lock buatan dapat mengubah posisi halaman dan perlu pemulihan; native behavior tetap diuji pada browser target.

## Names, description dan status

Title memberi name. Description panjang tidak selalu cocok dibaca sekaligus saat modal terbuka; struktur heading/paragraf dapat lebih baik. Jangan menduplikasi seluruh case study ke aria-description. Live region untuk status singkat tidak dipakai sebagai pengganti struktur isi.

## Failure matrix

Open melalui keyboard; Tab/Shift+Tab; Escape; close button; double open; opener dihapus; filter berubah; resize; reduced motion; JS off; showModal unavailable. Expected result tertulis sebelum implementation. Tidak semua browser memiliki bug sama, jadi manual/browsers diuji terpisah.

Sumber: S08/S18 serta S02 untuk kriteria relevan. [M10](../knowledge/ux-accessibility/10-interaction-design.md), [M12](../knowledge/ux-accessibility/12-accessibility.md).
