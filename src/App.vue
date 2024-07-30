<template>
  <div class="">
    <RouterView />
    <ErrorComponent />
  </div>
</template>
<script setup lang="ts">
import ErrorComponent from './components/ErrorComponent.vue'
</script>
