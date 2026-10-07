# M22 — Interface Motion

> Bidang F · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M21 — Motion Foundations](21-motion-foundations.md)

## Microinteraction anatomy

Satu microinteraction memiliki trigger, aturan, feedback dan lifecycle. Tombol filter mengubah pilihan dan daftar; dialog mengubah mode perhatian; reveal memperkenalkan isi. Tulis state dan behavior sebelum memilih library animasi.

## State versus animation

State menentukan apa yang benar: panel terbuka atau tertutup. Animation menentukan bagaimana perubahan terlihat. Jika animasi batal, state masih harus jelas. Jangan menggunakan event animationend sebagai satu-satunya jalan menyimpan hasil; event dapat tidak terjadi ketika motion dimatikan, elemen dilepas atau animasi diganti.

Untuk toggle cepat, batalkan transisi lama atau balik arah dari keadaan saat ini. Hindari queue yang membuat panel mengeksekusi klik lama beberapa detik setelah input. Tombol tetap mengungkap state melalui label/atribut yang sesuai.

## CSS, WAAPI atau engine

CSS transition cocok untuk hubungan dua state sederhana. CSS keyframes untuk urutan yang terdefinisi. WAAPI menyediakan kendali play, pause, reverse, cancel dan Promise selesai. Engine tambahan berguna untuk sequencing, spring atau koordinasi rumit; pertimbangkan bundle, license, cleanup dan fallback.

```js
let active;
function emphasize(element, reduceMotion) {
  active?.cancel();
  if (reduceMotion || !element.animate) return;
  active = element.animate(
    [{ transform: 'translateY(2px)' }, { transform: 'translateY(0)' }],
    { duration: 160, easing: 'ease-out' }
  );
}
```

Contoh hanya feedback dekoratif; state selected harus diperbarui terpisah. `cancel` dapat menolak finished promise jika ada consumer, sehingga handling cancellation perlu diperhatikan.

## Reveal yang tangguh

Fondasi HTML harus terlihat tanpa JS. Script tidak boleh menyembunyikan seluruh halaman sebelum memastikan initialization berhasil. Pola aman untuk reveal kecil: biarkan isi terlihat, lalu animasikan transform ketika elemen pertama kali masuk view, tanpa opacity nol yang berkepanjangan. Observer dapat gagal atau tidak tersedia; fallback adalah isi statis.

IntersectionObserver membantu mendeteksi keterlihatan, bukan memberikan progress scroll presisi setiap frame. Unobserve reveal sekali jalan dan disconnect saat komponen dibuang. Reduced-motion yang berubah saat runtime harus menghentikan motion dekoratif yang aktif.

## Dialog dan disclosure

Transisi dialog tetap mempertahankan mekanisme Escape, fokus dan close control. Animasi closing tidak boleh menunda pengembalian kendali terlalu lama. Untuk pengukuran height disclosure, baca ukuran bersama sebelum menulis. Intrinsic height yang berubah karena font/gambar perlu ditangani; fixed pixel height mudah memotong isi.

Shared-element effect memerlukan padanan geometry, crop dan layer. Pastikan route/detail tetap dapat dibuka langsung. Ketika API yang dipakai tidak didukung, navigation standar tetap bekerja. Jangan memaksa seluruh transisi halaman untuk setiap klik anchor.

## Feedback yang dapat dipercaya

Pressed memberi respons saat aksi dimulai. Success hanya setelah hasil. Loading mempunyai alasan nyata, bukan delay sengaja agar terlihat premium. Motion tidak boleh menjadi satu-satunya indikator perubahan; state teks/visual dan accessible state tetap ada.

## Diagnosis dan edge cases

Klik cepat meninggalkan style: cek fill behavior, cancellation dan state source. Elemen melompat saat resize: target geometry dihitung hanya sekali atau transform akhir bertabrakan layout. Fokus hilang: elemen aktif dihapus tanpa strategi return focus. Reveal tidak muncul: konten disembunyikan sebelum JS berhasil. Uji seluruh kasus tersebut selain satu lintasan normal.

## Latihan penerapan

Implementasikan reveal dan toggle. Coba reduced-motion sejak awal serta diubah saat berjalan, JS mati, klik cepat, resize dan penutupan melalui keyboard.

## Bukti penerimaan

- [ ] Konten tetap tersedia bila init gagal.
- [ ] Animasi dapat dibatalkan tanpa state salah.
- [ ] Input tidak dikunci demi dekorasi.
- [ ] Observer/listener/animation mempunyai cleanup.

## Hubungan dan dampak perubahan

[M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M16 — JavaScript & Type Systems](../frontend-engineering/16-javascript-types.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M21 — Motion Foundations](21-motion-foundations.md), [M24 — Animation & Graphics Engineering](24-animation-graphics.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S06, S07, S08, S18 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [04-motion-interruption](../../deep-dives/04-motion-interruption.md).
