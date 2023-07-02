<script setup lang="ts">
import { ref } from 'vue'
import CardTemas from '../components/CardTemas.vue'
import HeaderBar from '../components/HeaderBar.vue'

const dadosCards = ref([
  {
    titulo: 'Desbravando os Planetas',
    texto:
      'O Sistema Solar é uma grande família de planetas e outras coisas que giram ao redor do Sol.',
    passosConcluidos: 2,
    passosTotais: 5,
    componente: 0,
    imagem: 'Home/solar-system.png',
    corTema: 'amarelo'
  },
  {
    titulo: 'Descobrindo o Universo',
    texto:
      'Na astronomia podemos aprender sobre estrelas brilhantes, planetas coloridos e até mesmo sobre galáxias distantes.',
    passosConcluidos: 0,
    passosTotais: 7,
    componente: 1,
    imagem: 'Home/space-shuttle.png',
    corTema: 'vermelho'
  },
  {
    titulo: 'Em Busca das Estrelas',
    texto:
      'As estrelas são como pequenas luzes mágicas no céu noturno, brilhando e nos contando histórias secretas enquanto fazem parte de constelações encantadoras.',
    passosConcluidos: 0,
    passosTotais: 8,
    componente: 2,
    imagem: 'Home/falling-star.png',
    corTema: 'azul'
  }
])
</script>

<template>
  <main class="home-container">
    <HeaderBar />
    <h1 class="titulo">Vamos Começar!</h1>
    <ul class="cards">
      <li class="card" v-for="(dadosCard, i) in dadosCards" :key="i">
        <CardTemas
          :titulo="dadosCard.titulo"
          :texto="dadosCard.texto"
          :passos-concluidos="dadosCard.passosConcluidos"
          :passos-totais="dadosCard.passosTotais"
          :redirect="dadosCard.componente"
          :imagem="dadosCard.imagem"
          :tema="dadosCard.corTema"
        />
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $cor-primaria;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  padding-bottom: 32px;
  .titulo {
    text-align: left;
    width: 100%;
    padding-left: 22px;
    box-sizing: border-box;
    margin-bottom: 22px;
    color: $cor-branca;
    font-size: $fonte-subtitulo;
    font-weight: $peso-bold;
  }
  .cards {
    padding: 0px 22px;
    .card {
      margin-bottom: 20px;
    }
  }
}
</style>
