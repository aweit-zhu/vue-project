<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { get } from '@/api/httpService'
import type { YesNoResponse } from '@/models/YesNoResponse'
import { ApiEndpoints } from '@/api/endpoints'
import HelloAwei from '../components/HelloAwei.vue'
import { key1 } from '@/constants/injectionKeys'

const input = ref<HTMLInputElement | null>(null)

const formData = ref({
  name: '',
  email: '',
  age: null
})
const errors = ref({
  name: '',
  email: '',
  age: ''
})
const responseData = ref<YesNoResponse>()

onMounted(async () => {
  try {
    const res = await get<YesNoResponse>(ApiEndpoints.YES_NO)
    responseData.value = res.data
  } catch (error) {
    responseData.value = undefined
  } finally {
    console.log(responseData)
  }
})

const handleSubmit = () => {
  if (validateForm()) {
    console.log('提交的數據:', formData.value)
    // 在這裡處理提交的數據，例如發送到後端
  }
}

const validateForm = () => {
  errors.value = {
    name: '',
    email: '',
    age: ''
  }

  let isValid = true

  if (!formData.value.name) {
    errors.value.name = '名稱是必填的'
    isValid = false
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!formData.value.email) {
    errors.value.email = '郵箱是必填的'
    isValid = false
  } else if (!emailPattern.test(formData.value.email)) {
    errors.value.email = '無效的郵箱格式'
    isValid = false
  }

  if (formData.value.age === null || formData.value.age === '') {
    errors.value.age = '年齡是必填的'
    isValid = false
  } else if (formData.value.age < 0) {
    errors.value.age = '年齡不能為負數'
    isValid = false
  }

  return isValid
}

const submit = (payload: { email: string; password: string }): void => {
  console.log(payload)
}

const injectKey1 = inject(key1)

const show = ref(true)
</script>

<template>
  <HelloAwei name="Aweit" @submit="submit" />
  {{ injectKey1 }}
  <div id="app">
    <h1>表單雙向綁定和驗證示例</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">名稱:</label>
        <input type="text" id="name" v-model="formData.name" ref="input" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div>
        <label for="email">郵箱:</label>
        <input type="email" id="email" v-model="formData.email" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div>
        <label for="age">年齡:</label>
        <input type="number" id="age" v-model="formData.age" />
        <span v-if="errors.age">{{ errors.age }}</span>
      </div>
      <button type="submit" class=" bg-blue-500 rounded p-2">提交</button>
    </form>
    <div>
      <h2>表單數據:</h2>
      <pre>{{ formData }}</pre>
    </div>
  </div>
  <Teleport to="body">
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </Teleport>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

form div {
  margin-bottom: 10px;
}
form span {
  color: red;
  display: block;
}
</style>
