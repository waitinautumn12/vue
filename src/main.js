// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
