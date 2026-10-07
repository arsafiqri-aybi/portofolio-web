# Pendalaman 05 — Pipeline media dan font

## Sumber versus delivery

Simpan provenance dan sumber kualitas tinggi sesuai pengelolaan proyek; deliver hanya versi yang dibutuhkan browser. Source 8MB tidak harus menjadi resource awal. Gunakan manifest dengan fungsi, dimensi, byte, format, alt/caption dan hak penggunaan.

## Responsive source

```html
<img src="./project-800.webp"
     srcset="./project-480.webp 480w, ./project-800.webp 800w, ./project-1200.webp 1200w"
     sizes="(min-width: 60rem) 36rem, calc(100vw - 3rem)"
     width="1200" height="800"
     alt="Deskripsi informasi yang dijelaskan screenshot">
```

Snippet memakai nama file hipotetis; file tidak menjadi bagian lab. `sizes` harus sesuai layout actual. Browser memperhitungkan DPR dan faktor lain; periksa `currentSrc` serta transfer di Network. Jangan menambahkan descriptor width yang tidak cocok file.

## Format decision

Foto, teks screenshot, transparansi dan vektor mempunyai kebutuhan berbeda. Bandingkan visual dan byte. Format baru tidak selalu unggul pada semua isi. Screenshot dengan huruf kecil dapat memerlukan kualitas lebih tinggi atau crop terpisah. Animated bitmap/video dapat jauh lebih besar; gunakan poster dan activation sesuai fungsi.

## Loading priority

Resource penting untuk awal perlu ditemukan cepat. Lazy loading gambar utama dapat menunda isi. Preload digunakan selektif untuk resource yang browser sulit temukan awal; jangan duplikasi request dengan URL/type yang tidak cocok. Priority hint perlu diuji karena browser tetap menjadwalkan resource.

## Font

Pilih system atau web font berdasarkan identity benefit. Batasi family/weight/script. WOFF2 lazim untuk delivery modern, tetapi dukungan target dan lisensi tetap diperiksa. Variable font mengganti beberapa face bisa berguna; bandingkan total byte actual dan subsets.

Fallback metrics menentukan wrapping. Uji teks sebelum font datang dan saat gagal. Metrik override/size-adjust membutuhkan data font dan pengukuran. Hindari hiding seluruh page sampai font ready. Perubahan fallback yang memperbaiki shift dapat mengubah visual; review keduanya.

## Compression dan versioning

File source size berbeda dari compressed transfer. Server menentukan encoding dan cache header; kemampuan Pages tidak sama dengan custom server. Hashed assets membantu invalidation ketika toolchain dipakai; relative URLs dan base path tetap benar.

## Acceptance

Aset masih menerangkan bukti setelah kompresi; source dipilih sesuai viewport; tidak ada shift tanpa ruang; font failure tetap terbaca; semua hak tercatat. Kualitas media yang terlalu rendah dapat menurunkan fungsi meski score meningkat.

Sumber: S16/S17/S33. [M25](../knowledge/performance-reliability/25-loading-assets.md).
