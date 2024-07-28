<script lang="ts" setup>
interface Props {
  name: string
  title: string[]
}

const props = withDefaults(defineProps<Props>(), {
  name: 'hello',
  title: () => ['one', 'two']
})

const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit(payload: { email: string; password: string }) {
    const { email, password } = payload
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email: string, password: string) {
  emit('submit', { email, password })
}
</script>
<template>
  <div>{{ props.name }}</div>
  <div>{{ props.title }}</div>
  <button @click="submitForm('email', 'password')">Submit</button>
</template>
