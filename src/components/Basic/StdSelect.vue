<template>
  <div class="flex flex-col items-start">
    <label class="mb-1">{{ fieldName }}</label>
    <select
      v-model="internalValue"
      :name="name"
      class="flex-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
    >
      <option
        v-for="option in options"
        :key="option.display"
        :value="option.value"
        :name="option.display"
        class="w-full"
      >
        {{ option.display }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  options: Array<{
    value: any
    display: string
  }>
  modelValue: string
  name: string
  fieldName: string
  defaultValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const internalValue = ref<string>(props.modelValue)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
})

onMounted(() => {
  internalValue.value = props.defaultValue
})
</script>
