import { useState } from 'react'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const [user, setUser] = useState({})
  const handleChange = (e) => {
    if (e.target.name != 'file') {
      console.log('aqui')
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
      return
    }
    setUser({
      ...user,
      [e.target.name]: e.target.files[0]
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    const userData = new FormData()
    userData.append('nombre', user.nombre)
    userData.append('numeroControl', user.numeroControl)
    userData.append('file', user.file)
    const response = await fetch('http://localhost:3000/multer', {
      method: 'post',
      body: userData
    })
    console.log(await response.json())
    console.log(userData)
    if (!response.ok) {
      toast.error('Error en la informacion ingresada')
    }
    toast.success('Informacion enviada correctamente!')
  }
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data' method='post'>
      <label htmlFor='nombre'>
        Nombre
        <input onChange={handleChange} type='text' name='nombre'></input>
      </label>
      <label htmlFor='numeroControl'>
        Numero de control
        <input onChange={handleChange} type='text' name='numeroControl'></input>
      </label>
      <label htmlFor='file'>
        <input onChange={handleChange} type='file' name='file'></input>
      </label>
      <input type='submit'></input>
      <Toaster />
    </form>
  )
}

export default App
