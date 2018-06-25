import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from './addApp'
import List from './listApp'
import app from './app'
import a from './a'
import b from './b'
import c from './c'
import d from './d'
const routes = [
  {path: '/', component: app,
	      children: [
        {
          path: 'addApp',
          component: Add
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'a',
          component: a
        },
        {
          path: 'b',
          component: b
        },
        {
          path: 'c',
          component: c
        },
        {
          path: 'd',
          component: d
        },
      ]
	}
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
