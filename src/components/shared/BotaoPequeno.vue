<script setup lang="ts">
const prop = defineProps<{
  texto: string
}>()
</script>

<template>
  <button class="btn-container">
    <p class="btn-texto">{{ prop.texto }}</p>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.btn-container {
  padding: 12px 32px;
  border: none;
  border-radius: 32px;
  background-color: $cor-primaria;
  .btn-texto {
    color: $cor-branca;
    font-size: $fonte-padrao;
    font-weight: $peso-bold;
  }
}
</style>
