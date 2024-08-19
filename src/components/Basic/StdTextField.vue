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
import type { Validator } from '@/models/Validator'
import { useValidators } from '@/stores/stores'
import { defineProps, onMounted, onUnmounted, ref, watch } from 'vue'

const { printValidators, addValidator, removeValidator, validate } = useValidators()

const props = defineProps<{
  modelValue: string
  validators: Validator[]
  validatorKeys: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', value: string): void
}>()

const errorMessage = ref<string>('')
const input = ref<HTMLInputElement | null>(null)
const internalValue = ref<string>(props.modelValue)
const isValid = ref<boolean>(true)

function doValidate() {
  isValid.value = true
  for (const validator of props.validators) {
    validate(validator)
    if (!validator.isValid) {
      isValid.value = false
      errorMessage.value = validator.message
      return
    }
  }
}

function onFocus() {
  if (input.value) {
    input.value.select()
  }
}

function onBlur() {
  emit('blur', internalValue.value)
  doValidate()
}

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  }
)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
  doValidate()
})

onMounted(() => {
  props.validators.forEach((validator: Validator) => {
    validator.keys = props.validatorKeys
    addValidator(validator)
  })
  printValidators()
})

onUnmounted(() => {
  props.validators.forEach((validator: Validator) => {
    removeValidator(validator)
  })
  printValidators()
})
</script>
