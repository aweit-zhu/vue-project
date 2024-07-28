<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import LoadingComponent from '../components/LoadingComponent.vue'
import ErrorComponent from '../components/ErrorComponent.vue'

const AsyncComp = defineAsyncComponent({
  loader: () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('模拟加载错误'))
      }, 2000) // 2000ms 延迟
    })
  },
  loadingComponent: LoadingComponent,
  delay: 200,
  errorComponent: ErrorComponent,
  timeout: 3000
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AsyncComp />
  </div>
</template>
