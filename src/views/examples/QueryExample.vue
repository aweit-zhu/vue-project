<template>
  <QueryLayout title="查詢頁面示範">
    <template v-slot:QueryArea>
      <div class="flex flex-row">
        <div class="flex flex-row">
          <StdTextField
            ref="refName"
            fieldName="姓名"
            v-model="queryForm.textValue"
            @blur="(val) => console.log(val)"
            class="m-2 self-center w-48"
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
          <UserFindPopup @setUserId="setUserId" />
        </div>
        <StdSelect
          field-name="最愛的食物"
          class="m-2 self-center w-48"
          v-model="queryForm.selectValue"
          name="favoriteFood"
          :options="[
            {
              value: '1',
              display: '漢堡'
            },
            {
              value: '2',
              display: '奶茶'
            }
          ]"
          defaultValue="1"
        >
        </StdSelect>
      </div>
      <StdButton btnName="按鈕" @click="submit"></StdButton>
    </template>
    <template v-slot:GridArea> 查詢結果 </template>
  </QueryLayout>
</template>
<script setup lang="ts">
import type StdTextField from '@/components/Basic/StdTextField.vue'
import QueryLayout from '@/layouts/QueryLayout.vue'
import { useErrorStore } from '@/stores/errorStore'
import { useValidators } from '@/stores/validatorsStore'
import { defineAsyncComponent, ref } from 'vue'

const UserFindPopup = defineAsyncComponent(() => import('@/components/Business/UserFindPopup.vue'))

const queryForm = ref<{
  textValue: string
  selectValue: string
}>({
  textValue: '',
  selectValue: ''
})

const { getFirstErrorMessage } = useValidators()
const { setError } = useErrorStore()

const refName = ref<typeof StdTextField>()

function submit() {
  refName.value?.validate()
  const errorMessage = getFirstErrorMessage('queryExample')
  if (errorMessage !== '') {
    setError(errorMessage)
    return true
  }
  alert('成功提交')
  console.log(queryForm)
}

function setUserId(userId: string) {
  queryForm.value.textValue = userId
}
</script>
