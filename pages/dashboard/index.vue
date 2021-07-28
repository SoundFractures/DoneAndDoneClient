<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary" @click="handleLoading">Hello</v-btn>
      <v-spacer />
      <v-btn text x-small class="primary">Hello</v-btn>
    </template>
    <v-card class="pa-2" outlined>Hello Dashboard</v-card>
    <span>{{ drawer }}</span>
  </wrapper>
</template>
<script lang="ts">
import Wrapper from '~/components/general/Wrapper.vue'
import { useStore, Mutations } from '~/store'
const store = useStore()
export default {
  components: {
    Wrapper,
  },
  data() {
    return {}
  },
  computed: {
    drawer() {
      return store.state.general.drawer
    },
  },
  methods: {
    handleLoading(): void {
      store.commit(Mutations.general.SET_LOADING, !store.state.general.loading)
    },
  },
}
</script>
