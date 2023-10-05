/**
 * Objeto en formato JSON que representa las validaciones de una request.
 *  
 */
const options = {
  email: { isEmail: true, errorMessage: 'Debe ingresar un email valido' },
  age: { isNumeric: true, errorMessage: 'La edad tiene que ser numerica' },
  name: { notEmpty: true, errorMessage: 'El campo de nombre es obligatorio'}
}

export default options