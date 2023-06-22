<script setup lang="ts">
import { dadosListagem } from '@/stores/dadosListagem'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = dadosListagem()
const paginaSelecionada = ref<number>(0)

const listagem = computed(() => {
  return store.listagem[store.historiaSelecionada][paginaSelecionada.value]
})
const ultimaPagina = ref(store.listagem[store.historiaSelecionada].length)

function proximaPagina() {
  if (paginaSelecionada.value + 1 < ultimaPagina.value) {
    paginaSelecionada.value++
  }
}

function voltarPagina() {
  if (paginaSelecionada.value > 0) {
    paginaSelecionada.value--
  }
}

function voltarParaHome() {
  router.push('home')
}
</script>

<template>
  <main class="historia-view">
    <header class="header">
      <h1 class="titulo">{{ listagem.titulo }}</h1>
    </header>
    <section class="main-container">
      <div class="image">
        <img :src="listagem.imagem" alt="" />
      </div>
      <p class="texto-um">{{ listagem.textoPrincipal }}</p>
      <p class="texto-dois">{{ listagem.textoSecundario }}</p>
    </section>
    <footer class="paginator">
      <button
        class="btn-anterior"
        :class="paginaSelecionada == 0 ? 'disabled' : ''"
        @click="voltarPagina()"
      >
        <i class="bi bi-chevron-left"></i>Anterior
      </button>
      <p class="pagina">{{ listagem.Pagina }}</p>
      <button class="btn-proximo" @click="proximaPagina()">
        <i class="bi bi-chevron-right"></i>Proximo
      </button>
    </footer>
    <button class="voltar" @click="voltarParaHome()">
      <i class="bi bi-arrow-left-circle"></i>Voltar
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
  background-color: #7063ff;
  .header {
    margin-top: 32px;
    .titulo {
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .main-container {
    padding: 0 16px;
    .image {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        width: 70%; 
      }
    }
    .texto-um,
    .texto-dois {
      color: #fff;
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
}
.disabled {
  opacity: 0.6;
}
</style>
