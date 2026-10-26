<script setup>
import ScreenFrame from './ScreenFrame.vue'
import CropImage from './CropImage.vue'

defineProps({ screen: { type: Object, required: true } })
</script>

<template>
  <ScreenFrame :title="screen.title" :subtitle="screen.subtitle" small>
    <template v-for="it in screen.items" :key="it.text">
      <CropImage :src="it.icon" :x="it.x" :y="it.y" :w="69" :h="69" :crop="it.crop" />
      <p class="item" :style="{ left: it.x + 85 + 'px', top: it.y + 19 + 'px' }">{{ it.text }}</p>
    </template>
  </ScreenFrame>
</template>

<style scoped>
.item { position: absolute; margin: 0; white-space: nowrap; color: #000; font: 400 22.4px/1.2 'Titillium Web', sans-serif; }
</style>
