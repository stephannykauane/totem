<script setup>
import { inject } from 'vue'
import ScreenFrame from './ScreenFrame.vue'
import { asset } from '../assets'

defineProps({ screen: { type: Object, required: true } })
const go = inject('go')

// áreas tocáveis do prato (px do canvas)
const areas = [
  { to: 'pecuaria', d: 'M630 1269 C639 1268 648 1268 657 1266 C664 1265 670 1263 677 1261 C684 1259 692 1257 700 1256 C709 1254 718 1254 727 1253 C734 1252 740 1250 747 1249 C769 1246 751 1250 764 1247 C766 1245 768 1244 770 1243 C784 1238 779 1243 786 1238 C787 1237 787 1237 787 1236 L875 1128 L889 1071 L873 1023 L829 970 L808 966 L793 979 L731 990 L606 1011 L561 984 L519 998 L502 1044 L445 1079 L435 1105 L442 1162 L519 1222 L541 1265 L623 1270 Z' },
  { to: 'pomar', d: 'M153 481 C150 489 147 497 144 504 C143 507 139 510 138 513 C137 519 138 524 138 530 L138 651 L164 804 L254 775 L401 746 L401 499 L360 481 Z' },
  { to: 'indoor', d: 'M448 902 L533 836 L707 816 L783 827 L806 891 L791 975 L623 995 L563 974 L512 1009 L481 927 Z' },
  { to: 'digital', d: 'M502 1276 L274 1242 L214 1177 L206 1138 L209 1102 L233 965 L291 900 L374 891 L441 898 L488 944 L508 1014 L468 1057 L423 1103 L432 1167 L490 1228 L501 1280 L457 1272 Z' },
]
</script>

<template>
  <ScreenFrame :title="screen.title" :subtitle="screen.subtitle">
    <img class="plate" :src="screen.image" alt="Prato com carne, arroz, feijão, salada e suco" />
    <svg class="hotspots" viewBox="0 0 1080 1922">
      <path v-for="a in areas" :key="a.to" :d="a.d" @click="go(a.to)" />
    </svg>
  </ScreenFrame>
</template>

<style scoped>
.plate { position: absolute; left: 64px; top: 484px; width: 953px; height: 953px; }
.hotspots { position: absolute; left: 0; top: 0; width: 1080px; height: 1922px; pointer-events: none; }
.hotspots path { fill: transparent; pointer-events: all; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.hotspots path:active { fill: rgba(255, 255, 255, 0.28); }
</style>
