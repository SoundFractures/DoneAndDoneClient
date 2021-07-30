<template>
  <v-snackbar
    v-model="show"
    bottom
    elevation="0"
    :light="!$vuetify.theme.dark"
    :timeout="snackbar.timeout"
    content-class="ma-0 pa-0"
    class="ma-0 pa-0"
  >
    <v-alert
      elevation="4"
      :color="snackbar.type"
      dense
      :type="snackbar.type"
      class="ma-0 pa-md-3 pa-xs-2"
    >
      {{ snackbar.message }}
    </v-alert>
  </v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue'
import { useStore, Mutations } from '~/store'
const store = useStore()
export default Vue.extend({
  data() {
    return {
      show: false as boolean,
    }
  },
  computed: {
    snackbar() {
      return store.state.general.snackbar
    },
  },
  created() {
    store.subscribe((mutation) => {
      if (mutation.type === Mutations.general.SET_SNACKBAR) {
        this.show = true
      }
    })
  },
  methods: {
    handleDrawer(): void {
      store.commit(Mutations.general.SET_DRAWER, true)
    },
  },
})
</script>
