<template>
  <v-app>
    <template v-if="!loading">
      <drawer-navigation :theme="theme" :items="userNavigationItems" />
      <v-main>
        <Nuxt />
      </v-main>
    </template>
    <template v-else>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-progress-circular indeterminate size="35" width="4" />
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { userNavigationItems } from '~/utils/navigation/helpers'
import DrawerNavigation from '~/components/navigation/DrawerNavigation.vue'
export default Vue.extend({
  components: {
    DrawerNavigation,
  },
  data() {
    return {
      userNavigationItems,
      loading: false as boolean,
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  methods: {
    handleTheme(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
})
</script>
<style>
/* .theme--dark.v-application {
  background-color: var(--v-background-base) !important;
}
.theme--light.v-application {
  background-color: var(--v-background-base) !important;
} */
</style>
