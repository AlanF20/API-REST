# Paquetes de NPM 

## Alan Israel Flores Cabrera 19100179

Esta paquete contiene metodos acerca de retos de programacion que resolvi en la pagina de codewars.com. Dichos metodos cuentan con una breve documentacion con la herramiento jsDocs.

para utilizarlo simplemente se hace la instalacion normal del paquete: 

```js
npm install paquetesnpm
```

Los metodos principales a utilizar son los siguientes: 

### ***Metodo para determinar si una cadena es alfanumerica*** devuelve true o false.
```js
    /**
 * Metodo que determina si la cadena dada por el usuario es o no alfanumerica.
 * @param {string} string 
 * @returns un valor booleano si la cadena dada por el usuario es alfanumerica
 */
export function alphanumeric(string){
  //your code here
  const hasWhiteSpacesOrUnderScores = /\s/.test(string) || /[_!]/.test(string)
  if(!hasWhiteSpacesOrUnderScores) {
    return /\w/.test(string)
  }
  return false
}
```
### ***Metodo para generar cadenas con hashtags*** en base a una cadena recibida, devuelve la cadena formateada.
```js
    /**
 * Metodo que dada una cadena genera dicha cadena pero con formato de hashtag.
 * @param {string} str 
 * @returns la cadena previamente formateada con el hashtag
 */
export function generateHashtag(str) {
  console.log(str)
  if (!str) return false;
  const arrOfWords = splitString(str).map((word) => upperCaseFirstLetter(word));
  arrOfWords.unshift("#");
  const hashtag = arrOfWords.join("");
  console.log(hashtag)
  return hashtag.length > 140 || hashtag == "#" ? false : hashtag;
}
```
### ***Metodo que encripta una cadena*** mediante un algoritmo sencillo de encriptacion.
```js
    /**
 * Metodo que codifica una cadena en un algoritmo sencillo
 * @param {string} str 
 * @returns la cadena previamente codificada
 */
export function rot13(str) {
  const rotString = str.split("").map(item => isUpperCase(item) ? determineLetter(item).toUpperCase() : determineLetter(item)).join("")
  return rotString
}
```
