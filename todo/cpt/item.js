import { del, toggle } from '../app/index.js'

export default todo => {
  const { done, title } = todo

  return html`
    <div>
      <input type="checkbox" ?checked=${done} @change=${() => toggle(todo)} />
      <span>${title}</span>
      <button @click=${() => del(todo)}>x</button>
    </div>
  `
}
