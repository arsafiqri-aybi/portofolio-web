const canvas = document.querySelector('#scene');
const context = canvas.getContext('2d');
const button = document.querySelector('#toggle');
const status = document.querySelector('#state');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const controller = new AbortController();
const options = { signal: controller.signal };
let requested = false, inView = true, frame = 0, previous, time = 0, width = 0, height = 0;
let resizeObserver, intersectionObserver;
function render() {
  if (!context) return;
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < 12; i++) {
    const angle = i * Math.PI * 2 / 12 + time * .3;
    const radius = Math.min(width, height) * .29;
    const x = width / 2 + Math.cos(angle) * radius * 1.6;
    const y = height / 2 + Math.sin(angle) * radius;
    context.beginPath(); context.arc(x, y, 4 + i % 3 * 2, 0, Math.PI * 2);
    context.fillStyle = i % 2 ? '#b8e4cf' : '#f4f5ef'; context.fill();
  }
  context.beginPath();context.ellipse(width / 2, height / 2, Math.min(width,height) * .29 * 1.6, Math.min(width,height) * .29, 0, 0, Math.PI*2);
  context.strokeStyle='#45555d';context.stroke();
}
function stop() { if (frame) cancelAnimationFrame(frame); frame = 0; previous = undefined; }
function tick(now) {
  const dt = previous === undefined ? 0 : Math.min((now - previous) / 1000, .05);
  previous = now; time += dt; render(); frame = requestAnimationFrame(tick);
}
function sync() {
  const running = requested && inView && !document.hidden && !preference.matches && Boolean(context);
  if (running && !frame) frame = requestAnimationFrame(tick);
  if (!running) { stop(); render(); }
  canvas.dataset.state = running ? 'running' : 'static';
  button.setAttribute('aria-pressed', String(requested && !preference.matches));
  button.disabled = preference.matches || !context;
  button.textContent = requested && !preference.matches ? 'Jeda motion' : 'Mulai motion';
  status.textContent = !context ? 'Canvas tidak tersedia; penjelasan tetap dapat dibaca.' : preference.matches ? 'Reduced motion aktif. Scene statis.' : running ? 'Motion aktif.' : requested ? 'Motion dijeda karena scene atau tab tidak terlihat.' : 'Scene statis. Pilih Mulai motion jika ingin melihat gerak.';
}
function resize() {
  const rect = canvas.getBoundingClientRect();
  width = rect.width; height = rect.height;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);canvas.height = Math.round(height * dpr);
  context?.setTransform(dpr, 0, 0, dpr, 0, 0);render();
}
button.addEventListener('click', () => { requested = !requested; sync(); }, options);
preference.addEventListener('change', () => { if (preference.matches) requested = false; sync(); }, options);
document.addEventListener('visibilitychange', sync, options);
addEventListener('resize', resize, options);
if ('ResizeObserver' in window) { resizeObserver = new ResizeObserver(resize); resizeObserver.observe(canvas); }
if ('IntersectionObserver' in window) {
  intersectionObserver = new IntersectionObserver(entries => { inView = entries[0].isIntersecting;sync(); });
  intersectionObserver.observe(canvas);
}
resize();button.hidden = false;sync();
addEventListener('pagehide', event => { if (event.persisted) return;stop();controller.abort();resizeObserver?.disconnect();intersectionObserver?.disconnect(); }, { signal: controller.signal });
