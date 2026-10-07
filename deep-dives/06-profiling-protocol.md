# Pendalaman 06 — Profiling sebagai eksperimen

## Hipotesis yang dapat ditolak

Contoh: “Scroll jank disebabkan backdrop blur full-screen.” Prediction: tanpa blur, trace paint/compositing membaik dalam kondisi sama, sementara isi dan logic unchanged. Jika tidak, periksa sumber lain. Jangan menyimpulkan dari perasaan atau screenshot.

## Controls

Catat commit, halaman, browser, device, viewport/DPR, jaringan, CPU, cache, power/thermal state jika nyata, dan langkah input. Baseline/candidate memakai setup sama. Jika kondisi berbeda, tulis confounder dan jangan memberi persen kausal.

## Trace reading

Pisahkan network delay, parse/compile, task execution, style/layout, paint dan compositing. Input event handler singkat dapat tetap diikuti DOM/layout besar. Canvas dengan JS ringan dapat membutuhkan bitmap area besar. Frame spike dan rata-rata menjawab pertanyaan berbeda.

Tandai interval tugas yang diprofile. Profiling seluruh sesi tanpa tahu aksi dapat membuat attribution kabur. Gunakan satu alur berat representative lalu beberapa failure/rapid input. Tool overhead juga dapat mengubah behavior; interpretasi tetap kontekstual.

## Memory

Perhatikan tren retained objects setelah beberapa siklus sebanding. Heap naik sementara dapat normal sebelum GC. Node detached, listeners global, promises, texture dan cache perlu ownership. Snapshot memiliki keterbatasan; gunakan reproduksi minimal dan jangan menghapus cache yang memang dibutuhkan tanpa trade-off.

Bitmap cost kasar: width × height × DPR² × bytes-per-pixel, belum termasuk buffers/layers/overhead. Formula memperlihatkan mengapa DPR tinggi meningkatkan biaya kuadrat; bukan estimasi seluruh GPU memory. Cap DPR diuji berdasarkan visual dan device.

## Compare

Simpan raw runs dan median/variasi. Candidate tidak hanya diuji performa: periksa appearance, semantic state, keyboard dan fallback. Optimasi yang menghilangkan informasi atau merusak crop tidak diterima hanya karena cepat.

## Reporting

Judul report menyebut halaman dan kondisi. Tabel baseline/candidate berisi nilai mutlak, delta dan batas. Jika field data unavailable, tulis itu. Jika mobile belum diuji, desktop result tidak diperluas. Jangan menulis hasil LCP/INP/CLS yang tidak diukur.

## Stop rule

Berhenti ketika budget yang disepakati tercapai, gate fungsi lulus dan bottleneck tersisa tidak material terhadap tujuan. Jika target gagal, ubah desain/scene/architecture berdasarkan bukti. Memaksimalkan quality tidak memerlukan micro-optimization tanpa manfaat.

Sumber: S03/S34/S39; [M30](../knowledge/verification-production/30-performance-measurement.md), [budget](../quality/PERFORMANCE-BUDGET.md).
