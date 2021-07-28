<template>
  <v-btn active-class="primary" text :to="to" @click="$emit('click')">{{
    text
  }}</v-btn>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: { type: String, required: true },
    to: { type: String, required: false, default: null },
  },
})
</script>
