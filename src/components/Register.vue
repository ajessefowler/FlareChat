<template>
    <div class="formContainer">
          <form class="authForm" @submit.prevent="register">
              <div class="register__split">
                  <input v-model="first_name" type="text" name="registerFirstName" placeholder="First Name" aria-label="First Name">
                  <input v-model="last_name" type="text" name="registerLastName" placeholder="Last Name" aria-label="Last Name">
              </div>
              <input v-model="email" type="email" name="registerEmail" placeholder="Email" aria-label="Email">
              <input required v-model="username" type="text" name="registerUsername" placeholder="Username" aria-label="Username">
              <div class="register__split">
                  <input required v-model="password" type="password" name="registerPassword" placeholder="Password" aria-label="Password">
                  <input v-model="password_confirmation" type="password" name="registerPasswordConfirmation" placeholder="Confirm Password"  aria-label="Confirm Password">
              </div>
              <button>Register</button>
          </form>
      </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        register: function () {
            const user = {
                firstName: this.first_name,
                lastName: this.last_name,
                username: this.username,
                email: this.email,
                password: this.password,
                passwordConfirmation: this.password_confirmation
            }
            this.$store.dispatch('register', user)
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>

</style>
