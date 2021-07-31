const resource: string = 'user'

export const userRepository = ($axios) => ({
  list() {
    return new Promise((resolve, reject) => {
      $axios
        .$get(`/${resource}`)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  },

  find(id: string) {
    return new Promise((resolve, reject) => {
      $axios
        .$get(`/${resource}/${id}`)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  },

  create(payload: { email: string; username: string; password: string }) {
    return new Promise((resolve, reject) => {
      $axios
        .$post(`/auth/register`, payload)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  },

  update(payload, id: string) {
    return new Promise((resolve, reject) => {
      $axios
        .$patch(`/${resource}/${id}`, payload)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  },

  delete(id: string) {
    return new Promise((resolve, reject) => {
      $axios
        .$delete(`/${resource}/${id}`)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  },
})

export type UserRepository = {
  list: () => Promise<any>
  find: (id: string) => Promise<any>
  create: (payload: {
    email: string
    username: string
    password: string
  }) => Promise<any>
  update: (payload, id: string) => Promise<any>
  delete: (id: string) => Promise<any>
}
