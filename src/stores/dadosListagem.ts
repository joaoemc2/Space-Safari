import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import sistemaSolar from '@/stores/sistemaSolar.json'

export const dadosListagem = defineStore('dadosListagem', () => {
  const historiaSelecionada = ref<number>(0)

  function alternarHistoria(valor: number) {
    historiaSelecionada.value = valor
  }

  const listagem = ref([sistemaSolar])

  return { listagem, historiaSelecionada, alternarHistoria }
})
