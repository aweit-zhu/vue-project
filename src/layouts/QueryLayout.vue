<script setup lang="ts">
interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'XXX查詢頁面'
})
</script>
<template>
  <div class="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
    <p class="m-2 font-bold">{{ props.title }}</p>
    <div class="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm">
      <slot name="QueryArea"></slot>
    </div>
    <div class="w-full p-4 bg-white border border-gray-300 rounded-md shadow-sm">
      <slot name="GridArea"></slot>
    </div>
  </div>
</template>
