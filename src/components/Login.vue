<template>
    <div class="formContainer">
        <form class="authForm" @submit.prevent="login">
          <input required v-model="username" type="text" name="loginUsername" placeholder="Username" aria-label="Username">
          <input required v-model="password" type="password" name="loginPassword" placeholder="Password" aria-label="Password">
          <button>Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            const username = this.username;
            const password = this.password;
            const user = {
                username: username,
                password: password
            }
            this.$store.dispatch('login', user)
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>

</style>
