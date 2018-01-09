export const STORAGE_KEY = 'todos-vuejs'

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  todos: 1,
  brand: 'bc',
  model: 'A-Class',
  style: 'E43',
  activeColor: {url: 'src/images/common/black.png', name: '外观颜色选项：炫晶黑'}
}

export const mutations = {
  addPoint (state, { num }) {
    state.todos = num
  },
  orderColor (state, { ele, name }) {
    state.activeColor = { url: 'src/images/common/' + ele + '.png', name: '外观颜色选项:' + name }
  },
  recordBrand (state, { B }) {
    state.brand = B
  },
  recordModel (state, { M }) {
    state.model = M
  },
  recordStyle (state, { S }) {
    state.style = S
  }
}
