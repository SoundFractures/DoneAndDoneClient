<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Email: </label>
        <input v-model="payload.email" type="text" />
      </div>
      <div>
        <label>Password: </label>
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
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.payload,
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  auth: 'guest',
}
</script>
