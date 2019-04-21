<template>
    <div class="chat">
      <div class="input">
      </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
}
</script>

<style lang="scss" scoped>
.chat {
  background-color: transparent;
  width: 65%;
  height: 100vh;
  position: fixed;
  right: 0;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}

.input {
  height: 44px;
  width: calc(65% - 70px);
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgb(30, 30, 30);
  background-color: rgba(238, 238, 238, 0.8);
  position: fixed;
  bottom: 25px;
  right: 35px;
}
</style>
