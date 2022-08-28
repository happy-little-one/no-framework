export function create(title) {
  return {
    id: Math.random().toString(32).slice(2),
    title,
    done: false,
  }
}
