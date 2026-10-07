# Playbook 04 — Diagnosis performa

## Pohon keputusan

| Gejala | Periksa pertama | Kandidat perubahan |
| --- | --- | --- |
| Konten awal lambat | Dokumen, CSS, resource LCP, font, discovery | Ukuran/prioritas, HTML awal, media pipeline |
| Input lambat | Handler dan main-thread trace | Kurangi DOM work, derive state, bagi pekerjaan |
| Scroll/animasi patah | Layout/paint/layer/rAF loop | Batch reads/writes, kurangi effects, stop offscreen |
| Layout bergeser | Dimensi media/font/content insertion | Sediakan rasio, fallback metrics, ruang status |
| Makin berat setelah lama | Listener, timer, node/texture retention | Cleanup dan ownership lifecycle |
| Hanya mobile berat | DPR, GPU, network, viewport | Adaptive resolution/scene density dan assets |

## Protokol

Tetapkan pertanyaan dan baseline → catat kondisi/raw runs → identifikasi hotspot → perubahan koheren → rerun kondisi sama → regression visual/fungsi → report nilai dan batas.

Jangan mengubah framework sebelum mengetahui bottleneck. Jangan memakai score tercepat sebagai hasil representatif. Jangan menyimpulkan field performance dari lab lokal.

## Artefak

Resource inventory, trace, raw runs, report, ADR jika architecture berubah. Jika tool/device tidak tersedia, tandai NOT_RUN dan lanjutkan pemeriksaan yang tersedia.
