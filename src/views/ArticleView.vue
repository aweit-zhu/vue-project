<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { get } from '@/api/httpService'
import { ApiEndpoints } from '@/api/endpoints'
import PictureCard from '@/components/PictureCard.vue'
import type PictureService from '@/services/Common/PictureService'
import { EnvImport, ImportInfo, BuildMode } from '@/utils/TestExtensions'
import { QueryPicVo, type Picture } from '@/services/Common/models'
const props = defineProps<{
  id: string
}>()

const picture = ref<Picture | null>(null)

const pictureService = EnvImport<PictureService>([
  new ImportInfo(BuildMode.DEV, () => import('@/services/Common/PictureService'))
])

onMounted(async () => {
  const service = await pictureService
  const query: QueryPicVo = {
    id: props.id
  }
  const response = await service.getPictureInfoById(query)
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
