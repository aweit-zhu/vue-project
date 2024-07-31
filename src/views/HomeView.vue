<script setup lang="ts">
import { ApiEndpoints } from '@/api/endpoints'
import { get } from '@/api/httpService'
import PictureCard from '@/components/PictureCard.vue'
import { onMounted, ref } from 'vue'

export interface Picture {
  id: string
  imgSrc: string
  title: string
  subTitle: string
  article: string
}

const pictures = ref<Picture[]>([])

onMounted(async () => {
  const response = await get<Picture[]>(ApiEndpoints.GETPICTURES)
  pictures.value = response.data
})
</script>

<template>
  <main class="flex justify-center">
    <div class="flex flex-row">
      <div class="mr-1 h-full">
        <PictureCard
          v-if="pictures.length > 0"
          :id="pictures[0].id"
          :imgSrc="pictures[0].imgSrc"
          :title="pictures[0].title"
          :subTitle="pictures[0].subTitle"
          width="40rem"
          height="24rem"
          titleSize="0.875rem"
          subTitleSize="0.875rem"
        ></PictureCard>
      </div>
      <div class="flex-1 flex flex-col items-stretch justify-between">
        <PictureCard
          v-if="pictures.length > 1"
          :id="pictures[1].id"
          :imgSrc="pictures[1].imgSrc"
          :title="pictures[1].title"
          width="18rem"
          height="7.5rem"
          titleSize="0.875rem"
        ></PictureCard>
        <PictureCard
          v-if="pictures.length > 2"
          :id="pictures[2].id"
          :imgSrc="pictures[2].imgSrc"
          :title="pictures[2].title"
          width="18rem"
          height="7.5rem"
          titleSize="0.875rem"
        ></PictureCard>
        <PictureCard
          v-if="pictures.length > 3"
          :id="pictures[3].id"
          :imgSrc="pictures[3].imgSrc"
          :title="pictures[3].title"
          width="18rem"
          height="7.5rem"
          titleSize="0.875rem"
        ></PictureCard>
      </div>
    </div>
  </main>
</template>
