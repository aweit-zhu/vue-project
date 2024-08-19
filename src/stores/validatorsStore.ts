import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Validator {
  message: string
  fn: () => boolean
  isValid?: boolean
}

export const useValidators = defineStore('validators', () => {
  const validatorGroups = ref<
    {
      keys: string[]
      validators: Validator[]
    }[]
  >([])

  // Adds a validator to the appropriate group or creates a new group if needed
  function addValidator(keys: string[], validator: Validator) {
    const group = validatorGroups.value.find((v) => arraysEqual(v.keys, keys))
    if (group) {
      group.validators.push(validator)
    } else {
      validatorGroups.value.push({
        keys: keys,
        validators: [validator]
      })
    }
  }

  // Removes a validator from its group based on the keys
  function removeValidator(keys: string[]) {
    // Find the group of validators that matches the provided keys
    const groupIndex = validatorGroups.value.findIndex((v) => arraysEqual(v.keys, keys))

    // If the group is found, remove it from the validatorGroups array
    if (groupIndex >= 0) {
      validatorGroups.value.splice(groupIndex, 1)
    }
  }

  // Validates a single validator
  function validate(keys: string[]) {
    const group = validatorGroups.value.find((v) => arraysEqual(v.keys, keys))
    if (group) {
      group.validators.forEach((validator) => {
        validator.isValid = validator.fn()
      })
    }
  }

  // Checks if all validators for a given key are valid
  function isValid(key: string): boolean {
    return validatorGroups.value.every((group) =>
      group.keys.includes(key) ? group.validators.every((v) => v.isValid !== false) : true
    )
  }

  // Returns the first error message for a given key, or an empty string if valid
  function getFirstErrorMessage(key: string): string {
    for (const group of validatorGroups.value) {
      if (group.keys.includes(key)) {
        const invalidValidator = group.validators.find((v) => v.isValid === false)
        if (invalidValidator) {
          return invalidValidator.message
        }
      }
    }
    return ''
  }

  function getFirstErrorMessageByKeys(keys: string[]): string {
    validate(keys)
    for (const group of validatorGroups.value) {
      // Check if the group's keys match the provided keys
      if (arraysEqual(group.keys, keys)) {
        // Find the first invalid validator
        const invalidValidator = group.validators.find((v) => v.isValid === false)
        // If found, return the error message
        if (invalidValidator) {
          return invalidValidator.message
        }
      }
    }
    // If no invalid validator is found, return an empty string
    return ''
  }

  // Utility function to check if two arrays are equal
  function arraysEqual(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false
    return arr1.every((val, index) => val === arr2[index])
  }

  // Utility function to print all validators (for debugging)
  function printValidators() {
    validatorGroups.value.forEach((group) => {
      //console.log('Group keys:', group.keys)
      group.validators.forEach((v) => {
        // console.log('Validator:', v)
      })
    })
  }

  return {
    validatorGroups,
    addValidator,
    removeValidator,
    isValid,
    validate,
    getFirstErrorMessage,
    getFirstErrorMessageByKeys,
    printValidators
  }
})
