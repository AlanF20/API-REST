import express from 'express'
import cors from 'cors'
const server = express()
const nombresAlumnos = [
  "Juan",
  "María",
  "Carlos",
  "Luisa",
  "Ana",
  "Pedro",
  "Sofía",
  "Miguel",
  "Laura",
  "Javier",
  "Carmen",
  "Alejandro",
  "Valeria",
  "Diego",
  "Isabella",
  "Andrés",
  "Camila",
  "Roberto",
  "Elena"
];
server
  .use(express.json())
  // .use(cors())
  .get('/', (req, res) => {
    res.send('<h1>Hola mundo, Respuesta generada desde express</h1>')
  })
  .get('/:alumno', (req,res)=>{
    const {alumno} = req.body
    const encontrado = nombresAlumnos.find(alu => alu === alumno)
    res.send(encontrado).status(200)
  })
  .post('/', (req, res) => {
    const { name } = req.body
    res.status(201).send('Insercion exitosa')
  })
server.listen(3000, () => {
  console.log('servidor en 3000')
})

