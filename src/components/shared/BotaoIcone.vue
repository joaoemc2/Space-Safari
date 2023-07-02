<script setup lang="ts">
const prop = defineProps<{
  texto: string
  icone: string
}>()
</script>

<template>
  <button class="btn-container">
    <i :class="`bi bi-${prop.icone}`"></i>
    <p class="btn-texto">{{ prop.texto }}</p>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.btn-container {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 10px;
  & :hover {
    opacity: $hover;
  }

  .btn-texto {
    color: $cor-amarela;
    font-size: 16px;
    font-weight: $peso-bold;
  }
  i {
    font-size: 38px;
    color: $cor-amarela;
  }
}
</style>
