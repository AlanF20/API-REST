import { Router } from "express";

const exampleRouter = Router()

exampleRouter
  .get('/', (req, res)=> {
    res.json({message: 'Accediste a la ruta de example desde el archivo router'}).status(200)
  })

export default exampleRouter