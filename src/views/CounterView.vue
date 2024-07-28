<script setup lang="ts">
import { useCounter } from '../composables/useCounter'
const { count, increment, decrement } = useCounter()
</script>

<template>
  <div>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment" class="bg-blue-400">Increment</button>
      <button @click="decrement" class="bg-red-400">Decrement</button>
    </div>
  </div>
</template>

<style lang=""></style>
