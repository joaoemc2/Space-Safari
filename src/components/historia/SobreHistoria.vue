<script setup lang="ts">
const prop = defineProps<{
  titulo: string
  textoUm: string
  textoDois: string | null
  curiosidades: string[]
}>()
</script>

<template>
  <main class="sobre-container">
    <section class="topo">
      <h2 class="titulo">{{ prop.titulo }}</h2>
      <p class="texto">{{ prop.textoUm }}</p>
      <p class="texto">{{ prop.textoDois }}</p>
    </section>
    <section class="curiosidades-container">
      <h3 class="titulo">Curiosidades</h3>
      <img
        src="@/assets/image/SistemaSolar/sistema-solar-icon.png"
        alt=""
        class="imagem-container"
      />
      <ol>
        <li v-for="(curiosidade, i) in prop.curiosidades" :key="i">
          <p class="curiosidade">{{ curiosidade }}</p>
        </li>
      </ol>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.sobre-container {
  border-radius: 30px;
  background: $cor-primaria;
  padding: 16px 16px 32px;
  .topo {
    .titulo {
      color: $cor-branca;
      text-align: center;
      font-size: $fonte-titulo;
      font-weight: $peso-bold;
      margin-bottom: 26px;
    }

    .texto {
      color: $cor-branca;
      font-size: $fonte-padrao;
      font-weight: $peso-bold;
      &:nth-of-type(1) {
        margin-bottom: 18px;
      }
    }
  }

  .curiosidades-container {
    margin-top: 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: $cor-branca;
    border-radius: 30px;
    padding: 0 16px;
    .titulo {
      color: $cor-branca;
      text-align: center;
      font-size: $fonte-titulo;
      font-weight: $peso-bold;
      background-color: $cor-secundaria;
      width: min-content;
      border-radius: 0 0 12px 12px;
      padding: 8px 12px;
      margin-bottom: 22px;
    }

    .imagem-container {
      margin-bottom: 26px;
      img {
        width: 64px;
        height: 64px;
      }
    }

    ol {
      li {
        margin-bottom: 26px;
        font-size: $fonte-padrao;
        font-weight: $peso-super-bold;
        &:nth-of-type(1) {
          color: $cor-laranja;
        }
        &:nth-of-type(2) {
          color: $cor-verde;
        }
        &:nth-of-type(3) {
          color: $cor-roxa;
          margin-bottom: 42px;
        }
      }
    }
  }
}
</style>
