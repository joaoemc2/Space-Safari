<script setup lang="ts"></script>

<template>
  <main class="header-bar">
    <header class="header">
      <button class="menu"><i class="bi bi-list"></i></button>
      <form class="pesquisar" action="">
        <label for="pesquisar"> <i class="bi bi-search"></i></label>
        <input class="input-pesquisar" type="text" name="pesquisar" placeholder="Pesquisar..." />
      </form>
    </header>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/coresTema.scss';
.header-bar {
  width: 100%;
  background-color: $cor-secundaria;
  margin-bottom: 16px;
}
.header {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  padding: 16px 16px 16px 8px;

  .menu {
    background: none;
    border: none;
    color: $cor-branca;
    font-size: 32px;
  }
  .pesquisar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $cor-branca;
    border-radius: 100px;
    padding: 0 16px;
    .bi-search {
      color: $cor-secundaria;
      font-size: 20px;
      margin-right: 12px;
    }
    .input-pesquisar {
      background: none;
      border: none;
      width: 100%;
      color: $cor-preta;
      box-shadow: 0 0 0 0;
      outline: 0;
      &::placeholder {
        color: $cor-preta;
        opacity: 0.6;
        font-size: 16px;
      }
      &:focus {
        background: none;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
      }
    }
  }
}
</style>
