import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*
  Websocket
 */

const ws = new WebSocket('ws://localhost:8080')

ws.onopen = function () {
  console.log('Opening connection')
}

ws.onclose = function () {
  alert('Websocket has closed')
}

// Add instance var $socket
Vue.prototype.$socket = ws

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
