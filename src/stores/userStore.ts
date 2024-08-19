import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserInfo } from '@/models/Login'
import { useRouter } from 'vue-router'

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
