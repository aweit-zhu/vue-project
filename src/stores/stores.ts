import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo } from '@/models/Login'
import { useRouter } from 'vue-router'
import type { Validator } from '@/models/Validator'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<UserInfo | null>(null)
    const router = useRouter()
    function setUser(u: UserInfo) {
      user.value = u
    }
    function logout() {
      user.value = null
      router.push('/login')
    }
    function setMenuOpen(open: boolean) {
      if (user.value) {
        user.value.menuOpen = open
      }
    }
    return { user, setUser, logout, setMenuOpen }
  },
  {
    persist: true
  }
)

export const useErrorStore = defineStore(
  'error',
  () => {
    const error = ref<string | undefined | unknown>(undefined)

    function setError(message: unknown) {
      error.value = message
    }

    function clearError() {
      error.value = undefined
    }
    return { error, setError, clearError }
  },
  {
    persist: true
  }
)

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref<boolean>(false)
  function startLoading() {
    loading.value = true
  }
  function stopLoading() {
    loading.value = false
  }
  return { loading, startLoading, stopLoading }
})

export const useValidators = defineStore(
  'validators',
  () => {
    const validators = ref<Validator[]>([])

    function addValidator(validator: Validator) {
      if (validators.value.findIndex((v) => arraysEqual(v.keys, validator.keys)) < 0) {
        validators.value.push(validator)
      }
    }

    function removeValidator(validator: Validator) {
      const index = validators.value.findIndex((v) => arraysEqual(v.keys, validator.keys))
      if (index >= 0) {
        validators.value.splice(index, 1)
      }
    }

    function validate(validator: Validator, value: string) {
      const { fn } = validator
      validator.isValid = fn(value)
    }

    function isValid(key: string): boolean {
      return validators.value.findIndex((v) => v.keys.includes(key) && v.isValid == false) >= 0
    }

    function arraysEqual(arr1: string[], arr2: string[]): boolean {
      if (arr1.length !== arr2.length) return false
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
      }
      return true
    }

    function printValidators() {
      validators.value.forEach((v) => console.log(v))
    }

    return { validators, addValidator, removeValidator, isValid, validate, printValidators }
  },
  {
    persist: true
  }
)
