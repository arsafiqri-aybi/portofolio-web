# Playbook 07 — Menugaskan AI dengan bukti

## Task packet

Tujuan; fakta/konteks; source files; batas; behavior; failure; output; acceptance. Contoh: implement filter pada cards existing tanpa mengubah fakta, tanpa backend, daftar tetap ada tanpa JS, count dan keyboard diuji.

## Retrieval

Baca map dan modul relevan. Jangan memuat seluruh repo setiap tugas. Pertahankan brief dan constraints. Untuk API/host yang berubah, buka official docs section yang sesuai.

## Execution

Read actual state → perubahan dapat direview → checks relevan → render bila visual berubah → fix penyebab → report. Jangan rebuild pekerjaan valid. Jangan klaim fungsi dari code inspection saja.

## Review

Periksa diff, dependencies, state invariants, failures, a11y, cleanup, payload, safe DOM dan content accuracy. Tests yang dihapus agar lulus menjadi finding. Perubahan requirement harus dinyatakan, bukan disamarkan sebagai optimasi.

## Handoff

Current commit; file changed; decisions; checks run dengan hasil; NOT_RUN; blockers; next action. Model/persona/skill tidak menambah kemampuan alat atau otomatis memberi izin publikasi.
