import Vuex from 'vuex'
import general from '~/store/general'

export const store = new Vuex.Store({
  modules: {
    general,
  },
})
