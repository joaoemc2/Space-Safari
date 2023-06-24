import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type HistoriaType } from '@/types/historiaType'
import sistemaSolar from '@/stores/dadosHistorias/sistemaSolar.json'
import historiaDois from '@/stores/dadosHistorias/historiaDois.json'

export const dadosListagem = defineStore('dadosListagem', () => {
  const historiaSelecionada = ref<number>(0)

  function alternarHistoria(valor: number) {
    historiaSelecionada.value = valor
  }

  const listagem = ref<HistoriaType[][]>([sistemaSolar, historiaDois])

  return { listagem, historiaSelecionada, alternarHistoria }
})
