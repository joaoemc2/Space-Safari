import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const dadosListagem = defineStore('dadosListagem', () => {
  const historiaSelecionada = ref<number>(0)

  function alternarHistoria(valor: number) {
    historiaSelecionada.value = valor
  }

  const listagem = ref([
    [
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Vamos explorar os planetas do Sistema Solar juntos! Descubra características incríveis, desde planetas quentes até gigantes com anéis.',
        textoSecundario: 'Vamos embarcar nessa aventura espacial e aprender sobre o universo!',
        imagem: '/src/assets/image/SistemaSolar/010-solar-system.png',
        Pagina: 1
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'O Sistema Solar é uma grande família de planetas e outras coisas que giram ao redor do Sol, como se estivessem dançando no espaço!',
        textoSecundario: null,
        imagem: '/src/assets/image/SistemaSolar/009-planet-earth.png',
        Pagina: 2
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Nessa fabulosa dança cósmica, o Sol brilha intensamente no centro, enquanto ao seu redor giram os planetas:',
        textoSecundario: 'Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.',
        imagem: '/src/assets/image/SistemaSolar/014-sun.png',
        Pagina: 3
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Mercúrio é o planeta mais próximo do Sol. Ele é bem pequeno e rochoso. Mercúrio é muito quente durante o dia e muito frio durante a noite.',
        textoSecundario: 'Ele não tem atmosfera, o que significa que não tem ar para respirar.',
        imagem: '/src/assets/image/SistemaSolar/004-mercury.png',
        Pagina: 4
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Vênus é conhecido como o "Planeta Vizinho da Terra". Ele é bem brilhante no céu e tem uma atmosfera muito densa, cheia de nuvens.',
        textoSecundario:
          'Vênus é o planeta mais quente do Sistema Solar, com uma temperatura super quente o tempo todo.',
        imagem: '/src/assets/image/SistemaSolar/003-venus.png',
        Pagina: 5
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'A Terra é o nosso planeta! É muito especial porque é o único planeta conhecido que tem vida. Nós vivemos aqui!',
        textoSecundario:
          'A Terra tem água, ar para respirar e uma variedade incrível de plantas e animais.',
        imagem: '/src/assets/image/SistemaSolar/009-planet-earth.png',
        Pagina: 6
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Marte é chamado de "Planeta Vermelho" porque sua superfície tem uma cor avermelhada. É um planeta rochoso e tem montanhas e vales.',
        textoSecundario:
          'Marte tem uma atmosfera muito fina e é conhecido por suas calotas polares de gelo.',
        imagem: '/src/assets/image/SistemaSolar/005-mars.png',
        Pagina: 7
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Júpiter é o maior planeta do Sistema Solar. Ele é tão grande que poderia caber todos os outros planetas dentro dele! Júpiter é feito principalmente de gás e não tem uma superfície sólida.',
        textoSecundario:
          'Ele tem listras coloridas e uma grande mancha vermelha chamada de "Grande Mancha Vermelha".',
        imagem: '/src/assets/image/SistemaSolar/001-jupiter.png',
        Pagina: 8
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Saturno é famoso por seus anéis bonitos! Ele também é feito principalmente de gás e tem uma atmosfera com nuvens.',
        textoSecundario:
          'Os anéis de Saturno são feitos de pedaços de gelo e rocha. É um planeta muito interessante de se olhar!',
        imagem: '/src/assets/image/SistemaSolar/006-saturn.png',
        Pagina: 9
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Urano é um planeta azul e gelado. Ele também tem anéis, mas eles são mais finos e menos visíveis do que os de Saturno.',
        textoSecundario:
          'Urano é conhecido por ser inclinado de lado, o que significa que ele "deita" enquanto gira.',
        imagem: '/src/assets/image/SistemaSolar/007-uranus.png',
        Pagina: 10
      },
      {
        titulo: 'Sistema Solar',
        textoPrincipal:
          'Netuno é um planeta azul escuro e frio. Ele é parecido com Urano, mas tem uma cor diferente.',
        textoSecundario:
          'Netuno é conhecido por suas tempestades poderosas e ventos fortes. Ele também tem anéis, assim como Júpiter e Saturno.',
        imagem: '/src/assets/image/SistemaSolar/002-neptune.png',
        Pagina: 11
      }
    ]
  ])

  return { listagem, historiaSelecionada, alternarHistoria }
})
