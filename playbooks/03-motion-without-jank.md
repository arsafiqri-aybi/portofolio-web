# Playbook 03 — Motion yang terarah dan tangguh

## Sebelum implementasi

Tulis fungsi, trigger, start/end state, properties, duration/easing, interruption, reduced motion, fallback dan budget. Pastikan isi tetap terbaca sebelum animasi.

## Implementasi

Pilih CSS transition untuk state sederhana, WAAPI untuk kontrol, atau engine bila kompleksitas benar-benar membutuhkan. Tulis state secara terpisah dari animation. Batalkan/reverse motion lama saat aksi baru. Tidak bergantung event animationend untuk kebenaran state.

Gunakan transform/opacity bila cocok, tetapi tetap ukur layer/paint. Batasi blur dan area bitmap. Baca geometry bersama, compute, lalu write. Jangan memaksa layout per objek.

## Lifecycle

Init satu kali; simpan references; stop saat hidden/offscreen; resume timestamp baru; preference runtime ditangani; dispose observer/listener/rAF/animation. Jika API gagal, fallback statis tetap lengkap.

## Kasus wajib

Rapid clicks, reverse scroll, resize, font/media terlambat, tab pindah, direct anchor, JS mati, reduced motion sejak awal dan berubah ketika aktif. UI/fokus tidak boleh buntu.

## Profiling

Bandingkan trace scene aktif versus nonaktif. Jika CPU rendah tetapi frame tetap berat, cek GPU/layer/paint. Jika long task dominan, pecah atau kurangi logic. Uji satu perubahan yang jelas dan simpan hasil.

## Bukti

Motion spec, failure cases, cleanup review, trace before/after dan device conditions. Label “smooth” tanpa kondisi bukan measurement.
