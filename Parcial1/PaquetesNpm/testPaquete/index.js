import { alphanumeric, generateHashtag, rot13 } from 'paquetesnpm'

const primerPaquete = alphanumeric('')
console.log(primerPaquete)

const palabraSinHashtag = 'Vamos tecos a la final!!'
generateHashtag(palabraSinHashtag)

const palabraAEncriptar = 'Bienvenidos al hacking.'
const palabraEncriptada = rot13(palabraAEncriptar)
console.log(palabraEncriptada)