<script setup lang="ts">
import QueryLayout from '@/layouts/QueryLayout.vue'
</script>
<template>
  <QueryLayout title="查詢頁面示範">
    <template v-slot:QueryArea>
      <div>
        <StdTextField></StdTextField>
        <StdButton btnName="按鈕"></StdButton>
      </div>
    </template>
    <template v-slot:GridArea> 查詢結果 </template>
  </QueryLayout>
</template>
