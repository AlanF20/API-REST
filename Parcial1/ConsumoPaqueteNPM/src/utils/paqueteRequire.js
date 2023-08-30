import * as metodos from "../../simulacionPaqueteCommonJs/paquetenpmcommon.js"

export function obtenerValoresCommon(string) {
  const alfanumeric = metodos.default.alphanumeric(string)
  const hashtag = metodos.default.generateHashtag(string)
  const encripted = metodos.default.rot13(string)
  return { alfanumeric, hashtag, encripted }
}