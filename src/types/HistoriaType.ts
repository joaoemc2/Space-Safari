import { type PerguntaType } from '@/types/PerguntaType'

export interface HistoriaType {
  titulo: string
  imagem: string

  subTitulo: string
  textoPrincipal: string
  textoSecundario: string | null
  curiosidades: string[]

  galeria: string[]

  pagina: number

  perguntas?: PerguntaType[]
}
