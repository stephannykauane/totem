<script setup>
import { inject } from 'vue'
import ScreenFrame from './ScreenFrame.vue'

defineProps({ screen: { type: Object, required: true } })
const go = inject('go')
</script>

<template>
  <ScreenFrame :title="screen.title" :subtitle="screen.subtitle">
    <div class="card">
      <video :src="screen.video" :style="{ objectPosition: screen.videoPosition || 'center' }" autoplay muted loop playsinline disablepictureinpicture />
    </div>

    <button
      v-for="h in screen.hotspots"
      :key="h.to"
      class="plus"
      :style="{ left: h.x + 'px', top: h.y + 'px' }"
      @click="go(h.to)"
      aria-label="Saiba mais"
    >
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round">
        <path d="M12 4v16M4 12h16" />
      </svg>
    </button>
  </ScreenFrame>
</template>

<style scoped>
.card { position: absolute; left: 64px; top: 484px; width: 953px; height: 953px; overflow: hidden; }
.card video { width: 100%; height: 100%; object-fit: cover; display: block; }
.plus {
  position: absolute; width: 84px; height: 84px; margin: -42px 0 0 -42px;
  border: 0; border-radius: 50%; background: rgba(255, 255, 255, 0.9);
  cursor: pointer; display: grid; place-items: center;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6); }
  50% { box-shadow: 0 0 0 18px rgba(255, 255, 255, 0); }
}
</style>
