<script setup lang="ts">
defineProps<{
  btnName: string
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
<template>
  <button
    @click="emit('click')"
    class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  >
    {{ btnName }}
  </button>
</template>
