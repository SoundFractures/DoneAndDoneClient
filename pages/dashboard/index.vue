<template>
  <wrapper>
    <template #topbar>
      <v-btn text small class="primary">Hello</v-btn>
    </template>
    <v-card class="ma-5 pa-2" outlined>Hello</v-card>
  </wrapper>
</template>
<script>
import Wrapper from '~/components/main/Wrapper.vue'
export default {
  components: {
    Wrapper,
  },
  data() {
    return {}
  },
}
</script>
