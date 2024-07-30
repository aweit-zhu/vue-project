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
  <header class="flex flex-row items-center justify-center shadow-lg h-12">
    <img alt="Vue logo" class="m-1" src="@/assets/logo.svg" width="24" height="24" />
    <nav class="flex-1 text-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/hello">Hello</RouterLink>ki
      <RouterLink to="/counter">Counter</RouterLink>
      <a href="/login" v-if="!isLogIn">Login</a>
    </nav>
    <div class="font-bold m-1 text-red-500">{{ mode }}</div>
    <div class="font-bold m-2 text-blue-500">{{ user?.username.toLocaleUpperCase() }}</div>
    <a @click="logout" v-if="isLogIn" class="cursor-pointer mx-2 btn-primary">Logout</a>
  </header>
  <RouterView />
</template>

<style scoped>
nav a {
  margin-left: 4em;
  font-weight: bold;
  position: relative;
}
</style>
