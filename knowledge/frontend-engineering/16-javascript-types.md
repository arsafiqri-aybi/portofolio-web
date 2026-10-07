# M16 — JavaScript & Type Systems

> Bidang D · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M13 — Web & Browser Foundations](13-web-browser-foundations.md), [M14 — HTML Engineering](14-html-engineering.md)

## Logika dan data

Pahami nilai, tipe, operator, fungsi, array, object, scope dan module. Bedakan mutation dan derivation: daftar hasil filter sebaiknya diturunkan dari data dan kategori aktif, bukan disimpan dalam beberapa variabel yang mudah tidak sinkron. Gunakan id stabil, bukan index yang berubah setelah sort.

## State dan invariants

Tuliskan invariant: kategori aktif sah; jumlah hasil cocok dengan kartu yang terlihat; dialog tidak bisa berada pada state terbuka dan tersembunyi sekaligus. State machine membantu fitur dengan beberapa tahap. Fitur sederhana tidak memerlukan library global.

```js
export function selectProjects(projects, category) {
  return category === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(category));
}
```

Kontrak mengharapkan categories array. Jika data berasal sumber tidak terpercaya, validasi sebelum fungsi dipanggil. Type annotation tidak memvalidasi JSON saat runtime.

## Events dan DOM

Pahami bubbling, capture, default action dan delegation. `preventDefault` hanya digunakan bila ingin mengganti behavior secara sengaja. `stopPropagation` dapat mengganggu komponen lain. Baca target/closest dengan batas container agar listener delegasi tidak menangkap elemen di luar fitur.

Render teks dengan `textContent`; untuk elemen, gunakan API DOM dan atribut terkontrol. Jangan memasukkan input pengguna atau query URL ke `innerHTML`. Pemilihan selector yang gagal perlu fallback atau diagnosis yang jelas. Jangan menelan semua error lalu mengklaim fungsi berhasil.

## Async dan failure

Promise menyatakan hasil asynchronous; `await` memerlukan handling kegagalan. Gunakan timeout/cancellation ketika sesuai. Cancellation callback dan fetch perlu cleanup. Hasil request lama bisa menimpa state baru; gunakan request id atau abort untuk memastikan hanya hasil yang relevan diterapkan.

Clipboard, storage dan media dapat gagal. Simpan fallback yang tetap bisa digunakan. Cek `response.ok` sebelum memproses fetch sebagai sukses; response HTTP error tidak otomatis menolak Promise fetch.

## Types dan validasi

JSDoc dapat mendokumentasikan kontrak pada JS; TypeScript dapat memeriksa banyak kesalahan pada build. Gunakan discriminated union untuk state yang memiliki payload berbeda, misalnya loading, ready dan error. Hindari `any` yang menghilangkan manfaat pengecekan. Tetap perlukan runtime validation untuk data external.

## Lifecycle dan performance

Komponen memiliki setup serta dispose. AbortController dapat membantu melepas listener yang memakai signal. Observer disconnected, animation cancelled dan rAF berhenti ketika tidak diperlukan. Event handler sebaiknya singkat. Operasi berat dapat dibagi, ditunda, atau dipindah Worker jika biaya komunikasi sebanding.

Debounce cocok untuk menunggu input reda; throttle membatasi frekuensi. rAF dapat menggabungkan update visual per frame, tetapi tidak mengurangi biaya jika callback tetap terlalu berat. Pilih berdasarkan semantik interaksi, bukan satu fungsi universal.

## Debugging dan pengujian

Pisahkan fungsi murni dari efek DOM agar logika dapat diuji. Uji kategori kosong, kategori banyak, data invalid, penolakan clipboard, aksi cepat dan unmount. Console menunjukkan gejala; gunakan breakpoint dan input minimal untuk menemukan penyebab. Jangan menambahkan try/catch besar untuk menutupi invariant yang rusak.

## Latihan penerapan

Implementasikan filter dengan fungsi murni dan adapter DOM. Uji subset, kategori nol hasil, urutan asli, serta perubahan cepat tanpa merusak state.

## Bukti penerimaan

- [ ] State dan invariant tertulis.
- [ ] Input external divalidasi sesuai risiko.
- [ ] Kegagalan async mempunyai fallback.
- [ ] Listener dan observer dapat dibersihkan.

## Hubungan dan dampak perubahan

[M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M13 — Web & Browser Foundations](13-web-browser-foundations.md), [M17 — Frontend Architecture](../architecture-tooling/17-frontend-architecture.md), [M20 — AI-Assisted Engineering](../architecture-tooling/20-ai-assisted-engineering.md), [M24 — Animation & Graphics Engineering](../motion/24-animation-graphics.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M28 — Static-Site Security & Privacy](../performance-reliability/28-security-privacy.md), [M29 — Testing & Design QA](../verification-production/29-testing-design-qa.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S24, S25, S26 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [02-state-async-lifecycle](../../deep-dives/02-state-async-lifecycle.md).
