import { ref } from 'vue'
import { defineStore } from 'pinia'

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
