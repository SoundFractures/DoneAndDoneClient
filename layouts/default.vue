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
          <v-btn text small @click="handleLoading">Loading to false</v-btn>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import { userNavigationItems } from '~/utils/navigation/helpers'
import DrawerNavigation from '~/components/navigation/DrawerNavigation.vue'

import GeneralModule from '~/store/general'
const store = getModule(GeneralModule)
export default Vue.extend({
  components: {
    DrawerNavigation,
  },
  data() {
    return {
      userNavigationItems,
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    loading() {
      return store.loading
    },
  },
  methods: {
    handleTheme(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    handleLoading(): void {
      store.SET_LOADING(false)
    },
  },
})
</script>
