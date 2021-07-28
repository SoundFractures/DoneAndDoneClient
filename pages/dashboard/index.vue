<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary">Hello</v-btn>
      <v-spacer />
      <v-btn text x-small class="primary">Hello</v-btn>
    </template>
    <v-card class="pa-2" outlined>Hello Dashboard</v-card>
  </wrapper>
</template>
<script>
import Wrapper from '~/components/general/Wrapper.vue'
export default {
  components: {
    Wrapper,
  },
  data() {
    return {}
  },
}
</script>
