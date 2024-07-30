<script setup lang="ts">
import { useUserStore } from '@/stores/stores'
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const mode = ref(import.meta.env.MODE)
const route = useRoute()
const router = useRouter()
const { user, logout } = useUserStore()
const isLogIn = computed<boolean>(() => {
  return user?.userId ? true : false
})
</script>
<template>
  <div class="flex flex-row md:flex-col">
    <div
      class="w-48 h-screen bg-yellow-50 rounded flex flex-col md:w-full md:flex-row items-center justify-center shadow-lg md:h-12 md:mb-2 md:border-none"
    >
      <img alt="Vue logo" class="m-4 md:w-6 md:h-6 w-12 h-12" src="@/assets/logo.svg" />
      <nav
        class="flex flex-col flex-1 justify-start items-start w-full md:w-0 md:flex-row md:justify-center md:items-center"
      >
        <RouterLink to="/" class="mx-2 my-1 md:m-4 hover:text-blue-700">Home</RouterLink>
        <RouterLink to="/about" class="mx-2 my-1 md:m-4 hover:text-blue-700">About</RouterLink>
        <RouterLink to="/hello" class="mx-2 my-1 md:m-4 hover:text-blue-700">Hello</RouterLink>
        <RouterLink to="/counter" class="mx-2 my-1 md:m-4 hover:text-blue-700">Counter</RouterLink>
        <a href="/login" v-if="!isLogIn" class="mx-2 my-1 md:m-4 hover:text-blue-700">Login</a>
      </nav>
      <div class="font-bold m-1 text-red-500">{{ mode }}</div>
      <div class="font-bold m-2 text-blue-500">{{ user?.username.toLocaleUpperCase() }}</div>
      <a @click="logout" v-if="isLogIn" class="cursor-pointer mx-2 btn-primary my-2 md:my-0"
        >Logout</a
      >
    </div>
    <RouterView class="mx-2 py-2 h-screen flex-1 md:mx-8 overflow-auto" />
  </div>
</template>

<style scoped>
nav a {
  font-weight: bold;
  position: relative;
}
</style>
