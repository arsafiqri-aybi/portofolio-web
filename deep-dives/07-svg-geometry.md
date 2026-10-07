# Pendalaman 07 — SVG geometry dan accessibility

## ViewBox dan coordinate space

SVG memetakan ruang internal ke ukuran CSS. `viewBox="0 0 100 100"` memberi coordinates independen dari ukuran render. Aspect mapping ditentukan `preserveAspectRatio`. Cropping/stretching sengaja perlu diperiksa; screenshot dan bukti tidak boleh terdistorsi demi effect.

## Stroke dan path

Path terdiri dari commands dan control points. Untuk curve, pahami hubungan point/tangent. Stroke mempunyai width, cap, join dan miter. `vector-effect` tertentu dapat menjaga stroke ketika scaling jika sesuai; cek dukungan dan kebutuhan. Path kompleks dapat menambah parse, paint dan animasi cost.

## Draw effect

Stroke-dasharray/dashoffset dapat memperlihatkan path secara bertahap. Ukur panjang melalui API yang sesuai atau gunakan pathLength untuk normalisasi tertentu. Jangan menyatakan normalized length sama dengan CSS pixel dalam semua konteks. Filling, mask dan filter mempengaruhi hasil.

```html
<svg viewBox="0 0 100 100" role="img" aria-labelledby="diagram-title">
  <title id="diagram-title">Hubungan tiga tahap proses latihan</title>
  <path d="M15 70 Q50 10 85 70" fill="none" stroke="currentColor" stroke-width="3" />
  <circle cx="15" cy="70" r="5" fill="currentColor" />
  <circle cx="50" cy="40" r="5" fill="currentColor" />
  <circle cx="85" cy="70" r="5" fill="currentColor" />
</svg>
```

Geometri ini illustration latihan, bukan data numerik. Untuk diagram precise, positions berasal data/model terkontrol.

## Semantik

Decorative SVG dapat diabaikan teknologi bantu. Informative SVG membutuhkan nama/padanan dan urutan yang masuk akal. Diagram kompleks membutuhkan explanation HTML. Teks utama tetap HTML ketika dapat; text outlining menghilangkan banyak kemampuan pembacaan/adaptasi.

## Filters, masks dan cost

Filter region besar, blur dan overlapping transparency dapat menaikkan biaya. Mask/clip berbeda fungsi; pilih sesuai kebutuhan. Scaling dapat memperbesar area paint. Profile pada size actual, bukan SVG kecil dalam tool desain.

## Input mapping

Pointer viewport perlu diubah ke local SVG coordinates ketika ada transforms. Matrix transform inverse dapat membantu mapping sesuai API. Jangan memakai offset satu kali bila SVG/viewport resize. Hit target kecil perlu affordance dan alternatif keyboard bila interaktif.

## Failure dan verification

Uji resize, theme, direct loading, script off, reduced motion dan path fallback. Animation CSS/JS tetap memerlukan stop/reduced variant. Sumber vektor external harus dipercaya/ditangani sesuai security; SVG dapat mengandung konten lebih dari bentuk statis.

Sumber pendalaman S01/S22 dan dokumentasi SVG resmi saat implementation. [M24](../knowledge/motion/24-animation-graphics.md).
