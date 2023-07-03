<script setup lang="ts">
import { type PerguntaType } from '@/types/PerguntaType'
import BotaoPequeno from '../shared/BotaoPequeno.vue'
import { ref } from 'vue'

const prop = defineProps<{
  quiz: PerguntaType
}>()

const alternativaSelecionada = ref<number>()
const mostarAlerta = ref<boolean>(false)
const mostarCallback = ref<boolean>(false)
const respostaCorreta = ref<boolean>()
const bloquearResposta = ref<boolean>(false)

function selecionarAlternativa(questao: number) {
  if (!bloquearResposta.value) {
    mostarAlerta.value = false
    alternativaSelecionada.value = questao
  }
}

function responderAlternativa() {
  if (alternativaSelecionada.value != null) {
    mostarAlerta.value = false
    mostarCallback.value = true
    bloquearResposta.value = true
    if (alternativaSelecionada.value === prop.quiz.respostaCorreta) {
      respostaCorreta.value = true
    } else {
      respostaCorreta.value = false
    }
  } else {
    mostarAlerta.value = true
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
    <p v-if="mostarAlerta" class="alerta">Selecione uma resposta</p>
    <BotaoPequeno v-if="!mostarCallback" :texto="'Responder'" @click="responderAlternativa()" />
    <p v-else class="resposta" :class="!respostaCorreta ? 'resposta-incorreta' : ''">
      {{ prop.quiz.callback[alternativaSelecionada!] }}
    </p>
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
    font-size: $fonte-subtitulo;
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
        opacity: 0.9;
      }
      i {
        font-size: 24px;
        opacity: 0.3;
      }
    }
  }
  .alerta {
    font-size: $fonte-padrao;
    text-align: center;
    color: $cor-vermelha;
    font-weight: $peso-bold;
    margin-bottom: 18px;
  }
  .resposta {
    font-size: $fonte-padrao;
    text-align: center;
    color: $cor-verde;
    font-weight: $peso-bold;
    margin-bottom: 18px;
  }
  .resposta-incorreta {
    color: $cor-vermelha;
  }
}
</style>
