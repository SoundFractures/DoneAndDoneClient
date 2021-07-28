<template>
  <v-app>
    <v-app-bar fixed app>
      <link-button text="Home" to="/" />
      <v-spacer />
      <link-button text="Sign in" to="/auth/login" />
      <link-button text="Register" to="/auth/register" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import LinkButton from '~/components/navigation/LinkButton.vue'
export default Vue.extend({
  auth: 'guest',
  components: {
    LinkButton,
  },
  data() {
    return {
      value: 'recents' as string,
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
