<script setup>
import { computed, inject } from 'vue'
import ScreenFrame from './ScreenFrame.vue'
import CropImage from './CropImage.vue'

const props = defineProps({ screen: { type: Object, required: true } })
const go = inject('go')

// text: string (parágrafos separados por linha em branco) ou array de
// parágrafos e números (um número = espaço vazio em px, para abrir lugar às imagens)
const items = computed(() => {
  const t = props.screen.text
  if (!t) return []
  return Array.isArray(t) ? t : t.split('\n\n')
})

// **negrito** dentro dos textos
function parts(str) {
  return str.split('**').map((t, i) => ({ t, b: i % 2 === 1 }))
}
</script>

<template>
  <ScreenFrame :title="screen.title" :subtitle="screen.subtitle">
    <div class="card" :style="{ backgroundImage: `url(${screen.background})`, backgroundPosition: screen.bgPosition || 'center' }" />

    <div class="panel">
      <button class="close" @click="go(screen.back)" aria-label="Fechar">
        <svg viewBox="0 0 24 24" width="54" height="54">
          <circle cx="12" cy="12" r="12" fill="#404040" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.4" stroke-linecap="round" />
        </svg>
      </button>

      <h2 class="heading">{{ screen.heading }}</h2>
      <p v-if="screen.subheading" class="subheading">{{ screen.subheading }}</p>

      <div class="body">
        <CropImage v-if="screen.floatImage" float v-bind="screen.floatImage" />
        <template v-for="(it, i) in items" :key="i">
          <div v-if="typeof it === 'number'" :style="{ height: it + 'px' }" />
          <p v-else>
            <template v-for="(p, j) in parts(it)" :key="j">
              <strong v-if="p.b">{{ p.t }}</strong><template v-else>{{ p.t }}</template>
            </template>
          </p>
        </template>
        <ul v-if="screen.bullets">
          <li v-for="b in screen.bullets" :key="b">{{ b }}</li>
        </ul>
      </div>

      <div v-if="screen.prevPage || screen.nextPage" class="arrows">
        <button v-if="screen.prevPage" @click="go(screen.prevPage)" aria-label="Anterior">
          <svg viewBox="0 0 24 24" width="39" height="39"><path d="M22 2 2 12l20 10z" fill="#404040" /></svg>
        </button>
        <button v-if="screen.nextPage" @click="go(screen.nextPage)" aria-label="Próxima">
          <svg viewBox="0 0 24 24" width="39" height="39"><path d="M2 2l20 10L2 22z" fill="#404040" /></svg>
        </button>
      </div>
    </div>

    <!-- imagens do cartão: posições em px do canvas (x, y, w, h) -->
    <template v-for="(im, i) in screen.images" :key="i">
      <CropImage :src="im.src" :x="im.x" :y="im.y" :w="im.w" :h="im.h" :crop="im.crop" />
      <p v-if="im.caption" class="caption" :style="{ left: im.x + 'px', top: im.y + im.h + 4 + 'px', width: im.w + 'px' }">
        {{ im.caption }}
      </p>
    </template>
  </ScreenFrame>
</template>

<style scoped>
.card { position: absolute; left: 64px; top: 484px; width: 953px; height: 953px; background-size: cover; }

.panel {
  position: absolute; left: 160px; top: 617px; width: 760px; height: 699px;
  box-sizing: border-box; padding: 6px 12px;
  border-radius: 56px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background: rgba(235, 235, 233, 0.9);
  color: #404040;
  font-family: 'Open Sans Variable', sans-serif;
  font-stretch: 75%;
}

.close { position: absolute; right: 3px; top: 17px; background: none; border: 0; padding: 0; cursor: pointer; }

.heading { margin: 0; text-align: center; font-size: 28px; line-height: 1.2; font-weight: 600; }
.subheading { margin: 0; text-align: center; font-size: 20px; line-height: 1.2; font-weight: 300; }

.body { margin-top: 29px; font-size: 24.65px; line-height: 1.2; font-weight: 300; }
.body p { margin: 0 0 29px; }
.body strong { font-weight: 700; }
.body ul { margin: 0; padding-left: 25px; }

.arrows { position: absolute; right: 8px; bottom: 12px; display: flex; gap: 6px; }
.arrows button { background: none; border: 0; padding: 12px; cursor: pointer; }
.arrows button:active { opacity: 0.6; }

.caption { position: absolute; margin: 0; text-align: center; color: #404040; font: 300 20px/1.2 'Open Sans Variable', sans-serif; font-stretch: 75%; }
</style>
