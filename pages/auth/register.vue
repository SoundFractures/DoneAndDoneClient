<template>
  <div>
    <form @submit.prevent="userRegister">
      <div>
        <label>Email</label>
        <input v-model="login.email" type="text" />
      </div>
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text" />
      </div>
      <div>
        <label>Password</label>
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
        username: '',
        password: '',
      },
    }
  },
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    async userRegister() {},
  },
  auth: 'guest',
}
</script>
