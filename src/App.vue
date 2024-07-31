<template>
  <div class="">
    <RouterView />
    <ErrorComponent />
    <LoadingComponent v-if="loading" />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useLoadingStore } from '@/stores/stores'

const { loading } = storeToRefs(useLoadingStore())
</script>
