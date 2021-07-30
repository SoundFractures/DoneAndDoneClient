import { Plugin } from '@nuxt/types'
import {
  userRepository,
  UserRepository,
} from '~/utils/repository/UserRepository'

export interface Repository {
  user: UserRepository
}

const repository: Plugin = (ctx, inject) => {
  const repositories = {
    user: userRepository(ctx.$axios),
  }
  inject('repository', repositories)
}

export default repository
