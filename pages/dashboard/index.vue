<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary" @click="testFunction">Hello</v-btn>
      <v-spacer />
      <v-btn text x-small class="primary">Hello</v-btn>
    </template>
    <v-card v-for="item in users" :key="item._id" class="pa-2" outlined>{{
      item.email
    }}</v-card>
  </wrapper>
</template>
<script lang="ts">
import Vue from 'vue'
import Wrapper from '~/components/general/Wrapper.vue'
import { useStore, Mutations } from '~/store'
import { STATUS_COLOR } from '~/utils/types'
const store = useStore()
export default Vue.extend({
  components: {
    Wrapper,
  },
  data() {
    return {
      users: [] as Array<any>,
    }
  },
  mounted() {
    this.$repository.user.list().then((data) => {
      this.users = data
    })
  },
  methods: {
    testFunction() {
      store.commit(Mutations.general.SET_SNACKBAR, {
        message: 'Hey, this is a test',
        timeout: 34000,
        type: STATUS_COLOR.success,
      })
    },
  },
})
</script>
