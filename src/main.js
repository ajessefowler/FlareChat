import Vue from 'vue'
import App from './App.vue'

import store from './store'
import Axios from 'axios'
import router from './router'

import VueNativeSocket from 'vue-native-websocket'

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.use(VueNativeSocket, 'ws://192.168.1.68:8080/chat/chat', { store: store, format: 'json' });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
