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
function upperCaseFirstLetter(word) {
  if (!word || word == " ") return "";
  return word[0].toUpperCase() + word.slice(1, word.length);
}
function splitString(word) {
  return word.split(" ");   
}
/**
 * Metodo que codifica una cadena en un algoritmo sencillo
 * @param {string} str 
 * @returns la cadena previamente codificada
 */
export function rot13(str) {
  const rotString = str.split("").map(item => isUpperCase(item) ? determineLetter(item).toUpperCase() : determineLetter(item)).join("")
  return rotString
}
const determineLetter =(letter)=>{
  let letterFromAscii = letter
  for(let i = 97; i <= 109;i++){
    if(letter.toLowerCase() == String.fromCharCode(i)){
     letterFromAscii = String.fromCharCode(i+13)
    }
  }
  for(let i = 110; i <= 122;i++){
    if(letter.toLowerCase() == String.fromCharCode(i)){
     letterFromAscii = String.fromCharCode(i-13)
    }
  }
  return letterFromAscii
}
const isUpperCase = (letter)=>{
  return (letter === letter.toUpperCase() ? true : false)
}