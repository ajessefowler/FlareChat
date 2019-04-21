<template>
  <div id="app">
    <transition name="fade">
      <router-view v-if="isLoggedIn"></router-view>
    </transition>
    <transition name="verticalSlide">
      <Authentication v-if="!isLoggedIn"/>
    </transition>
  </div>
</template>

<script>
import Authentication from './components/Authentication.vue'

export default {
  name: 'app',
  components: {
    Authentication
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
}
</script>

<style lang="scss">
$font-stack: 'Avenir', Helvetica, Arial, sans-serif;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgb(43, 64, 82);
}

h1 {
  padding: 0;
  margin: 0;
}

input, button {
    outline: none;
    -webkit-appearance: none;
    border: none;
}

button {
  font-family: $font-stack;
  font-size: 16px;
  padding: 6px 12px;
}

button:hover {
  cursor: pointer;
}

#app {
  font-family: $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.verticalSlide-enter-active, .verticalSlide-leave-active {
  transition: transform .3s;
}
.verticalSlide-enter, .verticalSlide-leave-to {
  transform: translateY(100vh);
}
</style>
