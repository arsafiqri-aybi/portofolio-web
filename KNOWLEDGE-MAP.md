# Peta knowledge base

32 modul utama dalam 8 bidang. Prasyarat membantu urutan belajar; hubungan dampak mengarahkan review saat implementasi berubah. Referensi primer ada di [register](sources/REGISTER.md).

| ID | Modul | Prasyarat |
| --- | --- | --- |
| M01 | [Portfolio Strategy](knowledge/portfolio-content/01-portfolio-strategy.md) | — |
| M02 | [Content Architecture](knowledge/portfolio-content/02-content-architecture.md) | M01 |
| M03 | [Case Study & Evidence](knowledge/portfolio-content/03-case-study-evidence.md) | M01, M02 |
| M04 | [Writing & Storytelling](knowledge/portfolio-content/04-writing-storytelling.md) | M01, M02, M03 |
| M05 | [Art Direction & Identity](knowledge/visual-design/05-art-direction-identity.md) | M01, M02 |
| M06 | [Composition & Layout](knowledge/visual-design/06-composition-layout.md) | M02, M05 |
| M07 | [Typography](knowledge/visual-design/07-typography.md) | M05, M06 |
| M08 | [Color, Surface & Assets](knowledge/visual-design/08-color-surface-assets.md) | M05, M06, M07 |
| M09 | [User Experience & Research](knowledge/ux-accessibility/09-ux-research.md) | M01, M02 |
| M10 | [Interaction Design](knowledge/ux-accessibility/10-interaction-design.md) | M09, M14, M16 |
| M11 | [Responsive & Adaptive Experience](knowledge/ux-accessibility/11-responsive-adaptive.md) | M06, M15 |
| M12 | [Accessibility & Inclusive Design](knowledge/ux-accessibility/12-accessibility.md) | M09, M14, M15 |
| M13 | [Web & Browser Foundations](knowledge/frontend-engineering/13-web-browser-foundations.md) | — |
| M14 | [HTML Engineering](knowledge/frontend-engineering/14-html-engineering.md) | M13 |
| M15 | [CSS Engineering](knowledge/frontend-engineering/15-css-engineering.md) | M13, M14 |
| M16 | [JavaScript & Type Systems](knowledge/frontend-engineering/16-javascript-types.md) | M13, M14 |
| M17 | [Frontend Architecture](knowledge/architecture-tooling/17-frontend-architecture.md) | M02, M13, M14, M15, M16 |
| M18 | [Design System & Components](knowledge/architecture-tooling/18-design-system-components.md) | M05, M06, M07, M08, M10, M12, M15 |
| M19 | [Development & Build Tooling](knowledge/architecture-tooling/19-development-tooling.md) | M13, M17 |
| M20 | [AI-Assisted Engineering](knowledge/architecture-tooling/20-ai-assisted-engineering.md) | M01, M17, M19 |
| M21 | [Motion Foundations](knowledge/motion/21-motion-foundations.md) | M05, M06, M10 |
| M22 | [Interface Motion](knowledge/motion/22-interface-motion.md) | M10, M12, M16, M21 |
| M23 | [Scroll & Visual Storytelling](knowledge/motion/23-scroll-storytelling.md) | M02, M11, M12, M21, M22 |
| M24 | [Animation & Graphics Engineering](knowledge/motion/24-animation-graphics.md) | M13, M15, M16, M21 |
| M25 | [Loading & Asset Performance](knowledge/performance-reliability/25-loading-assets.md) | M13, M14, M19 |
| M26 | [Runtime & Motion Performance](knowledge/performance-reliability/26-runtime-performance.md) | M13, M16, M24 |
| M27 | [Reliability & Compatibility](knowledge/performance-reliability/27-reliability-compatibility.md) | M11, M12, M13, M17 |
| M28 | [Static-Site Security & Privacy](knowledge/performance-reliability/28-security-privacy.md) | M13, M14, M16, M19 |
| M29 | [Testing & Design QA](knowledge/verification-production/29-testing-design-qa.md) | M10, M11, M12, M17, M27, M28 |
| M30 | [Performance Measurement](knowledge/verification-production/30-performance-measurement.md) | M25, M26, M29 |
| M31 | [GitHub Production & Discoverability](knowledge/verification-production/31-github-production-seo.md) | M02, M14, M19, M28, M29 |
| M32 | [Maintenance & Feedback](knowledge/verification-production/32-maintenance-feedback.md) | M29, M30, M31 |

## Hubungan utama

Konten → struktur → visual → komponen → motion → pengukuran → produksi. Accessibility, security dan performance diterapkan sejak awal, bukan hanya audit akhir.

Graph JSON menyimpan relasi prerequisite dan review-impact. Review-impact dapat dua arah; prerequisite harus acyclic. Topic catalog dibuat dari bagian yang benar-benar ditulis, bukan angka pengetahuan rekaan.

[Urutan belajar](LEARNING-PATH.md) · [Cakupan dan kedalaman](COVERAGE.md)
