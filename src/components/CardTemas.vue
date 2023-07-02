<script setup lang="ts">
import { useRouter } from 'vue-router'
import { dadosListagem } from '@/stores/dadosListagem'
import BotaoIcone from './shared/BotaoIcone.vue'

const router = useRouter()
const store = dadosListagem()

const prop = defineProps<{
  titulo: string
  texto: string
  passosConcluidos: number
  passosTotais: number
  redirect: number
  imagem: string
  tema: string
}>()

function redirecionar() {
  store.alternarHistoria(prop.redirect)
  router.push('/historia')
}

const getImageUrl = (name: string) => {
  return new URL(`/src/assets/image/${name}`, import.meta.url).href
}
</script>

<template>
  <main class="card-container">
    <div class="topo">
      <div class="header">
        <h2 :class="prop.tema">{{ titulo }}</h2>
        <img class="imagem" :src="getImageUrl(imagem)" />
      </div>
    </div>
    <p class="texto">{{ texto }}</p>
    <div class="base">
      <BotaoIcone :cor="prop.tema" :icone="'play-circle-fill'" :texto="'Vamos lá!'" @click="redirecionar()" />
      <div class="passos" :class="prop.tema">
        <p>{{ passosConcluidos }} de {{ passosTotais }}</p>
        <p>Passos Concluídos</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/coresTema.scss';
.card-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  padding-top: 20px;
  gap: 12px;
  background: $cor-branca;
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  .topo {
    .header {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: $fonte-subtitulo;
        font-weight: $peso-bold;
        width: auto;
        max-width: 220px;
        background: none;
      }
      .imagem {
        width: 72px;
        height: 72px;
      }
    }
  }
  .texto {
    color: $cor-preta;
    font-size: $fonte-padrao;
    font-weight: $peso-bold;
  }
  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .passos {
      background: none;
      p {
        font-size: $fonte-media;
        font-weight: $peso-bold;
        text-align: center;
      }
    }
  }
}
</style>
