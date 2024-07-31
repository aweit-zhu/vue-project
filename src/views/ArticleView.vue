<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Picture } from './HomeView.vue'
import { get } from '@/api/httpService'
import { ApiEndpoints } from '@/api/endpoints'
import PictureCard from '@/components/PictureCard.vue'
const props = defineProps<{
  id: string
}>()

const picture = ref<Picture | null>(null)

onMounted(async () => {
  const response = await get<Picture>(`${ApiEndpoints.GETPICTURE}/${props.id}`)
  picture.value = response.data
})
</script>
<template>
  <main class="flex justify-center">
    <div class="flex flex-col justify-center items-center">
      <PictureCard
        v-if="picture != null"
        :id="picture.id"
        :imgSrc="picture.imgSrc"
        :title="picture.title"
        :subTitle="picture.subTitle"
        width="40rem"
        height="24rem"
        titleSize="0.875rem"
        subTitleSize="0.875rem"
      ></PictureCard>
      <div class="mt-2" style="width: 40rem">{{ picture?.article }}</div>
    </div>
  </main>
</template>
