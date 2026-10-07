# Pendalaman 04 — Interruption, continuity dan choreography

## State benar lebih penting daripada keyframe selesai

UI dapat berubah ketika animasi belum selesai. Pengguna menekan toggle cepat, kembali route, resize atau mengubah reduced motion. Implementation yang hanya menyimpan state pada `finished` dapat terjebak. Simpan logical state saat aksi sah diterima, kemudian render transition yang dapat dibatalkan.

## Strategi interruption

**Cancel and settle:** batalkan dan langsung tampilkan state baru; cocok reduced motion/error. **Reverse:** balik timeline yang sama bila start/end masih sesuai. **Retarget:** baca posisi terkini dan animasikan menuju tujuan baru; cocok scene yang geometry berubah. **Ignore input:** jarang tepat untuk dekorasi dan dapat menghambat tugas; jika diperlukan untuk operation, alasannya harus nyata.

Retarget dapat membutuhkan computed style atau animation state. Baca sebelum cancel bila cancel mengembalikan style dasar; pilih ownership property agar animation tidak bertabrakan CSS responsive. `commitStyles` mempunyai behavior dan compatibility yang perlu dicek saat dipakai, bukan solusi universal.

## Finished promise

Cancellation dapat menolak promise `finished`. Handle resolve dan reject, dan pastikan callback lama tidak menimpa animation baru. Gunakan generation token/reference equality untuk menerima hanya completion yang masih relevan.

```js
let current;
function animateFeedback(element, frames, options) {
  current?.cancel();
  const animation = element.animate(frames, options);
  current = animation;
  animation.finished.then(
    () => { if (current === animation) current = undefined; },
    () => { if (current === animation) current = undefined; }
  );
}
```

Ini feedback lokal; state aplikasi tetap dikelola di luar snippet.

## Choreography

Urutan harus membantu hubungan: container merespons, content menyusul secukupnya. Delay antaritem yang panjang memperbesar total tunggu. Cap jumlah item yang distagger atau animasikan kelompok. Navigasi/teks utama tersedia segera. Motion berbeda untuk enter, exit dan direct interaction jika fungsi memerlukan.

## Geometry continuity

Saat kartu menjadi detail, perhatikan posisi, ukuran, aspect/crop, radius dan typography. Interpolasi screenshot tanpa mempertahankan rasio dapat mendistorsi bukti. Jika effect rumit membuat layout/focus rapuh, transisi sederhana tetap dapat matang.

## Preference dan lifecycle

Reduced motion harus membatalkan semua motion nonesensial aktif serta menjaga state akhir. Tab hidden menghentikan loop; resume dengan waktu baru. Dispose membatalkan animations dan observers. Frame yang terakhir terlihat bukan data state; responsive layout tetap menjadi acuan.

## Verification

Uji tiga klik cepat, resize di tengah transition, cancellation sebelum selesai, preference runtime dan Back/navigation. Periksa state, focus, styles tersisa dan pekerjaan aktif. Profiling dilakukan setelah behavior benar.

Sumber: S06/S07. [M22](../knowledge/motion/22-interface-motion.md), [M26](../knowledge/performance-reliability/26-runtime-performance.md).
