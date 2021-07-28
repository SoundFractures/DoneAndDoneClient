<template>
  <div>
    <v-app-bar flat dense class="appBarMargin">
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.mdAndUp"
        @click="handleDrawer"
      />
      <slot name="topbar" />
    </v-app-bar>
    <v-container fluid>
      <slot />
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { useStore, Mutations } from '~/store'
const store = useStore()
export default Vue.extend({
  // TODO: Make drawer in a store and change the drawer to open/close when on mobile + show app bar nav icon
  methods: {
    handleDrawer(): void {
      store.commit(Mutations.general.SET_DRAWER, true)
    },
  },
})
</script>
<style scoped>
.appBarMargin {
  margin-bottom: 1.5em;
}
</style>
