import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import connection from './db/connection.js'
const server = express()


const accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), { flags: 'a' })
server
  .use(express.json())
  .use(morgan('combined', { stream: accessLogStream }))
  // .use(cors())
  .get('/', async (req, res) => {
    const [users] = await connection.promise().query('SELECT * FROM alumnos')
    res.json(users)
  })
  .get('/:alumno', (req, res) => {
    const { alumno } = req.body
    const encontrado = nombresAlumnos.find(alu => alu === alumno)
    res.send(encontrado).status(200)
  })
  .post('/alumnos', async (req, res) => {
    const { nombre, numeroControl } = req.body
    await connection.promise().query(`INSERT INTO alumnos (nombre, numero_control) VALUES ('${nombre}', '${numeroControl}')`)
    res.json({ success: 'Registro añadido correctamente' })
  })
  .put('/alumno/:id', async (req, res) => {
    const { id } = req.params
    const { nombre } = req.body
    await connection.promise().query(`UPDATE alumnos SET nombre = '${nombre}' WHERE id = ${id}`)
    res.status(201).send('Insercion exitosa')
  })
server.listen(3000, () => {
  console.log('servidor en 3000')
})

