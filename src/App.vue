<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid'
import RouterLinkWithDropDownList, { type Menu } from './components/RouterLinkWithDropDownList.vue'
import { key1 } from './constants/injectionKeys'
const mode = ref(import.meta.env.MODE)
const productMenuList: Menu[] = [
  { name: 'Item1', desc: 'item1', icon: PaperAirplaneIcon, iconClass: 'text-blue-600' }
]
provide(key1, mode)
</script>

<template>
  <header class="flex flex-row items-center sticky top-0 justify-center shadow-lg h-12">
    <img alt="Vue logo" class="m-1" src="@/assets/logo.svg" width="24" height="24" />
    <nav class="flex-1 text-center">
      <RouterLinkWithDropDownList :title="'Product'" :list="productMenuList" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/hello">Hello</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
    <div class="font-bold m-1 text-red-500">{{ mode }}</div>
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
