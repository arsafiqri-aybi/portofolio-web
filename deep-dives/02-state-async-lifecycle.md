# Pendalaman 02 — State, asynchronous race dan lifecycle

## Satu sumber kebenaran

Data proyek, kategori aktif dan status loading mempunyai peran berbeda. Hasil filter diturunkan dari data dan pilihan. Jika jumlah hasil disimpan terpisah, ia harus disinkronkan; biasanya lebih aman menghitung dari hasil. Invariant mencegah UI selected tetapi daftar kategori lain.

## State machine

Definisikan state yang sah: idle/loading/ready/error. Error dan ready mempunyai payload berbeda. Jangan memakai beberapa boolean yang memungkinkan kombinasi tidak masuk akal seperti loading=true dan success=true tanpa alasan. Type union membantu build, tetapi external data tetap perlu validasi runtime.

## Race hasil lama

Request A dimulai, lalu B. Jika A selesai terakhir, UI dapat kembali ke hasil lama. Abort mengurangi pekerjaan, tetapi response yang sudah selesai atau kode downstream tetap membutuhkan relevansi check. Pattern berikut contoh untuk data public opsional, bukan backend baru dalam portfolio:

```js
let generation = 0;
let activeController;
async function loadPublicData(url, render, reportError) {
  const current = ++generation;
  activeController?.abort();
  activeController = new AbortController();
  try {
    const response = await fetch(url, { signal:activeController.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (current !== generation) return;
    render(data); // validasi kontrak data terlebih dahulu di implementasi nyata
  } catch (error) {
    if (current !== generation || error.name === 'AbortError') return;
    reportError(error);
  }
}
function dispose() { generation++;activeController?.abort(); }
```

Snippet membutuhkan adapter validasi/render sesuai proyek. Tidak digunakan oleh labs yang semuanya lokal.

## Debounce dan throttle

Debounce menunggu periode tanpa input; cocok untuk pekerjaan yang sebaiknya dilakukan setelah ketikan reda. Throttle membatasi frekuensi; cocok untuk observasi tertentu. rAF menggabungkan visual update per kesempatan frame. Ketiganya tidak menghilangkan biaya pekerjaan, dan dapat mengubah timing UX. Filter tiga proyek tidak memerlukan delay tambahan.

## Ownership cleanup

Komponen memiliki listener, observer, timer, animation dan request yang ia buat. Setup mengembalikan dispose, atau memakai AbortController untuk listeners. Dispose idempotent lebih mudah dipanggil tanpa risiko ganda. Async completion setelah dispose tidak boleh menulis DOM/state lama.

Untuk bfcache, `pagehide.persisted` menunjukkan kemungkinan halaman disimpan; jangan memutus semua behavior lalu tidak memulihkannya. Visibility dan resume perlu dipikirkan. Listener pagehide dengan `once:true` dapat terpakai pada kunjungan bfcache lalu tidak tersedia saat unload berikutnya; labs memakai signal lifecycle.

## Uji failure

Request lambat A/cepat B, abort, HTTP error, JSON invalid, rendering setelah dispose, preference berubah dan component mounted twice. Assert state observable dan jumlah pekerjaan aktif, bukan implementation details tanpa dampak.

Sumber: S24–S26, S35. [M16](../knowledge/frontend-engineering/16-javascript-types.md), [M27](../knowledge/performance-reliability/27-reliability-compatibility.md).
