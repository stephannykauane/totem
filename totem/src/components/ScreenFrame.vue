<script setup>
import { inject } from 'vue'
import { asset } from '../assets'

defineProps({
  title: { type: Array, default: () => [] },
  subtitle: { type: String, default: '' },
  kicker: { type: String, default: 'TOTEM PROTOCOL'},
  small: { type: Boolean, default: false }, // título menor (telas Quem somos / Contato)
})

const go = inject('go')
</script>

<template>
  <div class="frame">
    <div class="tag">INOVAÇÃO</div>
    <button class="home" @click="go('hub')" aria-label="Início">
      <svg viewBox="0 0 24 24" width="52" height="52" fill="#25829A">
        <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z" />
      </svg>
    </button>

    <div class="kicker">{{ kicker }}</div>
    <h1 class="title" :class="{ small }">
      <span v-for="(line, i) in title" :key="i" :class="{ accent: i > 0 }">{{ line }}</span>
    </h1>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>

    <slot />

    <button class="btn quem" @click="go('quem-somos')">QUEM SOMOS</button>
    <button class="btn contato" @click="go('contato')">CONTATO</button>
    <img class="logo-if" :src="asset('if-logo.png')" alt="Instituto Federal Goiano" />
    <img class="logo-embrapii" :src="asset('embrapii-logo.png')" alt="Embrapii" />
  </div>
</template>

<style scoped>
.frame {
  position: absolute;
  inset: 0;
  background: linear-gradient(#fff 0 50%, #1e687c 50%, #404040 75%, #262626 100%);
  font-family: 'Open Sans Variable', sans-serif;
}
.frame > * { position: absolute; }

.tag { left: 64px; top: 54px; color: #25829a; font: 600 24px 'Open Sans Variable', sans-serif; font-stretch: 75%; }
.home { right: 40px; top: 28px; background: none; border: 0; padding: 0; cursor: pointer; }

.kicker { left: 76px; top: 170px; color: #595959; font: 400 22px 'Titillium Web', sans-serif; }
.title { left: 76px; top: 201px; margin: 0; display: flex; flex-direction: column; color: #595959; font: 700 58px/1.2 'Titillium Web', sans-serif; }
.title.small { font-size: 53.8px; }
.title .accent { color: #25829a; }
.subtitle { left: 76px; top: 352px; margin: 0; color: #595959; white-space: pre-line; font: 600 22px 'Open Sans Variable', sans-serif; font-stretch: 75%; }

.btn { top: 1517px; width: 220px; height: 88px; color: #fff; cursor: pointer; font: 600 28px 'Open Sans Variable', sans-serif; font-stretch: 75%; border: 2px solid rgba(255, 255, 255, 0.55); border-radius: 20px; }
.quem { left: 226px; background: rgba(255, 255, 255, 0.2); }
.contato { left: 634px; background: linear-gradient(135deg, rgba(255,255,255,.6), rgba(255,255,255,0)); }
.btn:active { filter: brightness(0.85); }

.logo-if { left: 597px; top: 1752px; width: 286px; }
.logo-embrapii { left: 905px; top: 1725px; width: 110px; }
</style>
