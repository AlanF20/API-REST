import assert from 'assert'

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('Numerics', () => {
  describe('Numeric input', () => {
    it('should return type of Number', () => {
      assert.equal(typeof 1, 'number')
    })
  })
})

describe('Personalizado', function() {
  describe('#Metodo 1', function() {
    it('Deberia devolver true si la cadena es alfanumerica', function(){
      assert.equal(alphanumeric('AlanFlores123'), true)
    })
    it('Deberia devolver false si la cadena no es alfanuerica', function(){
      assert.equal(alphanumeric('Alan Flores'), false)
    })
  })
})
/**
* Metodo que determina si la cadena dada por el usuario es o no alfanumerica.
* @param {string} string 
* @returns un valor booleano si la cadena dada por el usuario es alfanumerica
*/
export function alphanumeric(string) {
  //your code here
  const hasWhiteSpacesOrUnderScores = /\s/.test(string) || /[_!]/.test(string)
  if (!hasWhiteSpacesOrUnderScores) {
    return /\w/.test(string)
  }
  return false
}