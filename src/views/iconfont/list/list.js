import Vue from 'vue'
import App from './listApp'
import VueWow from 'vue-wow'

Vue.use(VueWow)

new Vue({
  render: h => h(App)
}).$mount('#app')
