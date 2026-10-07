# Checks dan batas

`python3 tools/validate_kb.py` memeriksa katalog, IDs, prasyarat acyclic, graph, topic sections, sumber, JSON, tautan Markdown lokal, HTML ids/links/resources dan kelengkapan bagian modul. Tidak mengaudit seluruh URL external atau kebenaran setiap kalimat.

`node checks/logic.test.mjs` menguji invariant filter/count/progress dengan input normal dan edge cases. Ini logic tests, bukan browser rendering.

`node checks/dom-simulation.test.cjs` menjalankan source app aktual dalam DOM/lifecycle mock kecil untuk filter, clipboard dan stop/resume. Tidak menguji native focus trap, layout, render, event loop browser atau teknologi bantu.

`node checks/browser.test.cjs` memerlukan Playwright dan binary Chromium yang cocok. Ia menyediakan server lokal sendiri, menguji subpath, filter, empty, dialog/focus, clipboard denial, canvas, runtime preference, JS-off dan viewport. Screenshot tersimpan di qa-output untuk review manual. PASS otomasi tidak berarti screenshot sudah dilihat.

Jika Playwright belum tersedia, pasang di environment pengujian yang dipilih dan ikuti dokumentasi resminya untuk browser binaries. Tidak ada dependency produksi atau layanan berbayar pada contoh. Browser checks opsional bagi pembaca, tetapi klaim compatibility/render memerlukan pelaksanaan.

Konformansi penuh accessibility, manusia, perangkat nyata dan field performance tidak dibuktikan oleh checks ini. Status aktual ada pada quality/VERIFICATION.md.
