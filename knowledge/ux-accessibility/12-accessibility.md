# M12 — Accessibility & Inclusive Design

> Bidang C · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M09 — User Experience & Research](09-ux-research.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M15 — CSS Engineering](../frontend-engineering/15-css-engineering.md)

## Aksesibilitas sebagai fondasi

Mulai dari struktur dan kontrol native. Nama, peran, nilai dan urutan harus sesuai informasi. ARIA melengkapi semantik bila perlu; ia tidak otomatis menambah keyboard behavior. ARIA yang salah dapat membuat pengalaman lebih buruk daripada HTML sederhana.

## Sasaran dan batas konformansi

Sasaran engineering awal adalah WCAG 2.2 AA pada kriteria yang relevan. Penjelasan standar ringkas: kontras teks normal minimal 4.5:1, teks besar 3:1 dengan definisi dan pengecualian standar; target pointer AA 24×24 CSS px atau memenuhi pengecualiannya. 44×44 merupakan target enhanced AAA, bukan batas AA umum. Konformansi tidak dibuktikan oleh satu skor scanner.

Untuk penerapan praktis, tentukan target sentuh cukup lapang, label yang terlihat dan fokus yang jelas. Angka minimum standar bukan alasan membuat kontrol sulit dipakai. Audit seluruh halaman dan proses yang masuk lingkup sebelum menyatakan konformansi.

## Struktur dan nama

Gunakan `header`, `nav`, `main`, heading yang menjelaskan kelompok, dan skip link bila berguna. Satu heading utama membantu orientasi. `lang` menjelaskan bahasa. Link memiliki tujuan deskriptif; button ikon memerlukan accessible name yang cocok dengan fungsi. Nama aksesibel yang berbeda dari label visual dapat mengganggu input suara.

Alt gambar bergantung fungsi. Gambar dekoratif memakai alt kosong; screenshot informatif memerlukan penjelasan inti atau caption yang tepat. Diagram kompleks perlu padanan teks. Jangan memasukkan seluruh narasi ke alt ketika penjelasan panjang sudah tersedia di dekatnya.

## Keyboard dan fokus

Urutan fokus mengikuti DOM dan alur tugas. Hindari `tabindex` positif. Fokus tidak boleh terjebak, hilang saat elemen dihapus, atau tertutup sticky bar. Disclosure yang tertutup mengeluarkan isi dari urutan fokus. Dialog diuji untuk entry, traversal, Escape dan return focus. Uji juga fokus setelah filter menyembunyikan kartu.

## Ukuran, warna dan media

Teks tetap terbaca saat zoom dan penyesuaian spacing. Informasi tidak bergantung warna saja. Pesan error menjelaskan masalah melalui teks. Video informatif memerlukan padanan sesuai jenis media, termasuk caption bila ada audio percakapan. Audio dekoratif dimulai senyap dengan kendali jelas; layar biasa tidak menghasilkan aroma atau rasa.

## Motion dan kendali

`prefers-reduced-motion` menjadi sinyal untuk mengurangi gerak nonesensial. Pertahankan perubahan status dan akses isi; jangan sekadar mempercepat animasi menjadi kilatan. Animasi otomatis yang berkepanjangan dapat membutuhkan pause/stop/hide sesuai kriterianya. Hindari flash berbahaya dan gerakan yang memaksa pengguna mengikuti.

```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .card { animation: none; transition: none; transform: none; }
  html { scroll-behavior: auto; }
}
```

Aturan ini contoh lokal. Audit animasi JavaScript, video, SVG dan canvas juga; CSS saja tidak menonaktifkan semua motion.

## Verifikasi dan diagnosis

Gabungkan scanner dengan keyboard, pembaca layar, zoom, high contrast jika ditargetkan, reduced motion dan pemeriksaan isi. Scanner tidak menilai ketepatan alt atau seluruh alur fokus. Bila pembaca layar belum diuji, tulis NOT_RUN. Ketika ada masalah, telusuri semantik dan state sebelum menambah role atau event handler baru.

## Latihan penerapan

Audit satu perjalanan dari beranda ke proyek dan kontak dengan keyboard, lalu pembaca layar bila tersedia. Catat kriteria, bukti, hasil dan batas secara terpisah.

## Bukti penerimaan

- [ ] Nama, peran, urutan dan fokus sesuai fungsi.
- [ ] Semua informasi esensial tetap tersedia tanpa motion.
- [ ] Temuan manual terpisah dari scanner.
- [ ] Tidak ada klaim konformansi dari pengujian terbatas.

## Hubungan dan dampak perubahan

[M07 — Typography](../visual-design/07-typography.md), [M08 — Color, Surface & Assets](../visual-design/08-color-surface-assets.md), [M10 — Interaction Design](10-interaction-design.md), [M11 — Responsive & Adaptive Experience](11-responsive-adaptive.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M22 — Interface Motion](../motion/22-interface-motion.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S02, S07, S08, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
