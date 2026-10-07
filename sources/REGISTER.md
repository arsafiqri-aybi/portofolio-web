# Register sumber

Tanggal pekerjaan: 8 Oktober 2026. Materi ditulis sebagai sintesis pengetahuan dan panduan operasional; contoh kode ditulis sendiri. Tidak ada salinan penuh dokumentasi atau penelitian pihak ketiga.

**verified-excerpt:** klaim tertentu diperiksa pada bagian yang relevan. **opened:** halaman dibuka, bukan audit penuh. **reading-list:** rujukan untuk pendalaman, belum dibaca ulang. **inherited-reference:** ditemukan pada panduan pribadi, belum diverifikasi ulang. **read:** panduan pribadi dibaca.

API, compatibility, kebijakan host, harga, keamanan dan standar diperiksa lagi ketika menentukan implementasi. Tanggal pemeriksaan bukan janji pembaruan otomatis.

| ID | Sumber | Jenis/status | Cakupan dan batas |
| --- | --- | --- | --- |
| S01 | [MDN — Structuring content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) | official-guide; opened | Indeks HTML dan semantik; bagian tertentu diperiksa, bukan seluruh kurikulum. |
| S02 | [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) | normative; verified-excerpt | Kriteria kontras, target pointer dan struktur konformansi diperiksa. Bukan audit seluruh implementasi. |
| S03 | [web.dev — Web Vitals](https://web.dev/articles/vitals) | official-guide; verified-excerpt | LCP/INP/CLS dan evaluasi p75 mobile/desktop diperiksa. |
| S04 | [MDN — CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Introduction) | official-guide; opened | Halaman cascade dibuka; aturan rinci dicek lagi saat digunakan. |
| S05 | [MDN — Animation performance](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate) | official-guide; opened | Halaman performa animasi dibuka; bukan benchmark proyek. |
| S06 | [MDN — Using WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) | official-guide; opened | Halaman WAAPI dibuka; dukungan target perlu diperiksa saat implementasi. |
| S07 | [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | official-guide; opened | Rujukan preferensi gerak dibuka; audit runtime tetap diperlukan. |
| S08 | [W3C APG — Dialog modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | official-guide; opened | Pola dialog dibuka; APG informatif, bukan seluruh WCAG. |
| S09 | [MDN — CSP implementation](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSP) | official-guide; opened | Panduan CSP dibuka; policy host perlu diuji. |
| S10 | [Git — revert](https://git-scm.com/docs/git-revert) | official-reference; opened | Dokumentasi revert dibuka; contoh recovery harus cocok history. |
| S11 | [GitHub — Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) | official-policy; verified-excerpt | Availability, ukuran, bandwidth, timeout dan build limits diperiksa. |
| S12 | [Google — SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) | official-guide; opened | Panduan SEO dibuka; tidak menjamin ranking. |
| S13 | [GOV.UK — moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) | official-guide; reading-list | Rujukan metode; belum dibaca ulang dalam putaran ini. |
| S14 | [W3C — CSS Color 4](https://www.w3.org/TR/css-color-4/) | specification; reading-list | Pendalaman color space; versi/status dan dukungan perlu diperiksa. |
| S15 | [MDN — CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout) | official-guide; reading-list | Rujukan Flexbox/Grid/layout; belum diaudit ulang. |
| S16 | [MDN — CSS Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts) | official-guide; reading-list | Font loading dan metrik; cek dukungan/version saat dipakai. |
| S17 | [web.dev — Learn Images](https://web.dev/learn/images) | official-guide; reading-list | Pipeline gambar; tidak memverifikasi lisensi aset pengguna. |
| S18 | [MDN — dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) | official-guide; reading-list | Behavior native dialog dan dukungan; belum dibaca ulang. |
| S19 | [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) | official-guide; reading-list | Capability/viewport queries; dukungan harus dicek. |
| S20 | [MDN — requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) | official-reference; opened | API rAF dibuka; contoh repo ditulis sendiri. |
| S21 | [WHATWG — Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) | normative; reading-list | Detail scheduling; bukan seluruh spec telah dibaca. |
| S22 | [WHATWG — HTML](https://html.spec.whatwg.org/) | normative; reading-list | Spesifikasi elemen; living standard perlu cek section relevan. |
| S23 | [MDN — Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) | official-guide; reading-list | Pendalaman z-index dan konteks; belum diaudit ulang. |
| S24 | [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | official-guide; reading-list | Pendalaman bahasa; belum seluruh guide dibaca. |
| S25 | [TypeScript — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) | official-guide; reading-list | Type narrowing; tidak memvalidasi data runtime. |
| S26 | [MDN — Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | official-guide; reading-list | Handling response/failure; cek API saat dipakai. |
| S27 | [GitHub — Creating Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) | official-guide; reading-list | Deployment source; periksa lagi saat publish nyata. |
| S28 | [Node.js — Documentation](https://nodejs.org/api/) | official-reference; reading-list | Runtime/tooling; versi tidak dipaksakan pada repo. |
| S29 | [npm — npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci) | official-reference; reading-list | Reproducible install; URL versioned dan perlu disesuaikan runtime. |
| S30 | [MDN — Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) | official-guide; reading-list | Cabang lanjutan; belum diverifikasi pada target browser. |
| S31 | [MDN — Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) | official-guide; opened | Indeks drawing dan lifecycle diperiksa; bukan seluruh tutorial. |
| S32 | [MDN — WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) | official-guide; opened | Halaman praktik WebGL dibuka; scene 3D production belum dibuat. |
| S33 | [web.dev — Optimize LCP](https://web.dev/articles/optimize-lcp) | official-guide; reading-list | Attribution loading; belum diaudit ulang. |
| S34 | [Chrome — Performance panel](https://developer.chrome.com/docs/devtools/performance) | official-guide; reading-list | Profiling; fitur UI/versi bisa berubah. |
| S35 | [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | official-reference; opened | API observer dibuka; tidak sama dengan progress per frame. |
| S36 | [OWASP — XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | official-guide; reading-list | Security guidance; bukan audit keamanan lengkap. |
| S37 | [OWASP — Third Party JS](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html) | official-guide; reading-list | Trust boundary dependency; cek bagian relevan saat integrasi. |
| S38 | [Playwright — Best practices](https://playwright.dev/docs/best-practices) | official-guide; reading-list | Browser automation; bukan user research. |
| S39 | [Chrome — Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | official-guide; reading-list | Audit lab; belum dijalankan sebagai field measurement. |
| S40 | [GitHub — About Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) | official-guide; opened | Tentang static hosting dibuka pada percakapan biaya sebelumnya. |
| S41 | [GitHub — Actions permissions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication) | official-guide; reading-list | Permissions minimum; tidak ada workflow ditambahkan dalam release ini. |
| R01 | [Tuch et al. — visual complexity](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/) | primary-research; inherited-reference | Disebut dalam panduan pribadi. Abstrak tidak dibaca ulang; jangan infer konversi. |
| P01 | Website Builder — panduan pribadi | user-guide; read | Panduan dan hasil serta lima referensi terpasang dibaca. Sintesis alur, bukan bukti hasil pengguna. |

## Claim register

| Klaim | Rujukan | Jenis | Batas |
| --- | --- | --- | --- |
| Ambang Core Web Vitals dan p75 | S03 | Panduan resmi | Bukan hasil ukur portofolio |
| Kontras/target pointer dan tingkatan | S02 | Standar normatif | Pengecualian dan lingkup tetap diperiksa |
| Availability dan kapasitas Pages | S11 | Kebijakan host | Cek ulang saat publish |
| Default layout, durasi dan budget repo | Penulis proyek | Keputusan desain | Usulan yang perlu pengujian |
| Rekomendasi estetika/UX | P01 + sintesis penulis | Hipotesis/praktik | Bukan jaminan emosi atau konversi |

## Pembaruan

Catat pertanyaan → sumber resmi → section → tanggal/versi → klaim yang berubah → modul terdampak → regression. Jangan menandai reading-list sebagai verified hanya karena URL dapat ditemukan. Jika akses hanya metadata, jangan menambah rincian metode atau ukuran efek.
