<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    imgSrc: string
    width?: string
    height?: string
    title: string
    titleSize: string
    subTitle?: string
    subTitleSize?: string
    id: string
  }>(),
  {
    title: 'title'
  }
)

const emit = defineEmits<{
  (e: 'click', id: string): void
}>()

function handleClick() {
  emit('click', props.id)
}

const backgroundImageStyle = ref({
  backgroundImage: `url(${props.imgSrc})`,
  width: props.width || 'auto',
  height: props.height || 'auto'
})

const titleStyle = ref({
  fontSize: props.titleSize,
  lineHeight: '1.25rem',
  bottom: props.subTitle ? '2.5rem' : '0.75rem'
})
const subTitleStyle = ref({
  fontSize: props.subTitleSize,
  lineHeight: '1.25rem'
})
</script>
<template>
  <div :style="backgroundImageStyle" class="bg-cover relative rounded-lg">
    <div class="absolute bottom-0 w-full h-1/2 black-gradient-bottom rounded-lg">
      <button
        class="text-white font-extrabold absolute left-0 bottom-10 ml-4 hover:underline"
        :style="titleStyle"
        @click="handleClick()"
      >
        {{ props.title }}
      </button>
      <button
        v-if="subTitle"
        class="text-sm text-white font-extrabold absolute left-0 bottom-3 ml-4 hover:underline"
        :style="subTitleStyle"
        @click="handleClick"
      >
        {{ props.subTitle }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.black-gradient-bottom {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}
</style>
