<script setup lang="ts">
import { useRouter } from 'vue-router'
import { dadosListagem } from '@/stores/dadosListagem'

const router = useRouter()
const store = dadosListagem()

const prop = defineProps<{
  titulo: string
  texto: string
  porcentagemConcluida: number
  redirect: number
  textoBotao: string
  imagem: string
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
  <main>
    <div class="section-um">
      <div class="texto-container">
        <h2>{{ titulo }}</h2>
        <p>{{ texto }}</p>
      </div>
      <img class="imagem" :src="getImageUrl(imagem)" />
    </div>
    <div class="section-dois">
      <button class="btn-two" @click="redirecionar()">{{ textoBotao }}</button>
      <p>{{ porcentagemConcluida }}% Concluído</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  padding-top: 20px;
  gap: 18px;
  background: #f3f3f3;
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  .section-um {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    gap: 12px;
    .texto-container {
      max-width: 242px;
      h2 {
        margin-bottom: 12px;
        color: #7063ff;
        font-size: 18px;
        font-weight: 600;
      }
      p {
        color: #2b2b2b;
        font-size: 14px;
        font-weight: 400;
      }
    }
    .imagem {
      width: 64px;
      height: 64px;
    }
  }
  .section-dois {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p {
      color: #7063ff;
      font-size: 13px;
      font-weight: 400;
    }
  }
}
</style>
