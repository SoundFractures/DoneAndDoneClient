// import { Plugin } from '@nuxt/types'
import { useStore, Mutations } from '~/store'
import { STATUS_COLOR } from '~/utils/types'
const store = useStore()
export default (ctx) => {
  ctx.$axios.onError((error) => {
    store.commit(Mutations.general.SET_SNACKBAR, {
      message: error.response.data.error,
      type: STATUS_COLOR.error,
      timeout: 5000,
    })

    return Promise.reject(error)
  })
}
