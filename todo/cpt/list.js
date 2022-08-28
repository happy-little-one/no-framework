import item from './item.js'

import { add } from '/todo/app/index.js'

function on_key_down(e) {
  if (e.key === 'Enter') {
    const value = e.target.value.trim()
    if (value) add(value)
  }
}

export default store => {
  const todos = Object.values(store).filter(Boolean)

  return html`
    <input type="text" @keydown=${on_key_down} />
    ${todos.map(item)}
  `
}
