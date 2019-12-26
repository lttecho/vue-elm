import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../aui-20170109-v2.1/css/aui.css'
import '../aui-20170109-v2.1/css/aui-flex.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
