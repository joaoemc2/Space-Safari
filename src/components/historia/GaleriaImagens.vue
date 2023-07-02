<script setup lang="ts">
import { ref } from 'vue'
import BotaoPequeno from '../shared/BotaoPequeno.vue'

const prop = defineProps<{
  imagens: string[]
}>()

const imgSelecionada = ref<number>(0)

function getImageUrl(name: string) {
  return new URL(`/src/assets/image/${name}`, import.meta.url).href
}

function alterarImagem(direcao: string) {
  if (direcao === 'proximo' && imgSelecionada.value < prop.imagens.length - 1) {
    imgSelecionada.value++
  } else if (direcao === 'anterior' && imgSelecionada.value > 0) {
    imgSelecionada.value--
  }
}
</script>

<template>
  <main class="galeria-container">
    <h3 class="titulo">Galeria</h3>
    <div class="imagem-container">
      <img :src="getImageUrl(imagens[imgSelecionada])" alt="" />
    </div>
    <div class="botoes">
      <BotaoPequeno :texto="'Anterior'" @click="alterarImagem('anterior')" />
      <BotaoPequeno :texto="'Proximo'" @click="alterarImagem('proximo')" />
    </div>
    <div class="origem-container">
      <a class="origem" href="">Origem das imagens: Nasa</a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.galeria-container {
  padding: 32px 16px 32px;
  .titulo {
    color: $cor-primaria;
    text-align: center;
    font-size: $fonte-titulo;
    font-weight: $peso-bold;
    margin-bottom: 16px;
  }
  .imagem-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $cor-primaria;
    border-radius: 30px;
    padding: 8px;
    margin-bottom: 22px;
    img {
      width: 100%;
      border-radius: 24px;
    }
  }
  .botoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .origem-container {
    width: 100%;
    text-align: right;
    margin-top: 4px;
    .origem {
      color: #555;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration: none;
    }
  }
}
</style>
