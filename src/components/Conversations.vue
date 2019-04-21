<template>
    <div class="conversations">
      <div class="conversations__header">
        <h1>flare</h1>
      </div>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <button class="conversations__create">+</button>
    </div>
</template>

<script>
import Conversation from './Conversation.vue'

export default {
    name: 'Conversations',
    components: {
        Conversation
    }
}
</script>

<style lang="scss" scoped>
.conversations {
  background-color: rgb(33, 49, 63);
  width: 35%;
  height: 100vh;
  box-shadow: 0 0 12px 0 rgb(30, 30, 30);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  padding-top: 65px;
  overflow: auto;
}

.conversations__header {
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  height: 65px;
  background-color: rgba(20, 30, 39, 0.8);
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 28pt;
  }
}

.conversations__create {
  background-color: rgba(230, 70, 30, 0.8);
  box-shadow: 0 0 10px 0 rgb(29, 29, 29);
  color: #eee;
  font-size: 24pt;
  font-weight: bold;
  line-height: 24pt;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  right: 25px;
  bottom: 25px;
}

</style>
