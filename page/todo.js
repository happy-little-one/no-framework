import list from '/todo/cpt/list.js'

export default store => html`
  <h2>TODO PAGE</h2>
  ${list(store)}
`
