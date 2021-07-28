<template>
  <div>
    <v-app-bar flat dense>
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.mdAndUp"
        @click="$nuxt.$emit('SET_DRAWER')"
      />
      <slot name="topbar" />
    </v-app-bar>
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // TODO: Make drawer in a store and change the drawer to open/close when on mobile + show app bar nav icon
  methods: {},
})
</script>
