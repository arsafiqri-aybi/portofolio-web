# Playbook 05 — Audit aksesibilitas

1. Tetapkan pages/process scope dan browser/teknologi bantu yang tersedia.
2. Review heading/landmark/lang, controls, nama/peran/value dan alt sesuai fungsi.
3. Jalankan keyboard: skip link, seluruh controls, dialog/disclosure, Back, focus setelah filter.
4. Periksa zoom, reflow, text spacing, kontras final, focus visibility dan sticky obstruction.
5. Reduced motion sejak awal dan runtime; audit semua media/Canvas/SVG/JS, bukan CSS saja.
6. Jalankan scanner sebagai tambahan. Review finding false positive/negative dengan bukti.
7. Gunakan pembaca layar bila tersedia. Catat engine, reading order, label dan status announcement.
8. Rekam kriteria, expected, observed, impact, fix dan retest.

## Batas

Standar kriteria berada di M12/S02. Checklist ringkas tidak membuktikan konformansi penuh. APG patterns informatif dan harus dipadukan behavior nyata. Review AI bukan pengalaman orang dengan disability. Human testing memerlukan peserta nyata, bukan persona simulasi.

## Prioritas

Keyboard trap, informasi hilang, controls tanpa nama, focus tak terlihat dan status yang menyesatkan mendahului dekorasi. Fix semantik lebih baik daripada menambah ARIA yang bertentangan.
