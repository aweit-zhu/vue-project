export interface Validator {
  keys: string[]
  message: string
  fn: (val: string) => boolean
  isValid?: boolean
}
