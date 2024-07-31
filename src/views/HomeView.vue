<script setup lang="ts">
import { ApiEndpoints } from '@/api/endpoints'
import { get } from '@/api/httpService'
import PictureCard from '@/components/PictureCard.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
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
  console.log(pictures)
})

const router = useRouter()

function handleClick(id: string) {
  console.log('Picture clicked with id:', id)
  router.push(`/article/${id}`)
}
</script>

<template>
  <main class="flex flex-row">
    <div class="flex flex-col justify-center items-center" style="width: 54rem">
      <!-- 主要新聞區塊 -->
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
            @click="handleClick"
          ></PictureCard>
        </div>
        <div class="flex-1 flex flex-col items-stretch justify-between">
          <PictureCard
            v-if="pictures.length > 1"
            :id="pictures[1].id"
            :imgSrc="pictures[1].imgSrc"
            :title="pictures[1].title"
            width="14rem"
            height="7.5rem"
            titleSize="0.875rem"
            @click="handleClick"
          ></PictureCard>
          <PictureCard
            v-if="pictures.length > 2"
            :id="pictures[2].id"
            :imgSrc="pictures[2].imgSrc"
            :title="pictures[2].title"
            width="14rem"
            height="7.5rem"
            titleSize="0.875rem"
            @click="handleClick"
          ></PictureCard>
          <PictureCard
            v-if="pictures.length > 3"
            :id="pictures[3].id"
            :imgSrc="pictures[3].imgSrc"
            :title="pictures[3].title"
            width="14rem"
            height="7.5rem"
            titleSize="0.875rem"
            @click="handleClick"
          ></PictureCard>
        </div>
      </div>
      <!-- 新聞區塊 -->
      <div id="news" class="mt-3 w-full rounded-lg" style="width: 54rem">
        <div class="flex flex-row my-2" v-for="n in pictures?.length" :key="n">
          <PictureCard
            v-if="pictures.length > 0"
            :id="pictures[n - 1].id"
            :imgSrc="pictures[n - 1].imgSrc"
            :title="pictures[n - 1].title"
            width="18rem"
            height="7.5rem"
            titleSize="0.875rem"
            @click="handleClick"
            class="w-32 me-2"
          ></PictureCard>
          <div class="flex-1 truncate-text">
            {{ pictures[n - 1].article }}
          </div>
        </div>
      </div>
    </div>
    <!-- 右邊資訊 -->
    <div class="mx-2 flex-shrink-0 flex-grow">
      <!-- 頭條新聞 -->
      <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
        <p class="text-xl font-bold mb-4 text-blue-700">頭條新聞</p>
        <ul class="list-disc pl-6 space-y-2">
          <li class="hover:text-blue-500">對手突棄賽 謝淑薇女雙晉8強</li>
          <li class="hover:text-blue-500">奧運金牌價值曝光 變賣貴100倍</li>
          <li class="hover:text-blue-500">FILA全館3折起 顯瘦涼鞋免千元</li>
          <li class="hover:text-blue-500">運動倦怠？5招快速找回蜜月期</li>
          <li class="hover:text-blue-500">體操天后領軍 美國女團奪金牌</li>
          <li class="hover:text-blue-500">道奇再度補強 交易來弗萊赫提</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.truncate-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
