<script setup lang="ts">
const prop = defineProps<{
  texto: string
  icone: string
  cor: string
}>()
</script>

<template>
  <button class="btn-container" :class="cor">
    <i :class="`bi bi-${prop.icone}`"></i>
    <p class="btn-texto">{{ prop.texto }}</p>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/coresTema.scss';
.btn-container {
  border: none;
  background: none !important;
  display: flex;
  align-items: center;
  gap: 10px;
  & :hover {
    opacity: $hover;
  }

  .btn-texto {
    font-size: 16px;
    font-weight: $peso-bold;
  }
  i {
    font-size: 38px;
  }
}
</style>
