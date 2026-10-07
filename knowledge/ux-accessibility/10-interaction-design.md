# M10 — Interaction Design

> Bidang C · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M09 — User Experience & Research](09-ux-research.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md)

## Kontrak interaksi

Sebuah kontrol memiliki tujuan, pemicu, keadaan, hasil, kegagalan dan cara kembali. Untuk setiap komponen, tentukan state awal, aksi yang sah, perubahan state dan feedback. “Terlihat seperti tombol” belum membuktikan bisa digunakan melalui keyboard atau menyampaikan hasil.

## Semantik dan affordance

Link berpindah lokasi; button melakukan aksi. Gunakan elemen native untuk memperoleh perilaku browser. Jangan menaruh tombol di dalam anchor atau mengubah seluruh kartu menjadi area klik dengan kontrol bertumpuk. Kartu dapat mempunyai link judul dan link demo terpisah dengan target yang jelas.

Hover memberi petunjuk tambahan, bukan akses satu-satunya. Focus harus terlihat; pressed memberi respons; selected menjelaskan pilihan yang menetap. Jangan menyamakan hover dengan selected. Disabled menyatakan aksi tidak tersedia dan perlu alasan bila konteksnya tidak jelas.

## Filter dan disclosure

Filter mengubah subset proyek. State harus mencatat pilihan dan hasil, kemudian UI dirender dari state itu. Tampilkan pesan ketika kosong dan reset. Umumkan perubahan singkat melalui status region bila sesuai, tanpa membaca seluruh daftar setiap klik. Tombol kategori dapat memakai `aria-pressed`; tab dipakai ketika benar-benar mengikuti pola tab, bukan sekadar gaya pill.

Disclosure cocok untuk konten tambahan dan dapat memakai `details/summary`. Bila memakai button custom, sinkronkan `aria-expanded`, `aria-controls` dan visibility. Konten yang disembunyikan tidak boleh masih menerima fokus. Animasi penutupan tidak boleh meninggalkan area interaktif tanpa terlihat.

## Menu dan dialog

Navigasi sederhana sering cukup berupa link yang wrap; hamburger menambah state dan pengujian. Bila ada menu mobile, tentukan escape, klik luar, resize, fokus dan kembali ke trigger. Jangan menerapkan role `menu` ke navigasi biasa tanpa perilaku keyboard yang sesuai.

Dialog modal memerlukan nama, fokus di dalam, mekanisme tutup, dan pengembalian fokus yang masuk akal. Elemen `dialog` native membantu behavior, tetapi isi dan fokus tetap harus diuji. Jika dukungan atau script gagal, link menuju halaman detail dapat menjadi alternatif. Jangan memakai dialog untuk case study sangat panjang hanya karena terlihat canggih.

## Feedback dan tindakan asynchronous

Feedback awal menandakan aksi diterima; hasil akhir menyatakan berhasil hanya setelah bukti. Untuk clipboard, `writeText` bisa gagal karena kemampuan/izin/konteks; alamat tetap tersedia agar pengguna tidak buntu. Untuk download, jangan menjanjikan file tersimpan. Dalam frontend tanpa backend, contact form tidak boleh mensimulasikan pengiriman nyata.

## Kendali dan motion

Motion menjelaskan perubahan hubungan: kartu menjadi detail, menu terbuka, filter berubah. Pengguna tetap dapat berinteraksi ketika animasi berjalan. Aksi cepat perlu interruption atau reversal, bukan antrean panjang. Klik kedua harus mempertahankan state akhir yang benar.

## Kegagalan yang perlu diuji

Klik ganda, Escape saat opening, fokus saat content hilang, filter nol hasil, resize ketika menu terbuka, clipboard ditolak, pointer coarse, dan script gagal. Setiap kasus punya hasil yang dapat diamati. Jika aksi tampak tidak terasa, cek perubahan status dan feedback sebelum menambah durasi atau efek.

## Latihan penerapan

Spesifikasikan satu filter dan satu dialog dalam tabel state → event → next state → feedback. Jalankan cepat berulang, keyboard dan penutupan di tengah animasi.

## Bukti penerimaan

- [ ] Semantik sesuai fungsi.
- [ ] State visual dan state aksesibel sinkron.
- [ ] Aksi gagal tidak menampilkan sukses.
- [ ] Fokus tetap logis setelah konten berubah.

## Hubungan dan dampak perubahan

[M09 — User Experience & Research](09-ux-research.md), [M12 — Accessibility & Inclusive Design](12-accessibility.md), [M14 — HTML Engineering](../frontend-engineering/14-html-engineering.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M22 — Interface Motion](../motion/22-interface-motion.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S08, S18, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [03-dialog-focus](../../deep-dives/03-dialog-focus.md).
