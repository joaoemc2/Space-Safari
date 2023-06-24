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
      <button class="voltar" @click="voltarParaHome()">
        <i class="bi bi-arrow-left-circle"></i>Voltar
      </button>
      <h1 class="titulo">{{ listagem.titulo }}</h1>
      <button class="tela-cheia" @click="toggleFullscreen()">
        <i class="bi bi-fullscreen"></i>tela cheia
      </button>
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
          <i class="bi bi-volume-down-fill"></i>
        </button>
      </div>
      <footer class="paginator">
        <button
          class="btn-anterior"
          :class="paginaSelecionada == 0 ? 'disabled' : ''"
          @click="voltarPagina()"
        >
          <i class="bi bi-caret-left-fill"></i>Anterior
        </button>
        <p class="pagina">{{ listagem.pagina }}</p>
        <button
          class="btn-proximo"
          :class="paginaSelecionada == ultimaPagina - 1 ? 'disabled' : ''"
          @click="proximaPagina()"
        >
          <i class="bi bi-caret-right-fill"></i>Proximo
        </button>
      </footer>
    </section>
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
    width: 95vw;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .voltar,
    .tela-cheia {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      color: #7063ff;
      font-size: 18px;
      font-weight: 700;
      .bi {
        font-size: 36px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    .titulo {
      color: #7063ff;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      max-width: calc(100vw / 2);
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
    padding: 0 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 64px 64px 0 0;
    .subtitulo {
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      margin-top: 40px;
    }
    .texto-um,
    .texto-dois {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -1px;
      line-height: 1.45;
    }
    .texto-um {
      margin-top: 48px;
      margin-bottom: 8px;
    }
    .texto-dois {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .audio {
      margin-bottom: 12px;
      .btn-audio {
        border: none;
        background: none;
        .bi {
          color: #f3f3f3;
          font-size: 64px;
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
    gap: 64px;
    .btn-anterior,
    .btn-proximo {
      background: none;
      border: none;
      color: #fff;
      text-align: center;
      font-size: 22px;
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
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 30px;
    }
  }
}
.disabled {
  opacity: 0.6;
}
</style>
@/stores/audiosImports
