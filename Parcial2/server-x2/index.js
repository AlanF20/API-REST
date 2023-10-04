import express, { json } from 'express'
import multer from 'multer'
import cors from 'cors'
import { body, check, validationResult } from 'express-validator'
const server = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, './tmp/') },
  filename: (req, file, cb) => { cb(null, file.originalname) }
}
)
const upload = multer({ storage: storage })
const createEmailChain = () => {
  return [check('email').isEmail(), check('age').isNumeric()]
}
server
  .use(express.json())
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(upload.single('file'))
  .post('/multer', async (req, res) => {
    try {
      console.log(req.body, req.file)
      const { nombre, numeroControl } = req.body
      res.status(201).json({ success: 'Registro añadido correctamente' })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })
  .post('/validator', createEmailChain(),(req, res) => {
    const result = validationResult(req)
    if(result.isEmpty()){
      res.json({msg: 'validaciones pasadas'})
    } else{

      res.json({msg: result})
    }
  })
server.listen(3000, () => {
  console.log('servidor en 3000')
})

