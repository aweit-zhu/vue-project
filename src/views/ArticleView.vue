<script setup lang="ts">
const props = defineProps<{
  id: number
}>()
</script>
<template>
  <div>{{ props.id }}</div>
</template>
