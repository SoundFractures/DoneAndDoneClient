<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary" @click="testFunction">Hello</v-btn>
      <v-spacer />
      <v-btn text x-small class="primary">Hello</v-btn>
    </template>
    <v-card class="pa-2" outlined>Banana</v-card>
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
