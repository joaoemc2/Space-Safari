<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaHome() {
  router.push('/home')
}

function login() {
  alert('Login não implementado...\nSelecione a opção "Entrar sem login"')
}
</script>

<template>
  <main>
    <img class="image" src="@/assets/image/get_starting1.png" alt="" />
    <div class="texto-container">
      <h1>Project Sagan</h1>
      <p>Ensinando sobre o universo para nosso pequeninos!</p>
    </div>
    <div class="btn-container">
      <button class="btn-google" @click="login()">
        <i class="bi bi-google"></i>Login com Google
      </button>
      <button class="btn-sem-login" @click="irParaHome()">Entrar sem login</button>
    </div>
    <footer class="footer">
      <div class="social-icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
      </div>
      <p>Project Sagan - 2023</p>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #7063ff;
  gap: 42px;
  .image {
    margin-top: 64px;
    width: 70%;
  }
  .texto-container {
    h1 {
      text-align: center;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 27px;
      color: #f3f3f3;
      margin-bottom: 16px;
    }
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #f3f3f3;
    }
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    button {
      padding: 12px;
      width: 220px;
      font-size: 14px;
      border: none;
      border-radius: 8px;
    }
    .btn-google {
      background: #f3f3f3;
      color: #7063ff;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
    .btn-sem-login {
      border: 1px solid #f3f3f3;
      background: none;
      color: #f3f3f3;
    }
  }
  .footer {
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 42px;
      margin-bottom: 18px;

      i {
        font-size: 22px;
        color: #f3f3f3;
      }
    }
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #f3f3f3;
      text-align: center;
    }
  }
}

.temaWhite {
  background-color: #f3f3f3;
}
</style>
