<template>
  <StdButton btnName="..." @click="openModal" class="self-end mb-2"></StdButton>
  <Teleport to="body">
    <div
      v-if="open"
      class="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-1/3">
        <!-- Header -->
        <div class="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 class="text-lg font-semibold">Modal Header</h2>
          <button @click="closeModal" class="text-white">&times;</button>
        </div>
        <!-- Body -->
        <div class="p-5">
          <StdTextField fieldName="用戶" v-model="userId" class="self-center w-full"></StdTextField>
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

const open = ref<boolean>(false)

const userId = ref<string>('cbc')

const emit = defineEmits<{
  (e: 'setUserId', userId: string): void
}>()

const openModal = () => {
  open.value = true
}

const closeModal = () => {
  open.value = false
}

const remove = () => {
  userId.value = ''
}

const confirmAction = () => {
  emit('setUserId', userId.value)
  closeModal()
}
</script>
