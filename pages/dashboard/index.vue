<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary" @click="handleLoading">Hello</v-btn>
      <v-spacer />
      <v-btn text x-small class="primary">Hello</v-btn>
    </template>
    <v-card class="pa-2" outlined>Hello Dashboard</v-card>
  </wrapper>
</template>
<script lang="ts">
import { getModule } from 'vuex-module-decorators'
import Wrapper from '~/components/general/Wrapper.vue'

import GeneralModule from '~/store/general'
const store = getModule(GeneralModule)

export default {
  components: {
    Wrapper,
  },
  data() {
    return {}
  },
  computed: {
    loading() {
      return store.loading
    },
  },
  methods: {
    handleLoading(): void {
      store.setLoading(true)
    },
  },
}
</script>
