<template>
  <div>
    <form @submit.prevent="userRegister">
      <div>
        <label>Email</label>
        <input v-model="payload.email" type="text" />
      </div>
      <div>
        <label>Username</label>
        <input v-model="payload.username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="payload.password" type="text" />
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
      payload: {
        email: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userRegister() {
      await this.$repository.user.create(this.payload).then(async () => {
        await this.$auth.loginWith('local', {
          data: {
            email: this.payload.email,
            password: this.payload.password,
          },
        })
      })
    },
  },
  auth: 'guest',
}
</script>
