<script setup lang="ts">
const prop = defineProps<{
  texto: string
  inverter?: boolean
}>()
</script>

<template>
  <button class="btn-container" :class="inverter ? 'inverter' : ''">
    <p class="btn-texto">{{ prop.texto }}</p>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.btn-container {
  padding: 16px 32px;
  border: none;
  border-radius: 32px;
  background-color: $cor-primaria;
  color: $cor-branca;
  .btn-texto {
    font-size: $fonte-padrao;
    font-weight: $peso-bold;
  }
}
.inverter {
  background-color: $cor-branca;
  color: $cor-primaria;
}
</style>
