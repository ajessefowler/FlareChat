<template>
  <div class="auth">
    <div class="auth__toggle">
      <button class="toggle" v-bind:class="{ toggle__active: !loginSelected }" v-on:click="selectRegister">Register</button>
      <button class="toggle" v-bind:class="{ toggle__active: loginSelected }" v-on:click="selectLogin">Login</button>
      <div class="auth__indicator" v-bind:class="{ loginActive: loginSelected }"></div>
    </div>
    <div class="authContainer">
      <Register v-bind:class="{ loginSelected: loginSelected }"/>
      <Login v-bind:class="{ loginSelected: loginSelected }"/>
    </div>
  </div>
</template>

<script>
import Register from './Register.vue'
import Login from './Login.vue'

export default {
  name: 'Authentication',
  data() {
    return {
      loginSelected: false
    }
  },
  methods: {
    selectLogin: function() {
      this.loginSelected = true;
    },
    selectRegister: function() {
      this.loginSelected = false;
    }
  },
  components: {
    Register, Login
  }
}
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.authContainer {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.loginSelected {
  transform: translateX(-100%);
}

.formContainer {
  flex-shrink: 0;
  width: 100%;
  padding: 40px 10% 28px;
  transition: transform 0.4s ease;
}

.auth {
  position: fixed;
  bottom: 15vh;
  left: 5%;
  width: 90%;
  background-color: rgb(33, 49, 63);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(30, 30, 30);
}

.authForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    input, button {
      border-radius: 3px;
    }

    input {
      background-color: rgb(22, 33, 43);
      color: #eee;
      height: 40px;
      width: 100%;
      margin-bottom: 15px;
      padding: 0 10px;
      font-size: 16px;
    }

    button {
        align-self: flex-end;
        background-color: rgb(230, 70, 30);
        color: #eee;
        margin-bottom: 0;
        font-weight: bold;
    }
}

.auth__toggle {
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: rgb(22, 33, 43);
  border-radius: 10px 10px 0 0;
}

.toggle__active {
  background-color: rgb(33, 49, 63) !important;
}

.toggle {
  margin: 0;
  padding: 0;
  width: 50%;
  height: inherit;
  background-color: transparent;
  color: #eee;
  font-weight: bold;
  border-bottom: 2px solid rgb(22, 33, 43);
  border-radius: 10px 10px 0 0;
  transition: background-color 0.3s ease, color 0.1s ease;
}

.auth__indicator {
  height: 2px;
  width: 50%;
  background-color: rgb(230, 70, 30);
  position: absolute;
  top: 43px;
  transition: transform 0.4s ease;
}

.loginActive {
  transform: translateX(100%);
}

@media only screen and (min-width: 768px) {
  .auth {
    bottom: 15vh;
    left: 25%;
    width: 50%;
  }

  .authForm {
    input {
      margin-bottom: 10px;
    }
  }

  .register__split {
    display: flex;
    justify-content: space-between;
    width: 100%;

    input {
      width: 49%;
    }
  }
}
</style>
