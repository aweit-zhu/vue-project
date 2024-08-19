<template>
  <div class="">
    <RouterView />
    <ErrorComponent
      v-if="errorStore.error"
      :message="errorStore.error"
      @close="errorStore.clearError()"
    />
    <LoadingComponent v-if="loading" />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useErrorStore } from './stores/errorStore'
import { useLoadingStore } from './stores/loadingStore'

const errorStore = useErrorStore() // 方法一、直接操作 useStore 物件
const { loading } = storeToRefs(useLoadingStore()) // 方法二、將 useStore物件，轉成 Ref，這樣可以直接存取 state、getter 資料
</script>
