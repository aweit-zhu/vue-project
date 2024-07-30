<script setup lang="ts">
import { useUserStore } from '@/stores/stores'
import CounterView from '@/views/CounterView.vue'
import { ref } from 'vue'
const currentComponent = ref(CounterView)
const { user } = useUserStore()
</script>

<template>
  <main>
    <!-- <button @click="currentComponent = CounterView" class="mx-1 bg-blue-400">
      Show CounterView
    </button>
    <button @click="currentComponent = AboutView" class="mx-1 bg-blue-400">Show AboutView</button>
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive> -->
    <div>
      {{ user }}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus, itaque sunt
      reprehenderit quos obcaecati cum, commodi dignissimos accusantium nisi, eos incidunt assumenda
      fugiat ut explicabo. Impedit reiciendis quas molestiae! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Repellendus, eos aliquid? Ducimus voluptatum assumenda id in
      animi tempore voluptate ab deleniti error harum, ullam non odit reiciendis accusamus
    </div>
  </main>
</template>
