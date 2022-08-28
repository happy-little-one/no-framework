import store from '../adt/store/index.js'
import * as mod from '../mod/index.js'

export function add(title) {
  const todo = mod.todo.create(title)
  store[todo.id] = todo

  render()
}

export function toggle(todo) {
  todo.done = !todo.done

  render()
}

export function del(todo) {
  store[todo.id] = undefined

  render()
}
