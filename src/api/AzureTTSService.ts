import axios, { type AxiosResponse, AxiosError } from 'axios'

const REGION = 'eastus'

export async function obterToken() {
  const headers = {
    'Ocp-Apim-Subscription-Key': 'eec08ee7638344f2b2a3e0fa39d5503a'
  }

  const resposta = await axios.post(
    `https://${REGION}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`,
    null,
    { headers }
  )
  return resposta.data
}

export async function obterFala(token: string): Promise<string> {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/ssml+xml',
    'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm'
  }

  const body =
    '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="pt-BR"><voice name="pt-BR-HumbertoNeural">O matheus é um viado</voice></speak>'

  const resposta = await axios.post(
    `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
    body,
    { headers }
  )
  console.log('tipo:', typeof resposta.data)
  return resposta.data
}
