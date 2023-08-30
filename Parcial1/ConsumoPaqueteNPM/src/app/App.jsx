import { useState } from 'react'
import { Button } from './components/Button'
import { obtenerValoresEcsma } from '../utils/paqueteEcsma'
import { obtenerValoresCommon } from '../utils/paqueteRequire.js'

function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState([])
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handlePushData = (newData) => {
    setResponse([...response, newData])
  }
  return (
    <main className="main">
      <h1>Consumo del paquete de npm</h1>
      <p className="me">Alan Israel Flores Cabrera <span>19100179</span></p>
      <header className="action__btns">
        <input value={input} onChange={handleChange}></input>
        <Button method={obtenerValoresCommon} parameter={input} handlePush={handlePushData} value='Ejecutar paquete mediante commonJS' />
        <Button method={obtenerValoresEcsma} parameter={input} value='Ejecutar paquete mediante ECSMA6' handlePush={handlePushData} />
      </header>
      <section className="fetch__container">
        {response.map((response, index) => {
          return (
            <div className='container' key={index}>
              <article>
                <h4>Alfanumerico?</h4>
                <input type='checkbox' value={response.alfanumeric} checked={response.alfanumeric}></input>
              </article>
              <article>
                <h4>Hashtag generado</h4>
                <p>{response.hashtag}</p>
              </article>
              <article>
                <h4>Palabra encriptada</h4>
                <p>{response.encripted}</p>
              </article>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
