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
  .use(cors())
  .get('/alumnos', async (req, res) => {
    try {
      const [users] = await connection.promise().query('SELECT * FROM alumnos')
      res.json(users)
    } catch (err) {
      res.json({ error: err.message })
    }
  })
  .get('/alumno/:id', async (req, res) => {
    try {
      const { id } = req.params
      if (!id) throw new Error('No ingreso un id para buscar.')
      const [encontrado] = await connection.promise().query(`SELECT * FROM alumnos WHERE id = ${id}`)
      res.send(encontrado).status(200)
    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  })
  .post('/alumnos', async (req, res) => {
    try {
      const { nombre, numeroControl } = req.body
      await connection.promise().query(`INSERT INTO alumnos (nombre, numero_control) VALUES ('${nombre}', '${numeroControl}')`)
      res.status(201).json({ success: 'Registro añadido correctamente' })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })
  .put('/alumno/:id', async (req, res) => {
    try {
      const { id } = req.params
      const userData = req.body
      let query = Object.entries(userData).map(([key, value]) => {
        return `${key}  = '${value}'`
      }).join(', ')
      console.log(query)
      await connection.promise().query(`UPDATE alumnos SET ${query} WHERE id = ${id}`)
      res.status(201).send('Edicion exitosa')
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }).delete('/alumno/', async (req, res) => {
    try {
      const { id } = req.query
      console.log(id)
      await connection.promise().query(`DELETE FROM alumnos WHERE id = ${id}`)
      res.status(200).send('Registro eliminado correctamente.')
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })
server.listen(3000, () => {
  console.log('servidor en 3000')
})

