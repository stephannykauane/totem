<script setup>
import { ref, computed, provide, onMounted, onBeforeUnmount } from 'vue'
import { screens } from './data/screens'
import HubScreen from './components/HubScreen.vue'
import CoverScreen from './components/CoverScreen.vue'
import ContentScreen from './components/ContentScreen.vue'
import AboutScreen from './components/AboutScreen.vue'
import ContactScreen from './components/ContactScreen.vue'

const W = 1080, H = 1922
const current = ref('hub')

provide('go', (id) => {
  if (screens[id]) current.value = id
  else console.warn(`Tela inexistente: ${id}`)
})

const views = {
  hub: HubScreen,
  cover: CoverScreen,
  content: ContentScreen,
  about: AboutScreen,
  contact: ContactScreen,
}
const screen = computed(() => screens[current.value])

const win = ref({ w: innerWidth, h: innerHeight })
const onResize = () => (win.value = { w: innerWidth, h: innerHeight })
const scale = computed(() => Math.min(win.value.w / W, win.value.h / H))
onMounted(() => addEventListener('resize', onResize))
onBeforeUnmount(() => removeEventListener('resize', onResize))
</script>

<template>
  <div class="stage">
    <div
      class="canvas"
      :style="{ width: W + 'px', height: H + 'px', transform: `translate(-50%, -50%) scale(${scale})` }"
    >
      <component v-if="views[screen.type]" :is="views[screen.type]" :key="current" :screen="screen" />
    </div>
  </div>
</template>

<style>
html, body, #app { margin: 0; height: 100%; background: #000; overflow: hidden; }
.stage { position: fixed; inset: 0; }
.canvas { position: absolute; left: 50%; top: 50%; overflow: hidden; background: #fff; }
</style>
