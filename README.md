# portofolio-web

Knowledge base Bahasa Indonesia untuk membangun portofolio frontend dengan coding, desain dan motion yang matang, performa yang terukur, aksesibilitas, serta produksi melalui GitHub Pages.

**Batas proyek:** frontend; `github.io`; biaya layanan tambahan Rp0; backend ditunda. Repository ini berisi pengetahuan dan laboratorium contoh. Identitas/contoh proyek pada laboratorium bersifat fiktif, bukan portofolio final pemilik.

## Mulai di sini

1. [Peta 32 modul](KNOWLEDGE-MAP.md) dan [jalur belajar](LEARNING-PATH.md).
2. [Cakupan/kedalaman](COVERAGE.md), [register sumber](sources/REGISTER.md) dan [standar mutu](quality/ACCEPTANCE.md).
3. [Pendalaman teknis](deep-dives/README.md), [playbook pembangunan](playbooks/01-build-portfolio.md), [laboratorium](examples/README.md) dan [template](templates/README.md).
4. [Status verifikasi](quality/VERIFICATION.md) untuk membedakan materi yang tersedia dari checks yang benar-benar dijalankan.

## Delapan bidang

| Bidang | Isi |
| --- | --- |
| A | Strategi, konten, case study, writing |
| B | Arah visual, komposisi, typography, warna/aset |
| C | UX, interaction, responsive, accessibility |
| D | Browser, HTML, CSS, JavaScript/types |
| E | Architecture, components, tooling, AI engineering |
| F | Motion foundations, interface, scroll, graphics |
| G | Loading, runtime, reliability, security/privacy |
| H | Testing, measurement, GitHub production, maintenance |

## Menjalankan contoh dan checks

Python 3 dan Node.js diperlukan untuk checks yang relevan. Playwright/browser hanya diperlukan untuk browser QA, tidak untuk membuka contoh.

```bash
python3 tools/validate_kb.py
node checks/logic.test.mjs
node checks/dom-simulation.test.cjs
python3 -m http.server 8000 --directory examples
```

Buka `http://localhost:8000/`. Tidak perlu npm install atau layanan berbayar untuk contoh. Jika Playwright tersedia:

```bash
node checks/browser.test.cjs
```

Checks memverifikasi hal tertentu dalam lingkupnya; tidak menggantikan pembaca layar, user research atau pengukuran lapangan. Lihat dokumentasi checks untuk prerequisites dan hasil.

## Menggunakan dengan AI

Baca [AGENTS.md](AGENTS.md). Muat modul terkait masalah, pertahankan brief/batas/fakta, lalu kerjakan implementation dan bukti. Jangan memperlakukan reading list sebagai sumber yang telah diaudit, atau mengklaim test berjalan tanpa log.

## Pemeliharaan

[Kontribusi](CONTRIBUTING.md) · [Changelog](CHANGELOG.md) · [Catatan keputusan](decisions/0001-scope.md). Belum ada penerbitan website atau automation terjadwal dalam release pengetahuan ini.
