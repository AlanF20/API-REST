import { alphanumeric, generateHashtag, rot13 } from "paquetesnpm";

export function obtenerValoresEcsma(string) {
  const alfanumeric = alphanumeric(string)
  const hashtag = generateHashtag(string)
  const encripted = rot13(string)
  return { alfanumeric, hashtag, encripted }
}