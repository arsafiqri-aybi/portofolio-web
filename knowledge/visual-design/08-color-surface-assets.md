# M08 — Color, Surface & Assets

> Bidang B · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M05 — Art Direction & Identity](05-art-direction-identity.md), [M06 — Composition & Layout](06-composition-layout.md), [M07 — Typography](07-typography.md)

## Palet berdasarkan peran

Pisahkan warna primitive dari semantic token. Primitive menjelaskan nilai; semantic menjelaskan fungsi seperti text, muted, background, border, focus dan accent. Komponen menggunakan fungsi agar pergantian tema tidak mengharuskan menulis ulang tiap warna. Warna merek tidak otomatis cocok untuk teks kecil atau status.

## Kontras dan informasi

Hitung kontras pada pasangan final, termasuk opacity, background image dan state hover. Warna saja tidak boleh menjadi satu-satunya pembeda kategori aktif atau error; tambahkan teks, ikon atau perubahan bentuk. Kontras pada gambar bergerak memerlukan surface atau area aman yang stabil.

Rasio standar aksesibilitas dijelaskan dalam modul M12. Di sini keputusan desainnya: jangan mempertahankan warna samar untuk isi penting ketika dapat mengubah peran warna. Muted bukan berarti tidak terbaca. Periksa tema terang/gelap secara terpisah.

## Surface, kedalaman dan material

Surface membantu memisahkan kelompok. Border tipis, perubahan tone dan shadow dapat memberi kedalaman. Shadow mengikuti sumber cahaya dan level elevasi yang konsisten. Banyak shadow kuat membuat semua elemen terlihat mengambang dan menurunkan hierarki.

Blur, glass dan gradient mempunyai biaya serta kondisi gagal. Backdrop yang berubah-ubah bisa membuat teks sulit dibaca. Batasi area, gunakan fallback solid, dan uji scroll pada perangkat lemah. Jangan menganggap setiap efek CSS otomatis dikerjakan GPU secara murah.

## Sistem ikon dan ilustrasi

Tetapkan grid, stroke, ukuran optik, cap/join dan gaya fill. Ikon visual tidak selalu cukup sebagai label tindakan; tombol ikon memerlukan nama aksesibel. Ikon dekoratif jangan dibaca sebagai informasi terpisah. SVG cocok untuk bentuk dan diagram sederhana, tetapi path sangat kompleks dapat berat; SVG bukan jaminan file kecil.

Ilustrasi membantu menjelaskan karakter atau proses. Untuk diagram yang harus akurat, gunakan data/geometri terkontrol. Gambar hasil generasi tidak menjadi bukti proyek sebenarnya. Simpan provenance: dibuat sendiri, lisensi, atribusi dan izin perubahan.

## Fotografi, screenshot dan crop

Screenshot menunjukkan antarmuka; foto menunjukkan konteks atau pemilik. Pilih berdasarkan tugas. Crop harus mempertahankan bagian yang menjelaskan kontribusi. `object-fit:cover` dapat memotong informasi penting; gunakan `contain` atau gambar berbeda ketika isi adalah bukti.

Buat manifest aset: nama, fungsi, format, dimensi, byte, alt/caption, sumber, lisensi dan lokasi. Gunakan nama file deskriptif. Jangan memasukkan seluruh video sumber ke payload awal halaman. Media proyek dapat mempunyai thumbnail ringan dan versi detail yang dimuat sesuai kebutuhan.

## Pipeline media

Pertahankan sumber kualitas tinggi di tempat yang sesuai dan ekspor versi web. Pilih format dari jenis isi dan hasil perbandingan: foto, transparansi, vektor, animasi. Gunakan beberapa ukuran jika manfaatnya nyata. Kompresi dinilai dari byte dan artefak visual, bukan persentase kualitas yang sama untuk semua gambar.

`width` dan `height` membantu browser menyediakan rasio. `srcset` dan `sizes` memberi pilihan sumber; `sizes` yang salah dapat membuat browser mengambil gambar jauh lebih besar. Uji resource yang dipilih melalui Network panel.

## Diagnosis

Tampilan tampak generik: cari ketidakselarasan aset, ikon dan type roles. Efek material terasa berat: bandingkan tanpa blur sebelum mengganti framework. Screenshot tidak terbaca pada mobile: pecah menjadi detail dan caption. Lisensi belum jelas: ganti aset atau minta izin; file dapat didownload bukan berarti boleh dipublikasikan.

## Latihan penerapan

Susun token warna dan manifest enam aset. Uji pasangan warna semua status, crop mobile dan ukuran transfer; catat alasan setiap aset diperlukan.

## Bukti penerimaan

- [ ] Semua status tetap dapat dibedakan tanpa warna saja.
- [ ] Aset mempunyai sumber dan hak penggunaan.
- [ ] Crop mempertahankan informasi penting.
- [ ] Material diuji terhadap keterbacaan dan biaya render.

## Hubungan dan dampak perubahan

[M05 — Art Direction & Identity](05-art-direction-identity.md), [M07 — Typography](07-typography.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S17, S02, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [07-svg-geometry](../../deep-dives/07-svg-geometry.md).
