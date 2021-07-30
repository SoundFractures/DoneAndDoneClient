import {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  Module,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { State as RootState } from '@/store'
import { Snackbar, STATUS_COLOR } from '~/utils/types'

// TYPE | STATE
export type State = {
  loading: boolean
  drawer: boolean
  snackbar: Snackbar
}
// ENUM | MUTATIONS
export enum MutationTypes {
  SET_LOADING = 'SET_LOADING',
  SET_DRAWER = 'SET_DRAWER',
  SET_SNACKBAR = 'SET_SNACKBAR',
}
// ENUM | ACTIONS
export enum ActionTypes {
  setLoading = 'setLoading',
}
// TYPE | GETTERS
export type Getters = {
  isLoading(state: State): boolean
}
// Actual State
const state: State = {
  loading: false,
  drawer: false,
  snackbar: {
    message: '',
    type: STATUS_COLOR.success,
    timeout: 2000,
  },
}

// Mutation contracts
type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void
  [MutationTypes.SET_DRAWER](state: S, payload: boolean): void
  [MutationTypes.SET_SNACKBAR](state: S, payload: Snackbar): void
}

// Define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOADING](state: State, payload: boolean) {
    state.loading = payload
  },
  [MutationTypes.SET_DRAWER](state: State, payload: boolean) {
    state.drawer = payload
  },
  [MutationTypes.SET_SNACKBAR](
    state: State,
    { message, type = STATUS_COLOR.success, timeout = 2000 }: Snackbar
  ) {
    state.snackbar.message = message
    state.snackbar.type = type
    state.snackbar.timeout = timeout
  },
}

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

// Actions contracts
interface Actions {
  [ActionTypes.setLoading](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
}

// Define actions
const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.setLoading]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_LOADING, payload)
  },
}

// getters
const getters: GetterTree<State, RootState> & Getters = {
  isLoading: (state) => {
    return state.loading
  },
}

// setup store type
export type Store<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}

export const GeneralModule: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters,
}
