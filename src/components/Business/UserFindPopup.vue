<template>
  <StdButton btnName="..." @click="openModal" class="self-end mb-2"></StdButton>
  <Teleport to="body">
    <div
      v-if="isModalOpen"
      class="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg" style="width: 480px; height: 450px">
        <!-- Header -->
        <div class="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 class="text-lg font-semibold">PPIT_001 用戶查詢</h2>
          <button @click="closeModal" class="text-white">&times;</button>
        </div>
        <!-- Body -->
        <div class="p-5">
          <StdTextField
            fieldName="用戶"
            v-model="userId"
            class="self-center w-full mb-1"
          ></StdTextField>
          <AgGrid
            :rowData="rowData"
            :colDefs="colDefs"
            style="height: 200px"
            @rowDoubleClicked="rowDoubleClicked"
            @rowClicked="rowClicked"
          />
        </div>
        <!-- Action -->
        <div class="flex justify-end p-4 border-t">
          <button
            @click="remove"
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            清除
          </button>
          <button
            @click="confirmAction"
            class="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AgGrid from '@/components/Adv/AdvGrid.vue'
const isModalOpen = ref<boolean>(false)

interface User {
  userId: string
  userName: string
  company: string
}
const rowData = ref<User[]>([
  { userId: 'awei', userName: 'Awei Zhu', company: 'PIC' },
  { userId: 'billy', userName: 'Billy Chen', company: 'MiCron' },
  { userId: 'cathy', userName: 'Cathy Zhang', company: 'MIC' }
])
const colDefs = ref([
  {
    field: 'userId',
    valueGetter: (params: { data: User }) => params.data.userId.toUpperCase(),
    width: 150 // 設置欄位寬度為 150 像素
  },
  {
    field: 'userName',
    width: 150 // 設置欄位寬度為 200 像素
  },
  {
    field: 'company',
    width: 100 // 設置欄位寬度為 150 像素
  }
])
const userId = ref<string>('cbc')

function rowDoubleClicked(user: User) {
  userId.value = user.userId
  confirmAction()
}

function rowClicked(user: User) {
  userId.value = user.userId
}

const emit = defineEmits<{
  (e: 'setUserId', userId: string): void
}>()

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const remove = () => {
  userId.value = ''
}

const confirmAction = () => {
  emit('setUserId', userId.value)
  closeModal()
}
</script>
