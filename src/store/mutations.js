export const STORAGE_KEY = 'todos-vuejs'

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  todos: 1
}

export const mutations = {
  addPoint (state, { num }) {
    state.todos = num
  }
}
