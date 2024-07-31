<script setup lang="ts">
import { ApiEndpoints } from '@/api/endpoints'
import type { LoginUserInfo, UserInfo } from '@/models/Login'
import { useLoadingStore, useUserStore } from '@/stores/stores'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, post } from '../api/httpService'
defineProps<{
  error?: string
}>()
const route = useRoute()
const router = useRouter()
const { setUser } = useUserStore()
const loginUserInfo = ref<LoginUserInfo>({ username: '', password: '' })
const { startLoading, stopLoading } = useLoadingStore()
async function doLogin() {
  startLoading()
  const result = await post<any>(ApiEndpoints.LOGIN, loginUserInfo)
  if (result.data.status == 'ok') {
    const userInfo = await get<UserInfo>(ApiEndpoints.GETUSER + result.data.userId)
    const user: UserInfo = userInfo.data
    setUser(user)
    router.push('/')
  }
  stopLoading()
}
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col justify-center items-center border border-black px-4 py-2 rounded-md">
      <form @submit.prevent="doLogin">
        <p class="text-center text-red-600 font-bold">{{ error }}</p>
        <div class="my-2">
          <p class="m-2">Username:</p>
          <input
            type="text"
            v-model="loginUserInfo.username"
            placeholder="username"
            class="border border-black rounded-full px-2 py-1"
          />
        </div>
        <div class="my-2">
          <p class="m-2">Password:</p>
          <input
            type="password"
            v-model="loginUserInfo.password"
            placeholder="password"
            class="border border-black rounded-full px-2 py-1"
          />
        </div>
        <button class="my-2 btn-primary" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
