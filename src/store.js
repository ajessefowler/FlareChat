import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: ''
    },
    socket: {
      isConnected: false,
      reconnectError: false
    }
  },
  mutations: {
    auth_request(state){
      state.status = 'loading';
    },
    auth_success(state, userAndToken){
      state.status = 'success';
      state.token = userAndToken.token;
      state.user = userAndToken.user;
    },
    auth_error(state){
      state.status = 'error';
    },
    logout(state){
      state.status = '';
      state.token = '';
      state.user = '';
    },
    SOCKET_ONOPEN (state, event)  {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
    },
    SOCKET_ONCLOSE (state, event)  {
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR (state, event)  {
      console.error(state, event);
    },
    SOCKET_ONMESSAGE (state, message)  {
      // TODO - Display message
    },
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        const formUrlEncoded = x =>
          Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

        commit('auth_request');

        axios({
          url: 'http://localhost:8080/chat/flare/authentication/login/', 
          data: formUrlEncoded({
            username: user.username,
            password: user.password
          }), 
          method: 'POST', 
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => {
          console.log(response.data);
          const token = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', {token: token, user: user});
          resolve(response);
        })
        .catch(error => {
          commit('auth_error');
          localStorage.removeItem('token');
          reject(error);
        });
      });
    },
    logout({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    register({commit}, user) {
      return new Promise((resolve, reject) => {
        const formUrlEncoded = x =>
          Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

        commit('auth_request');

        axios({
          url: 'http://localhost:8080/chat/flare/authentication/register/', 
          data: formUrlEncoded({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            password: user.password,
            passwordConfirmation: user.passwordConfirmation
          }), 
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => {
          //this.dispatch('login', user);
          resolve(response);
        })
        .catch(err => {
          commit('auth_error', err);
          localStorage.removeItem('token');
          reject(err);
        })
      })
    },
    sendMessage: function(context, message) {
      Vue.prototype.$socket.send(message)
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})
