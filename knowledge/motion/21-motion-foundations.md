# M21 — Motion Foundations

> Bidang F · Bahasa Indonesia · Disusun 8 Oktober 2026 · Sintesis operasional untuk portofolio frontend.

**Prasyarat:** [M05 — Art Direction & Identity](../visual-design/05-art-direction-identity.md), [M06 — Composition & Layout](../visual-design/06-composition-layout.md), [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md)

## Fungsi dan bahasa gerak

Motion menjelaskan perubahan, hubungan, urutan, feedback atau karakter. Sebelum membuat animasi, tulis apa yang harus dipahami setelah gerak terjadi. Jika tidak ada fungsi yang jelas, dekorasi boleh tetap menjadi pilihan artistik, tetapi tidak boleh menghambat tugas dan harus memiliki biaya yang bisa diterima.

## Timing dan duration

Timing adalah penempatan kejadian; duration adalah lama transisi. Respons terhadap input sebaiknya mulai terasa segera, sementara perubahan besar dapat membutuhkan waktu lebih panjang untuk keterbacaan. Tidak ada durasi paling premium yang berlaku universal. Rentang awal proyek dapat dibedakan: feedback singkat, transisi komponen menengah, dan narasi scene lebih panjang; uji pada ukuran, jarak dan input nyata.

Metrik interaksi cepat berbeda dari durasi artistik. Tombol dapat memberi feedback segera sementara panel menyelesaikan transisi setelahnya. Jangan menunda perubahan state sampai seluruh animasi selesai bila pengguna membutuhkan kendali.

## Easing dan interpolasi

Linear memberi kecepatan konstan. Ease-in mempercepat dari awal; ease-out melambat menuju tujuan; ease-in-out menggabungkan keduanya. Cubic-bezier mengendalikan bentuk waktu terhadap progress. Overshoot dapat terjadi melalui nilai progress atau simulasi spring; pilih berdasarkan fungsi, bukan selalu memberi bounce.

Interpolasi `lerp(a,b,t)=a+(b-a)t` memetakan progress ke nilai. Clamp progress untuk rentang bila diperlukan. Spring memakai stiffness, damping dan massa atau parameter yang setara; hasilnya perlu diuji untuk settling dan interruption. Angka spring dari library berbeda tidak selalu dapat disalin satu banding satu.

## Principles sebagai alat

Anticipation memberi persiapan; follow-through menyelesaikan hubungan; overlap membuat bagian tidak bergerak serentak; continuity menjaga orientasi. Gunakan secukupnya pada UI. Squash/stretch dapat membantu karakter ilustratif tetapi merusak teks atau kontrol jika berlebihan. Prinsip animasi bukan daftar efek yang harus muncul semua.

Stagger memberi urutan, tetapi delay kumulatif dapat membuat pengunjung menunggu. Jangan menunda seluruh daftar panjang. Tampilkan isi inti segera, lalu beri gestur ringan pada kelompok yang relevan.

## Choreography dan hierarchy

Tentukan elemen utama, pendukung dan waktu kejadian. Satu perubahan dominan lebih mudah dipahami daripada beberapa scene bersamaan. Hubungan spasial bisa dipertahankan dengan shared-element transition atau perubahan ukuran yang terencana. Gerak diagonal besar, zoom dan parallax dapat meningkatkan sensitivitas vestibular; sediakan alternatif yang lebih tenang.

Storyboard motion minimal berisi state awal/akhir, trigger, durasi, easing, urutan, properties, interruption dan fallback. Bentuk akhir ditentukan state UI, bukan hanya keyframe terakhir.

## Motion system

Buat vocabulary: response, enter, exit, emphasize, navigate, ambient. Setiap peran memiliki intensitas dan kondisi. Ambient loop tidak menyampaikan informasi penting dan harus dapat dihentikan jika mengganggu. Satu halaman tidak perlu semua peran. Tema motion harus selaras tipografi, kepadatan dan karakter karya.

## Quality dan diagnosis

Gerak terasa floaty: cek duration terlalu panjang, easing lambat atau jarak tanpa alasan. Terasa snap: cek continuity dan state awal; tambahkan transisi lokal tanpa menghambat input. Terasa ramai: kurangi jumlah elemen yang bergerak bersamaan. Motion halus secara frame tetapi buruk secara UX: cek apakah isi dikunci, fokus berubah atau scroll diambil alih.

## Pengujian

Bandingkan versi statis dan bergerak pada tugas yang sama. Catat manfaat orientasi, keluhan, waktu menunggu dan performa. Review artistik dapat dilakukan tanpa peserta, tetapi jangan menyebutnya kenyamanan pengguna nyata. Durasi/easing disimpan sebagai keputusan proyek dan ditinjau ulang setelah interaksi diterapkan.

## Latihan penerapan

Buat motion spec tiga peran: feedback, reveal dan transisi panel. Tunjukkan versi reduced motion dan jelaskan apa yang tetap dipahami tanpa gerak.

## Bukti penerimaan

- [ ] Setiap motion punya tujuan atau alasan artistik yang jelas.
- [ ] State akhir benar saat animasi dipotong.
- [ ] Gerak tidak menjadi prasyarat membaca isi.
- [ ] Parameter diuji dalam konteks, bukan disebut universal.

## Hubungan dan dampak perubahan

[M05 — Art Direction & Identity](../visual-design/05-art-direction-identity.md), [M10 — Interaction Design](../ux-accessibility/10-interaction-design.md), [M12 — Accessibility & Inclusive Design](../ux-accessibility/12-accessibility.md), [M18 — Design System & Components](../architecture-tooling/18-design-system-components.md), [M22 — Interface Motion](22-interface-motion.md), [M23 — Scroll & Visual Storytelling](23-scroll-storytelling.md), [M24 — Animation & Graphics Engineering](24-animation-graphics.md), [M26 — Runtime & Motion Performance](../performance-reliability/26-runtime-performance.md). Perubahan pada modul ini harus meninjau keputusan dan pengujian pada modul terkait.

## Sumber dan batas bukti

Rujukan: S05, S06, S07, P01 dalam [register sumber](../../sources/REGISTER.md). Penjelasan dan contoh adalah sintesis penulis; angka proyek adalah usulan yang perlu diuji. Status akses sumber tercatat di register, bukan klaim audit seluruh dokumen.

[Indeks knowledge base](../../KNOWLEDGE-MAP.md) · [Standar mutu](../../quality/ACCEPTANCE.md)
