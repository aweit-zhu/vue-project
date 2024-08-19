<template>
  <QueryLayout title="查詢頁面示範">
    <template v-slot:QueryArea>
      <div>
        <StdTextField
          fieldName="姓名"
          v-model="queryForm.textValue"
          @blur="(val) => console.log(val)"
          class="my-2 w-1/5"
          :validatorKeys="['queryExample', 'name']"
          :validators="[
            {
              message: '第一個字元必須為a',
              fn: () => queryForm.textValue.startsWith('a')
            },
            {
              message: '字元必須大於等於3',
              fn: () => queryForm.textValue.length >= 3
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
import { useErrorStore } from '@/stores/errorStore'
import { useValidators } from '@/stores/validatorsStore'
import { ref } from 'vue'

const queryForm = ref<{
  textValue: string
}>({
  textValue: ''
})

const { getFirstErrorMessage } = useValidators()
const { setError } = useErrorStore()
function submit() {
  const errorMessage = getFirstErrorMessage('queryExample')
  if (errorMessage !== '') {
    setError(errorMessage)
    return true
  }
  alert('成功提交')
}
</script>
