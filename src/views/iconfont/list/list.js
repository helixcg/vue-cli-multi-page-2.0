import Vue from 'vue'
import App from './listApp'
import VueWow from 'vue-wow'
var VueScrollactive = require('vue-scrollactive');

Vue.use(VueScrollactive);
Vue.use(VueWow);

new Vue({
  render: h => h(App)
}).$mount('#app')
