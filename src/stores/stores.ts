import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo } from '@/models/Login'
import { useRouter } from 'vue-router'

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
