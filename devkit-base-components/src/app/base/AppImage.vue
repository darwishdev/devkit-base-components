<script setup lang="ts">
import { h, ref, useAttrs } from 'vue';
import Image from 'primevue/image';
import type { ImageProps, ImageSlots } from 'primevue';
const { VITE_FALLBACK_IMAGE_URL: fallbackImage, VITE_BASE_IMAGE_URL: baseImageUrl } = import.meta.env
const props = defineProps<ImageProps & { src: string }>()
const slots = defineSlots<ImageSlots>()
const src = props.src.startsWith("http") ? props.src : `${baseImageUrl}${props.src}`
const attrs = useAttrs();
const imageSrcRef = ref(src);
const renderImage = () => {
  return h(Image, {
    ...attrs, ...props, src: imageSrcRef.value,
    onError: () => imageSrcRef.value = fallbackImage
  }, () => slots)
}
</script>
<template>
  <component :is="renderImage" />
</template>
