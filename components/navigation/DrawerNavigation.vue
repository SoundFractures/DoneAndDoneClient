<template>
  <v-navigation-drawer
    :value="drawer"
    app
    :permanent="isDesktop"
    :mini-variant="miniDrawer"
    width="200"
    @input="handleDrawer"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>{{ theme + '_mode' }}</v-icon>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    <v-divider class="mx-2" />
    <v-list nav dense>
      <v-list-item v-for="item in items" :key="item.text" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="pa-2">
        <v-row no-gutters justify="center">
          <v-btn v-if="!miniDrawer" block text small @click="handleTheme"
            >Settings</v-btn
          >
          <v-btn v-else icon small @click="handleTheme"
            ><v-icon>settings</v-icon></v-btn
          >
        </v-row>
      </div>
      <v-divider class="mx-2" />
      <div class="pa-2">
        <v-row no-gutters justify="center">
          <v-btn v-if="!miniDrawer" block text small @click="logout"
            >Sign out</v-btn
          >
          <v-btn v-else icon small @click="logout"
            ><v-icon>logout</v-icon></v-btn
          >
        </v-row>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue'
import { useStore, Mutations } from '~/store'
const store = useStore()
export default Vue.extend({
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    miniDrawer(): boolean {
      return this.$vuetify.breakpoint.md
    },
    isDesktop(): boolean {
      return this.$vuetify.breakpoint.mdAndUp
    },
    drawer() {
      return store.state.general.drawer
    },
  },
  methods: {
    handleTheme(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    handleDrawer(value: boolean): void {
      store.commit(Mutations.general.SET_DRAWER, value)
    },
    async logout() {
      await this.$auth.logout('local')
    },
  },
})
</script>
