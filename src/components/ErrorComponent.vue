<script setup lang="ts">
import { useErrorStore } from '@/stores/stores'

const errorStore = useErrorStore()
</script>
<template>
  <div v-if="errorStore.error" class="error-display">
    <p class="m-2">{{ errorStore.error }}</p>
    <button @click="errorStore.clearError()" class="absolute top-0 right-0 mx-2 font-bold">
      X
    </button>
  </div>
</template>
<style scoped>
.error-display {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px 20px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
}
</style>
