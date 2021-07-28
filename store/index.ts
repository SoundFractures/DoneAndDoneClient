import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import {
  GeneralModule as general,
  Store as GeneralStore,
  State as GeneralState,
  MutationTypes as GeneralMutationTypes,
} from '~/store/modules/general/index'

export type State = {
  general: GeneralState
}

export type Store = GeneralStore<Pick<State, 'general'>>
//   & DomainStore<Pick<State, 'domain'>>

Vue.use(Vuex)
export const store = new Vuex.Store<State>({
  plugins: [createLogger()],
  modules: { general },
})

export function useStore(): Store {
  return store as Store
}

export const Mutations = {
  general: GeneralMutationTypes,
}
