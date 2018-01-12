import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/Layout'
import layoutNull from '@/components/Layout_null'
import layoutModel from '@/components/Layout_model'

import Brand from '@/components/Brand'
import Model from '@/components/carModel'
import Style from '@/components/carStyle'
import Car from '@/components/Car'
import Interor from '@/components/interor'
import Explain from '@/components/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [{ path: '/', component: Brand, name: 'brand' }]
    }, {
      path: '/model',
      component: layoutModel,
      children: [{ path: '/model/:brand', component: Model, name: 'model' }]
    }, {
      path: '/style',
      component: layoutModel,
      children: [{ path: '/style/:brand/:model', component: Style, name: 'style' }]
    }, {
      path: '/car',
      component: layoutNull,
      children: [{ path: '/car/:brand/:model/:style', component: Car, name: 'car' }]
    }, {
      path: '/interor',
      component: layoutNull,
      children: [{ path: '/interor/:style', component: Interor, name: 'interor' }]
    }, {
      path: '/explain',
      component: layoutNull,
      children: [{ path: '/explain', component: Explain, name: 'explain' }]
    }
  ]
})
