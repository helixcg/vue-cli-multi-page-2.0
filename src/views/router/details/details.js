import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from './addApp'
import List from './listApp'
import app from './app'

const routes = [
  {path: '/', component: app,
	      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '',
          component: Add
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'list',
          component: List
        }
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
