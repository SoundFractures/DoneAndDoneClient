// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import { Repository } from '~/plugins/repository'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $repository: Repository
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $repository: Repository
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $repository: Repository
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repository: Repository
  }
}
