<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCounter } from '../composables/useCounter'
const { count, increment, decrement } = useCounter()
const { count: count2, increment: increment2, decrement: decrement2 } = useCounter()

const age = ref(1)
watch(age, (newVal)=> {
  console.log("ref-age:", newVal)
})

const pointRef = ref({idx: 0, b:0})
watch(pointRef, (newVal)=>{
  console.log("ref-pointref:", newVal)
},{ deep: true })
</script>

<template>
 
  <div class="flex flex-row justify-center">
    <div class="mx-auto flex flex-col w-1/2 h-52">
      <div class="my-2 h-40 flex flex-row justify-center items-center">
        <p >Count: {{ count }}</p>
      </div>
      <div class="flex flex-row justify-center">
        <button @click="increment" class="btn-primary">Increment</button>
        <button @click="decrement" class="btn-primary bg-red-400">Decrement</button>
      </div>
    </div>
    <div class="mx-auto flex flex-col w-1/2 h-52">
      <div class="my-2 h-40 flex flex-row justify-center items-center">
        <p >Count: {{ count2 }}</p>
      </div>
      <div class="flex flex-row justify-center">
        <button @click="increment2" class="btn-primary">Increment</button>
        <button @click="decrement2" class="btn-primary bg-red-400">Decrement</button>
      </div>
    </div>
    <div>
      {{ age}}
      <button @click="()=> age++" class="btn-primary bg-red-400">Add</button>
    </div>
    <div>
      {{ pointRef.idx }}
      {{ pointRef.b }}
      <button @click="()=> pointRef.idx++" class="btn-primary bg-red-400">Add</button>
    </div>
  </div>
</template>
