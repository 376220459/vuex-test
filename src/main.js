import Vue from 'vue'
import App from './App.vue'
import store from './sotre/index'
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false

// 将axios注册到全局Vue上
Vue.prototype.$http = axios.create({
  baseURL: 'https://dev.usemock.com/62e2882cbdf12effe9f775ad',
  timeout: 3000
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
