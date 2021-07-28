// eg. /app/store/mymodule.ts
import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators'
import { store } from '~/store'
export enum MutationTypes {
  SET_LOADING = 'SET_LOADING',
}
@Module({ name: 'GeneralModule', namespaced: true, dynamic: true, store })
export default class GeneralModule extends VuexModule {
  loading: boolean = false;

  @Mutation
  [MutationTypes.SET_LOADING](value: boolean) {
    this.loading = value
  }

  @Action
  setLoading(value: boolean) {
    this.context.commit(MutationTypes.SET_LOADING, value)
  }

  get getLoading() {
    return this.loading
  }
}
