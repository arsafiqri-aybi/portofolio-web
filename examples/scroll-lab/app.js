import { pageProgress } from './progress.mjs';
const bar = document.querySelector('.bar');
const wrap = document.querySelector('.progress-wrap');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const controller = new AbortController();
let frame = 0;
function update() {
  frame = 0;
  if (preference.matches) return;
  const progress = pageProgress(scrollY, document.documentElement.scrollHeight, innerHeight);
  bar.style.transform = `scaleX(${progress})`;
}
function schedule() { if (!frame && !preference.matches && !document.hidden) frame = requestAnimationFrame(update); }
function syncPreference() {
  wrap.hidden = preference.matches;
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
  if (preference.matches) bar.style.transform = 'scaleX(0)';else schedule();
}
addEventListener('scroll', schedule, { passive:true, signal:controller.signal });
addEventListener('resize', schedule, { signal:controller.signal });
preference.addEventListener('change', syncPreference, { signal:controller.signal });
document.addEventListener('visibilitychange', () => { if (document.hidden && frame) { cancelAnimationFrame(frame);frame=0; } else schedule(); }, { signal:controller.signal });
let observer;
if ('ResizeObserver' in window) { observer = new ResizeObserver(schedule);observer.observe(document.body); }
syncPreference();
addEventListener('pagehide', event => { if(event.persisted)return;controller.abort();observer?.disconnect();if(frame)cancelAnimationFrame(frame); }, { signal: controller.signal });
