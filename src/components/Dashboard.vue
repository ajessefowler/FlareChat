<template>
  <div class="dashboard">
    <Conversations/>
    <Chat/>
    <button v-on:click="logout" class="logout">Logout</button>
  </div>
</template>

<script>
import Conversations from './Conversations.vue'
import Chat from './Chat.vue'

export default {
  name: 'Dashboard',
  methods: {
    logout: function() {
      this.$store.dispatch('logout');
    }
  },
  components: {
    Conversations, Chat
  }
}
</script>

<style lang="scss" scoped>
.logout {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}
</style>
