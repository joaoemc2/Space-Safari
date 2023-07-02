<script setup lang="ts">
import { type PerguntaType } from '@/types/PerguntaType'
import BotaoPequeno from '../shared/BotaoPequeno.vue'
import { ref } from 'vue'

const prop = defineProps<{
  quiz: PerguntaType
}>()

const alternativaSelecionada = ref<number>()

function selecionarAlternativa(questao: number) {
  alternativaSelecionada.value = questao
  console.log(alternativaSelecionada.value)
}

function responderAlternativa() {
  if (alternativaSelecionada.value != null) {
    console.log(alternativaSelecionada.value)
  }
}
</script>

<template>
  <main class="quiz-container">
    <p class="pergunta">{{ prop.quiz.pergunta }}</p>
    <ul>
      <li
        class="questao"
        v-for="(questao, i) in prop.quiz.alternativas"
        :key="i"
        @click="selecionarAlternativa(i)"
        :class="alternativaSelecionada == i ? 'selecionar' : ''"
      >
        <p>{{ questao }}</p>
        <i class="bi bi-check-circle-fill"></i>
      </li>
    </ul>
    <BotaoPequeno :texto="'Responder'" @click="responderAlternativa()" />
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.selecionar {
  p {
    opacity: 1 !important;
  }
  i {
    opacity: 1 !important;
  }
}
.quiz-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pergunta {
    font-size: $fonte-padrao;
    text-align: center;
    color: $cor-primaria;
    font-weight: $peso-bold;
    margin-bottom: 18px;
  }
  ul {
    width: 100%;
    .questao {
      display: flex;
      padding: 16px 26px;
      justify-content: space-between;
      align-items: center;
      color: $cor-branca;
      border-radius: 30px;
      margin-bottom: 20px;
      &:nth-of-type(1) {
        background-color: $cor-laranja;
      }
      &:nth-of-type(2) {
        background-color: $cor-verde;
      }
      &:nth-of-type(3) {
        background-color: $cor-rosa;
      }
      p {
        font-size: $fonte-padrao;
        font-weight: $peso-super-bold;
        opacity: 0.8;
      }
      i {
        font-size: 24px;
        opacity: 0.5;
      }
    }
  }
}
</style>
