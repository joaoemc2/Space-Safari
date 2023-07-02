<script setup lang="ts">
const prop = defineProps<{
  texto: string
  icone: string
  corTema: string
}>()
</script>

<template>
  <button :class="prop.corTema" class="btn-container">
    <i :class="`bi bi-${prop.icone}`"></i>
    <p class="btn-texto">{{ prop.texto }}</p>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/coresTema.scss';
.btn-container {
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  & :hover {
    opacity: $hover;
  }

  .btn-texto {
    font-size: 16px;
    font-weight: $peso-super-bold;
  }
  i {
    font-size: 38px;
    -webkit-text-stroke-width: 1px;
  }
}
</style>
