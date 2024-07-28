<template>
  <RouterLink to="">
    <span class="toggleChild" @click="toggleChild"> {{ title }} <ChevronDownIcon /> </span>
    <Transition name="fade">
      <ul
        v-if="isChildVisible"
        class="toggleChild absolute left-1 shadow border rounded-md bg-white"
      >
        <li class="flex flex-row" v-for="item in list">
          <component
            :is="item.icon"
            :class="[item.iconClass, 'self-center', 'flex-shrink-0']"
          ></component>
          <div class="item hover:text-green-700">
            <div>{{ item.name }}</div>
            <div class="text-sm">{{ item.desc }}</div>
          </div>
        </li>
      </ul>
    </Transition>
  </RouterLink>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
  type HTMLAttributes,
  type VNodeProps,
  type FunctionalComponent
} from 'vue'
import { RouterLink } from 'vue-router'
import { Transition } from 'vue'
import { ChevronDownIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid'

export interface Menu {
  name: string
  desc: string
  icon: FunctionalComponent
  iconClass?: string
}

defineProps<{
  title: string
  list: Menu[]
}>()

const isChildVisible = ref(false)

const toggleChild = () => {
  isChildVisible.value = !isChildVisible.value
}

const closeChild = () => {
  isChildVisible.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.toggleChild') && isChildVisible.value) {
    closeChild()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.toggleChild {
  cursor: pointer;
}

.item {
  padding: 8px 16px;
}

.item:hover {
  background-color: #f9f9f9;
}
svg {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
ul li {
  margin: 1em;
  min-width: 12em;
  max-width: 20em;
  text-align: left;
}
</style>
