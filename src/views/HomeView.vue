<script setup lang="ts">
import { ref } from 'vue'
import CardTemas from '../components/CardTemas.vue'
import HeaderBar from '../components/HeaderBar.vue'

const dadosCards = ref([
  {
    titulo: 'Desbravando os Planetas',
    texto:
      'O Sistema Solar é uma grande família de planetas e outras coisas que giram ao redor do Sol, como se estivessem dançando no espaço!',
    porcentagem: 0,
    componente: 0,
    textoBotao: 'Iniciar',
    imagem: 'Home/solar-system.png'
  },
  {
    titulo: 'Descobrindo o Universo',
    texto:
      'A astronomia é como um jogo de descobertas no céu, onde podemos aprender sobre estrelas brilhantes, planetas coloridos e até mesmo sobre galáxias distantes.',
    porcentagem: 90,
    componente: 1,
    textoBotao: 'Continuar',
    imagem: 'Home/space-shuttle.png'
  },
  {
    titulo: 'Em Busca das Estrelas',
    texto:
      'As estrelas são como pequenas luzes mágicas no céu noturno, brilhando e nos contando histórias secretas enquanto fazem parte de constelações encantadoras.',
    porcentagem: 12,
    componente: 2,
    textoBotao: 'Continuar',
    imagem: 'Home/falling-star.png'
  }
])
</script>

<template>
  <main class="home-view">
    <HeaderBar />
    <CardTemas
      v-for="(dadosCard, i) in dadosCards"
      :key="i"
      :titulo="dadosCard.titulo"
      :texto="dadosCard.texto"
      :porcentagem-concluida="dadosCard.porcentagem"
      :redirect="dadosCard.componente"
      :textoBotao="dadosCard.textoBotao"
      :imagem="dadosCard.imagem"
    />
  </main>
</template>

<style language="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #7063ff;
  height: calc(100vh);
}
</style>
