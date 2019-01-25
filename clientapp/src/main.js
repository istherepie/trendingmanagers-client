// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
