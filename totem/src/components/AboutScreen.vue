<script setup>
import ScreenFrame from './ScreenFrame.vue'
import CropImage from './CropImage.vue'
import { asset } from '../assets'

defineProps({ screen: { type: Object, required: true } })

// as imagens 41, 42 e 43 são "folhas" com vários gráficos; cada uso recorta uma parte
</script>

<template>
  <ScreenFrame :title="screen.title" small>
    <!-- modelo de fomento à inovação -->
    <CropImage :src="asset('fomento.png')" :x="533" :y="466" :w="526" :h="393" />
    <!-- tabela de responsabilidades -->
    <CropImage :src="asset('fomento2.png')" :x="564" :y="1040" :w="484" :h="302" />

    <!-- cartão Embrapii -->
    <div class="embrapii" />
    <CropImage :src="asset('embrapii-card.png')" :x="249" :y="610" :w="318" :h="311" />

    <!-- cartão Polo de Inovação -->
    <div class="polo">
      <h2>POLO DE INOVAÇÃO</h2>
      <p>{{ screen.polo }}</p>
    </div>

    <!-- requisitos para fomento -->
    <CropImage :src="asset('fomento3.png')" :x="69" :y="1006" :w="446" :h="360" />
  </ScreenFrame>
</template>

<style scoped>
.embrapii { position: absolute; left: 234px; top: 594px; width: 334px; height: 348px; border-radius: 56px; background: #25829a; }
.polo {
  position: absolute; left: 76px; top: 398px; width: 284px; height: 186px; box-sizing: border-box;
  padding: 16px 11px; border-radius: 31px; background: #616283; color: #fff;
}
.polo h2 { margin: 0 0 18px; font: 700 18px/1.2 'Open Sans Variable', sans-serif; font-stretch: 75%; }
.polo p { margin: 0; font: 400 15.7px/1.2 'Open Sans Variable', sans-serif; }
</style>
