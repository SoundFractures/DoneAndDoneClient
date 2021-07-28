<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Email: </label>
        <input v-model="login.email" type="text" />
      </div>
      <div>
        <label>Password: </label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  layout: 'guest',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
  auth: 'guest',
}
</script>
