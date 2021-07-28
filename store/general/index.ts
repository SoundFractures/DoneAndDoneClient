// eg. /app/store/mymodule.ts
import { Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class General extends VuexModule {
  drawer: boolean = false
}
