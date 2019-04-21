<template>
    <div class="conversation">
        <div class="conversation__image">
          <h2>JF</h2>
        </div>
        <div class="conversation__details">
          <h3>Jesse Fowler</h3>
          <p>The latest message.</p>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Conversation',
}
</script>

<style lang="scss" scoped>
.conversation {
  height: 80px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.conversation:hover {
  cursor: pointer;
}

.conversation__image {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: rgb(20, 30, 39);
  display: flex;
  justify-content: center;
  align-items: center;
}

.conversation__details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0 0 0;
  height: inherit;
  padding: 0 0 0 15px;
  width: calc(100% - 55px);
  border-bottom: 1px solid rgb(41, 63, 82);

  h3, p {
    margin: 0;
    padding: 0;
  }
}
</style>
