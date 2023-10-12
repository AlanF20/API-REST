import express from 'express'
import Joi from 'joi'
const server = express()

const jsonSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
server
  .use(express.json())
  .get('/', (req, res) => {
    res.status(200).send('Entraste a ruta main')
  })
  .post('/validate', (req, res) => {
    try {
      const result = jsonSchema.validate(req.body, { abortEarly: true })
      console.log(result)  
      if(result.error) throw new Error('Error. Validar informacion')
      res.json({ success: 'Todo bien' })
    } catch (err) {
      console.log(err.message)
      res.json({ error: err.message })
    }
  })
  .listen(3000, () => {
    console.log('Escuchando en puerto 3000')
  })