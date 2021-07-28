<template>
  <wrapper>
    <template #topbar>
      <v-btn text x-small class="primary">Add Task</v-btn>
      <v-spacer />
    </template>
    <v-card class="pa-2" outlined>Hello Tasks</v-card>
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
