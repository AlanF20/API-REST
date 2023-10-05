import express from 'express'
// import multer from 'multer'
import cors from 'cors'
import { body, check, checkSchema, validationResult } from 'express-validator'
import options from './validateSchema.js'
const server = express()

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => { cb(null, './tmp/') },
//   filename: (req, file, cb) => { cb(null, file.originalname) }
// }
// )
// const upload = multer({ storage: storage })
const createEmailChain = () => {
  return [check('email').isEmail(), check('age').isNumeric()]
}
server
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  // .use(upload.single('file'))
  // .post('/multer', async (req, res) => {
  //   try {
  //     console.log(req.body, req.file)
  //     const { nombre, numeroControl } = req.body
  //     res.status(201).json({ success: 'Registro añadido correctamente' })
  //   } catch (err) {
  //     res.status(400).json({ error: err.message })
  //   }
  // })
  .post('/validator', createEmailChain(), (req, res) => {
    const result = validationResult(req)
    if (result.isEmpty()) {
      res.json({ msg: 'validaciones pasadas' })
    } else {

      res.json({ msg: result })
    }
  })
  .post('/validateSchema', checkSchema(options), (req, res, next) => {
    const result = validationResult(req)
    try{
      if (result.isEmpty()) {
        res.json({ msg: 'validaciones pasadas' })
      } else {
        throw new Error('El objeto recibido no cumple con las validaciones necesarias.')
      }
    }catch(err){
      next(err)
    }
  })
  .get('/errorEmmiter', (req, res, next) => {
    try{
      throw new Error('Este fue un error generado')
    }catch(err){
      next(err)
    }
  })
  .use((err, req, res, next) => {
    res.status(400).json({ error: err.message })
  })
server.listen(3000, () => {
  console.log('servidor en 3000')
})

