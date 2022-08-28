import { html, render } from 'https://cdn.skypack.dev/lit-html'

import app from '/main/app.js'
import store from '/todo/adt/store/index.js'

window.html = html
window.render = () => render(app(store), document.body)

render(app(store), document.body)
