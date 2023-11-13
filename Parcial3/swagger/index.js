import express from 'express'
import cors from 'cors'
import connection from './db/connection.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from './swaggerConfig.json' assert {type: "json"}
import { SwaggerTheme } from 'swagger-themes'

const server = express()
const options = swaggerConfig
const theme = new SwaggerTheme('v3')
const openapiSpecification = swaggerJSDoc(options)
const styleOptions = {
  explorer: true,
  customCss: theme.getBuffer('dark')
}
console.log(openapiSpecification)
server
  .use(express.json())
  .use(cors())
  .use('/api-docs', swaggerUi.serve)
  .get('/api-docs', swaggerUi.setup(openapiSpecification, styleOptions))
  /**
 * @swagger
 * /alumnos:
 *   get:
 *     summary: Obtener alumnos
 *     description: Ruta para obtener los registros de los alumnos desde la base de datos.!
 *     responses:
 *       200:
 *         description: Regresa un arreglo de alumnos.
 */
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
  /**
* @swagger
* /alumnos:
*   post:
*     summary: Añadir un nuevo registro de alumno.
*     description: Ruta para añadir un registro de alumno a la base de datos.
*     parameters:
*       - in: body
*         name: nombre
*         required: true
*         description: Nombre del alumno.
*       - in: body
*         name: numeroControl
*         required: true
*         description: Numero de control del alumno.
*         type: number 
*       
*     responses:
*       201:
*         description: Regresa un mensaje de confirmacion sobre el estado de la peticion.
*/
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