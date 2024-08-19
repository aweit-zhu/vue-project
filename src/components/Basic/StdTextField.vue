<template>
  <div class="relative">
    <input
      type="text"
      v-model="internalValue"
      @focus="onFocus"
      @blur="onBlur"
      ref="input"
      class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      :class="{ 'border-red-500': !isValid, 'border-gray-300': isValid }"
    />
    <div
      v-if="!isValid"
      class="absolute top-full left-0 mt-1 p-2 bg-red-500 text-white text-sm rounded"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useValidators, type Validator } from '@/stores/validators'
import { defineProps, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  validatorKeys: string[]
  validators: Validator[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', value: string): void
}>()

const errorMessage = ref<string>('')
const input = ref<HTMLInputElement | null>(null)
const internalValue = ref<string>(props.modelValue)
const isValid = ref<boolean>(true)

const { addValidator, removeValidator, getFirstErrorMessageByKeys } = useValidators()

function validate() {
  errorMessage.value = getFirstErrorMessageByKeys(props.validatorKeys)
}

watch(errorMessage, (newValue) => {
  if (newValue !== '') {
    isValid.value = false
  } else {
    isValid.value = true
  }
})

function onFocus() {
  if (input.value) {
    input.value.select()
  }
}

function onBlur() {
  emit('blur', internalValue.value)
  validate()
}

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  }
)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
  validate()
})

onMounted(() => {
  props.validators.forEach((validator: Validator) => {
    addValidator(props.validatorKeys, validator)
  })
})

onUnmounted(() => {
  removeValidator(props.validatorKeys)
})
</script>
