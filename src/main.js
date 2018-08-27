import Vue from 'vue'
import App from './App.vue'

import easyToast from './libs/easy-toast/index'

Vue.use(easyToast)

new Vue({
  el: '#app',
  render: h => h(App)
})
