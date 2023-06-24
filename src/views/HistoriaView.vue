<script setup lang="ts">
import { dadosListagem } from '@/stores/dadosListagem'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import audioFiles from '@/stores/audiosImports'

const router = useRouter()
const store = dadosListagem()

// variáveis
const paginaSelecionada = ref<number>(0)
const ultimaPagina = ref(store.listagem[store.historiaSelecionada].length)
const audios = ref(audioFiles[store.historiaSelecionada])

// life cycle
const listagem = computed(() => {
  return store.listagem[store.historiaSelecionada][paginaSelecionada.value]
})

const audio = computed(() => new Audio(audios.value[paginaSelecionada.value]))

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
    pauseAudio()
    paginaSelecionada.value++
  }
}

function voltarPagina() {
  if (paginaSelecionada.value > 0) {
    pauseAudio()
    paginaSelecionada.value--
  }
}

function voltarParaHome() {
  pauseAudio()
  router.push('home')
}

function getImageUrl(name: string) {
  return new URL(`/src/assets/image/${name}`, import.meta.url).href
}

function playAudio() {
  audio.value.play()
}

function pauseAudio() {
  audio.value.pause()
}
</script>

<template>
  <main class="historia-view">
    <header class="header">
      <h1 class="titulo">{{ listagem.titulo }}</h1>
    </header>
    <div class="image">
      <img :src="getImageUrl(listagem.imagem)" alt="" />
    </div>
    <section class="main-container">
      <h2 class="subtitulo">{{ listagem.subTitulo }}</h2>
      <p class="texto-um">{{ listagem.textoPrincipal }}</p>
      <p class="texto-dois">{{ listagem.textoSecundario }}</p>
      <div class="audio">
        <button class="btn-audio" @click="playAudio()">
          <i class="bi bi-volume-up"></i>
          <p>Escutar</p>
        </button>
      </div>
      <footer class="paginator">
        <button
          class="btn-anterior"
          :class="paginaSelecionada == 0 ? 'disabled' : ''"
          @click="voltarPagina()"
        >
          <i class="bi bi-chevron-left"></i>Anterior
        </button>
        <p class="pagina">{{ listagem.pagina }}</p>
        <button
          class="btn-proximo"
          :class="paginaSelecionada == ultimaPagina - 1 ? 'disabled' : ''"
          @click="proximaPagina()"
        >
          <i class="bi bi-chevron-right"></i>Proximo
        </button>
      </footer>
    </section>
    <button class="voltar" @click="voltarParaHome()">
      <i class="bi bi-arrow-left-circle"></i>Voltar
    </button>
    <button class="tela-cheia" @click="toggleFullscreen()">
      <i class="bi bi-fullscreen"></i>tela cheia
    </button>
  </main>
</template>

<style lang="scss" scoped>
.historia-view {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #f3f3f3;
  .header {
    margin-top: 32px;
    .titulo {
      color: #7063ff;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      width: 70%;
    }
  }
  .main-container {
    background-color: #7063ff;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 64px 64px 0 0;
    .subtitulo {
      color: #f3f3f3;
      text-align: center;
      font-size: 28px;
      font-family: Nunito;
      font-weight: 700;
      margin-top: 40px;
    }
    .texto-um,
    .texto-dois {
      color: #f3f3f3;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 1px;
    }
    .texto-um {
      margin-top: 48px;
    }
    .texto-dois {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .audio {
      .btn-audio {
        border: none;
        background: none;
        .bi {
          color: #f3f3f3;
          font-size: 52px;
        }
        p {
          color: #f3f3f3;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }

  .paginator {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    .btn-anterior,
    .btn-proximo {
      background: none;
      border: none;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 500;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      .bi {
        font-size: 22px;
      }
    }
    .pagina {
      color: #fff;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
  .voltar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: #fff;
    position: absolute;
    top: 16px;
    left: 16px;
    .bi {
      font-size: 40px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .tela-cheia {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    color: #fff;
    position: absolute;
    top: 16px;
    right: 16px;
    .bi {
      font-size: 40px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
.disabled {
  opacity: 0.6;
}
</style>
@/stores/audiosImports
