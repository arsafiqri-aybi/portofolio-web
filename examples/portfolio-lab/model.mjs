export function matchesCategory(categories, selected) {
  return selected === 'all' || categories.includes(selected);
}
export function selectProjects(projects, selected) {
  return projects.filter(project => matchesCategory(project.categories, selected));
}
export function countLabel(count) {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('count must be a nonnegative integer');
  return `${count} proyek latihan ditampilkan.`;
}
