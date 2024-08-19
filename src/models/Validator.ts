export interface Validator {
  keys?: string[]
  message: string
  fn: () => boolean
  isValid?: boolean
}
