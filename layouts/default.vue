<template>
  <v-app>
    <template v-if="!isLoading">
      <drawer-navigation :theme="theme" :items="userNavigationItems" />
      <v-main>
        <Nuxt />
      </v-main>
    </template>

    <template v-else>
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-progress-circular indeterminate size="35" width="4" />
          <v-btn text small @click="handleLoading">Loading to false</v-btn>
        </v-row>
      </v-container>
    </template>
    <snackbar />
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { userNavigationItems } from '~/utils/navigation/helpers'
import DrawerNavigation from '~/components/navigation/DrawerNavigation.vue'
import Snackbar from '~/components/general/Snackbar.vue'

import { useStore } from '~/store'
const store = useStore()
export default Vue.extend({
  components: {
    DrawerNavigation,
    Snackbar,
  },
  layout: 'master',
  data() {
    return {
      userNavigationItems,
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isLoading(): any {
      return store.state.general.loading
    },
  },
  methods: {
    handleTheme(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
})
</script>
