export function clamp(value, min = 0, max = 1) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}
export function pageProgress(scrollTop, scrollHeight, viewportHeight) {
  const range = scrollHeight - viewportHeight;
  return range <= 0 ? 0 : clamp(scrollTop / range);
}
