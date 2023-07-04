<script setup lang="ts">
import { useRouter } from 'vue-router'
import BotaoPequeno from '@/components/shared/BotaoPequeno.vue'

const router = useRouter()

function irParaHome() {
  router.push('/home')
}

function login() {
  alert('Login não implementado...\nSelecione a opção "Entrar sem login"')
}
</script>

<template>
  <main class="login-container">
    <section class="topo-container">
      <img class="imagem" src="@/assets/images/logo.png" alt="" />
    </section>
    <section class="base-container">
      <h1 class="titulo">Space Safari</h1>
      <p class="texto">
        Embarque em uma incrível expedição pelo universo, explorando estrelas, planetas e segredos
        cósmicos.
      </p>
      <BotaoPequeno @click="irParaHome()" :texto="'Vamos lá'" />
      <footer class="footer">
        <div class="icones">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-linkedin"></i>
        </div>
        <p class="footer-texto">Space Safari v 0.2.0 - 2023</p>
      </footer>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: $cor-primaria;
  .topo-container {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    .imagem {
      width: 230px;
    }
  }

  .base-container {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 96px 22px 16px;
    background-color: $cor-branca;
    clip-path: ellipse(100% 75% at 50% 80%);
    /* clip-path é usado para criar a curvatura no topo do background. Neste exemplo, estamos usando a forma de uma elipse (ellipse) com uma proporção de 100% de largura e 75% de altura (ellipse(100% 75% at 50% 0%)). A parte at 50% 0% define o ponto de origem da elipse. */
    .titulo {
      color: $cor-primaria;
      text-align: center;
      font-size: $fonte-titulo;
      font-weight: $peso-bold;
    }

    .texto {
      color: $cor-preta;
      text-align: center;
      font-size: $fonte-subtitulo;
      font-weight: $peso-normal;
    }
  }

  .footer {
    .icones {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      i {
        font-size: 32px;
        color: $cor-preta;
      }
    }

    .footer-texto {
      margin-top: 4px;
      color: cor-preta;
      text-align: center;
      font-size: $fonte-pequena;
      font-weight: $peso-normal;
    }
  }
}
</style>
