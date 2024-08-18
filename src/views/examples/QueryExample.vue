<template>
  <QueryLayout title="查詢頁面示範">
    <template v-slot:QueryArea>
      <div>
        <StdTextField
          v-model="queryForm.textValue"
          @blur="(val) => console.log(val)"
          class="my-2"
          :validators="[
            {
              keys: ['queryExample', 'name', 'required'],
              message: '第一個字元必須為a',
              fn: (val: string) => val.startsWith('a'),
              isValid: true
            },
            {
              keys: ['queryExample', 'name', 'startwith a'],
              message: '字元必須大於等於3',
              fn: (val: string) => val.length >= 3,
              isValid: true
            }
          ]"
        ></StdTextField>
        <StdButton btnName="按鈕" @click="submit"></StdButton>
      </div>
    </template>
    <template v-slot:GridArea> 查詢結果 </template>
  </QueryLayout>
</template>
<script setup lang="ts">
import QueryLayout from '@/layouts/QueryLayout.vue'
import { useValidators } from '@/stores/stores'
import { ref } from 'vue'

const queryForm = ref<{
  textValue: string
}>({
  textValue: ''
})

const { isValid } = useValidators()

function submit() {
  if (isValid('queryExample')) {
    console.log('有錯誤')
    return true
  }
  console.log('成功提交')
}
</script>
