import { matchesCategory, countLabel } from './model.mjs';
const controller = new AbortController();
const options = { signal: controller.signal };
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const cards = [...document.querySelectorAll('[data-id]')];
const filters = document.querySelector('.filters');
const filterButtons = [...filters.querySelectorAll('button')];
function applyFilter(category) {
  let count = 0;
  for (const card of cards) {
    const visible = matchesCategory(card.dataset.categories.split(' '), category);
    card.hidden = !visible;
    count += Number(visible);
  }
  for (const button of filterButtons) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  document.querySelector('#result-count').textContent = countLabel(count);
  document.querySelector('#empty').hidden = count !== 0;
}
for (const button of filterButtons) button.addEventListener('click', () => applyFilter(button.dataset.filter), options);
filters.hidden = false;
const dialog = document.querySelector('#detail-dialog');
let opener;
if (typeof dialog.showModal === 'function') {
  for (const button of document.querySelectorAll('[data-detail]')) {
    button.addEventListener('click', () => {
      const card = button.closest('[data-id]');
      document.querySelector('#detail-title').textContent = card.querySelector('h3').textContent;
      document.querySelector('#detail-body').textContent = card.querySelector('p').textContent;
      document.querySelector('#detail-link').href = `./case-study.html#${card.dataset.id}`;
      opener = button;
      if (!dialog.open) dialog.showModal();
      document.querySelector('#close-dialog').focus();
    }, options);
    button.hidden = false;
  }
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close(), options);
  dialog.addEventListener('close', () => { if (opener?.isConnected && !opener.closest('[hidden]')) opener.focus(); }, options);
}
const copyButton = document.querySelector('#copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText('hello@example.com');
    status.textContent = 'Email contoh disalin.';
  } catch {
    status.textContent = 'Tidak dapat menyalin otomatis. Alamat email tetap terlihat dan dapat dipilih.';
  }
}, options);
copyButton.hidden = false;
const animations = new Set();
let observer;
if ('IntersectionObserver' in window) {
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (motion.matches || !entry.target.animate) continue;
      const animation = entry.target.animate([{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }], { duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)' });
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    }
  }, { threshold: .15 });
  cards.forEach(card => observer.observe(card));
}
motion.addEventListener('change', () => { if (motion.matches) for (const animation of animations) animation.cancel(); }, options);
addEventListener('pagehide', event => {
  if (event.persisted) return;
  controller.abort(); observer?.disconnect();
  for (const animation of animations) animation.cancel();
}, { signal: controller.signal });
