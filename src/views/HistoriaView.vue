<script setup lang="ts">
import { dadosListagem } from '@/stores/dadosListagem'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
// import audioFiles from '@/stores/audiosImports'
import BotaoIconeRow from '@/components/shared/BotaoIconeRow.vue'
import SobreHistoria from '@/components/historia/SobreHistoria.vue'
import GaleriaImagens from '@/components/historia/GaleriaImagens.vue'
import QuizHistoria from '@/components/historia/QuizHistoria.vue'
import BotaoPequeno from '@/components/shared/BotaoPequeno.vue'

const router = useRouter()
const store = dadosListagem()

// variáveis
const paginaSelecionada = ref<number>(0)
const ultimaPagina = ref(store.listagem[store.historiaSelecionada].length)
// const audios = ref(audioFiles[store.historiaSelecionada])

// life cycle
const listagem = computed(() => {
  return store.listagem[store.historiaSelecionada][paginaSelecionada.value]
})

// const audio = computed(() => new Audio(audios.value[paginaSelecionada.value]))

// funções
function toggleFullscreen() {
  const element = document.documentElement

  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  }
}

function proximaPagina() {
  if (paginaSelecionada.value + 1 < ultimaPagina.value) {
    paginaSelecionada.value++
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

function voltarPagina() {
  if (paginaSelecionada.value > 0) {
    paginaSelecionada.value--
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

function voltarParaHome() {
  router.push('home')
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/image/${name}`, import.meta.url).href
}

// function playAudio() {
//   audio.value.play()
// }

// function pauseAudio() {
//   audio.value.pause()
// }
</script>

<template>
  <main class="historia">
    <header class="header">
      <BotaoIconeRow
        class="btn-home"
        :icone="'house'"
        :texto="'Inicio'"
        :cor-tema="'primaria'"
        @click="voltarParaHome()"
      />
      <h1>{{ listagem.titulo }}</h1>
    </header>
    <section class="imagem-container">
      <img :src="getImageUrl(listagem.imagem)" alt="" />
    </section>
    <SobreHistoria
      :titulo="listagem.subTitulo"
      :texto-um="listagem.textoPrincipal"
      :texto-dois="listagem.textoSecundario"
      :curiosidades="listagem.curiosidades"
    />
    <GaleriaImagens :imagens="listagem.galeria" />
    <ul>
      <h3 class="titulo">Quiz</h3>
      <li v-for="(pergunta, i) in listagem.perguntas" :key="i">
        <QuizHistoria :quiz="pergunta" />
      </li>
    </ul>
    <section class="paginator">
      <BotaoPequeno :texto="'Voltar'" :inverter="true" @click="voltarPagina()" />
      <BotaoPequeno :texto="'Avançar'" :inverter="true" @click="proximaPagina()" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.historia {
  width: 100vw;
  .header {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    .btn-home {
      position: absolute;
      left: 8px;
      top: 8px;
    }
    h1 {
      padding-top: 16px;
      color: $cor-primaria;
      text-align: center;
      font-size: $fonte-titulo;
      font-weight: $peso-bold;
      max-width: 70%;
    }
  }
  .imagem-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 42px;
    img {
      width: 230px;
    }
  }
  .titulo {
    font-size: $fonte-titulo;
    text-align: center;
    color: $cor-primaria;
    font-weight: $peso-bold;
    margin-bottom: 22px;
  }
  .paginator {
    display: flex;
    background-color: $cor-primaria;
    border-radius: 30px 30px 0px 0px;
    padding: 38px 16px;
    justify-content: space-between;
  }
}
</style>
