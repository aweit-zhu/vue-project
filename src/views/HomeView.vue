<script setup lang="ts">
import { ref } from 'vue'
import CounterView from '@/views/CounterView.vue'
import AboutView from '../views/AboutView.vue'
const currentComponent = ref(CounterView)
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
    <div class="m-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus, itaque sunt
      reprehenderit quos obcaecati cum, commodi dignissimos accusantium nisi, eos incidunt assumenda
      fugiat ut explicabo. Impedit reiciendis quas molestiae! Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Repellendus, eos aliquid? Ducimus voluptatum assumenda id in
      animi tempore voluptate ab deleniti error harum, ullam non odit reiciendis accusamus
      accusantium libero. Quia cumque omnis quod similique necessitatibus voluptas. Exercitationem
      et illo aliquam qui? Quisquam deserunt minus fuga doloremque, pariatur dolores ipsa illum
      voluptates vitae officiis, suscipit neque cupiditate, quos eum maiores. Modi deleniti nobis
      minima optio dolores velit est ullam impedit consectetur sit iste perspiciatis accusantium
      tempore, tempora quos dolore dicta placeat? Error ipsum commodi impedit magni fugit delectus
      maiores velit? Consectetur a architecto eius aut natus quidem magni maxime vero in nulla
      reiciendis mollitia quia labore dolore, facere voluptates, porro quod harum soluta doloremque
      amet totam nisi? Consectetur, provident incidunt. Labore repellendus incidunt debitis deleniti
      dolorem corporis tempora obcaecati earum, consectetur molestias pariatur qui quo? Esse laborum
      qui dolore dignissimos ipsa commodi. Laboriosam minima, pariatur numquam recusandae nobis est
      enim. Nulla beatae dolorum delectus modi ut dignissimos voluptatibus mollitia numquam hic
      distinctio, repellendus soluta voluptates nam. Esse commodi id vel consequuntur quisquam
      expedita, explicabo iste laborum nesciunt. Qui, maiores eius? Quisquam doloribus, repellendus
    </div>
  </main>
</template>
