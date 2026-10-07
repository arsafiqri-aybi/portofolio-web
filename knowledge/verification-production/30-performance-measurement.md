# M30 — Performance Measurement

> Bidang H · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M29 — Testing & Design QA](29-testing-design-qa.md)

## Pertanyaan pengukuran

Tentukan apa yang ingin dijawab: apakah konten muncul cepat, input ditanggapi cepat, layout stabil, atau motion lancar? Metrik berbeda menjawab bagian berbeda. Score agregat berguna sebagai sinyal, tetapi trace dan perilaku diperlukan untuk diagnosis.

## Core Web Vitals

Ringkasan resmi yang diperiksa: target good LCP ≤2.5 detik, INP ≤200ms, CLS ≤0.1; evaluasi lapangan menggunakan persentil ke-75 dengan pemisahan mobile/desktop. Ketiga metrik harus memenuhi target untuk penilaian yang sesuai. Ini target resmi saat pemeriksaan sumber, bukan hasil website kita.

Lighthouse tidak menghasilkan data INP lapangan hanya melalui audit loading. TBT lab bukan INP. Portofolio traffic kecil mungkin belum mempunyai data CrUX yang memadai; laporkan unavailable, bukan nilai nol atau PASS. Pengujian interaksi lokal membantu diagnosis tanpa menggantikan distribusi pengguna nyata.

## Protokol lab

Catat commit, URL, halaman, device, browser/versi, viewport/DPR, jaringan, CPU throttling, cache, tools dan aksi. Ulangi beberapa kali; simpan semua raw runs, median dan variasi. Tiga atau lima run merupakan pilihan awal praktis, bukan jaminan statistik. Gunakan kondisi sama untuk baseline dan candidate.

Cold dan warm berbeda. Tool throttling simulasi tidak sama dengan jaringan/perangkat nyata. Jangan membandingkan skor laptop kuat dengan ponsel lambat lalu menganggap perubahan kode penyebab selisih. Background task, battery saving dan thermal state dapat memengaruhi hasil nyata.

## Trace dan attribution

Cari elemen LCP, request chain, delay render, long tasks, style/layout dan shift source. Untuk motion, lihat kerja per frame dan layer yang relevan. Duration animasi tidak otomatis menjadi input latency. Input bisa segera mengubah state sementara animasi lanjut; uji respons dan hasil terpisah.

Untuk CLS, media dimensi, font dan content insertion sering relevan. Tidak semua layout shift masuk metrik sesuai definisi; jangan menyatakan satu perubahan otomatis meningkatkan score tanpa ukur.

## Budget dan experiment

Budget proyek mengatur bytes, asset count, execution dan frame spike di kondisi tertentu. Tetapkan sebelum membandingkan candidate agar target tidak dipindah setelah melihat hasil. Bila target tidak layak, revisi desain/architecture dengan alasan dan lindungi tugas utama.

Formula perbaikan relatif untuk waktu/byte: `(baseline-candidate)/baseline × 100%`, dengan baseline bukan nol. Nilai mutlak dan variasi tetap disajikan. Peningkatan persen besar pada fungsi kecil belum tentu berarti halaman terasa lebih cepat.

## Field dan monitoring

Data pengguna nyata dapat memperlihatkan perangkat/jaringan yang tak tercakup lab. Jika tracking dipakai, minimisasi data, dasar penggunaan dan sample limitations harus dirancang. Tanpa field data, tetap bisa membuat hasil baik melalui testing yang disiplin, tetapi tidak mengklaim seluruh pengunjung memenuhi ambang.

## Diagnosis dan pelaporan

Score naik tetapi interaksi berat: periksa runtime yang tidak diukur audit awal. Satu run buruk: cek trace dan kondisi, jangan langsung buang. Semua run variable: stabilkan environment atau laporkan batas. Laporan memisahkan official thresholds, project targets, measurements dan interpretation.

## Latihan penerapan

Buat baseline dan candidate dari satu optimasi. Simpan raw runs dan kondisi yang sama, lalu jelaskan nilai median, variasi dan batas pengukuran.

## Bukti penerimaan

- [ ] Lab dan field dipisahkan.
- [ ] INP tidak diganti TBT tanpa penjelasan.
- [ ] Raw data dan kondisi tersedia.
- [ ] Target resmi terpisah dari target proyek serta hasil ukur.

## Hubungan dan dampak perubahan

[M25 — Loading & Asset Performance](../performance-reliability/25-loading-assets.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md), [M29 — Testing & Design QA](29-testing-design-qa.md), [M31 — GitHub Production & Discoverability](31-github-production-seo.md), [M32 — Maintenance & Feedback](32-maintenance-feedback.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S03, S39, S34 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)

Pendalaman terkait: [06-profiling-protocol](../../deep-dives/06-profiling-protocol.md).
