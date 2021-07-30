export enum STATUS_COLOR {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

export type Snackbar = {
  message: string
  type?: STATUS_COLOR
  timeout?: number
}
