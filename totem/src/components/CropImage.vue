<script setup>
import { computed } from 'vue'

// Mostra uma imagem recortada (crop = [esquerda, topo, direita, base], de 0 a 1)
// na posição absoluta x, y e no tamanho w × h (px do canvas).
const props = defineProps({
  src: { type: String, required: true },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
  crop: { type: Array, default: () => [0, 0, 0, 0] },
  float: { type: Boolean, default: false }, // true = flutua à esquerda do texto
})

const imgStyle = computed(() => {
  const [l, t, r, b] = props.crop
  const kw = 1 - l - r
  const kh = 1 - t - b
  return {
    position: 'absolute',
    width: `${100 / kw}%`,
    height: `${100 / kh}%`,
    left: `${(-l / kw) * 100}%`,
    top: `${(-t / kh) * 100}%`,
  }
})
</script>

<template>
  <div class="crop" :class="{ float }" :style="{ left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' }">
    <img :src="src" :style="imgStyle" draggable="false" alt="" />
  </div>
</template>

<style scoped>
.crop { position: absolute; overflow: hidden; }
.crop.float { position: relative; float: left; left: auto; top: auto; margin: 0 16px 6px 0; }
img { display: block; user-select: none; }
</style>
