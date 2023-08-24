import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { getAPIDataByAwait } from '../utils/jsFetchMethods'

function App() {
  const [breed, setBreed] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const result = await response.json()
      const breedArray = Object.keys(result.message)
      setBreed(breedArray)
    }
    getData()
  }, [])
  const [fetchData, setFetchData] = useState([])
  const [parameter, setParameter] = useState('')
  const handleChange = (e) => {
    setParameter(e.target.value)
  }
  const handlePushData = (newData) => {
    const newArr = [...fetchData, newData]
    setFetchData(newArr)
  }
  return (
    <main className="main">
      <h1>Tipos de peticiones en JS</h1>
      <p className="me">Alan Israel Flores Cabrera <span>19100179</span></p>
      <header className="action__btns">
        <select onChange={handleChange} name='parameter' className='action__input' placeholder='Ingresa un parametro para buscar' >
          {breed.map((breed, index) => {
            return (
              <option key={index} value={breed} >{breed}</option>
            )
          })}
        </select>
        <Button method={getAPIDataByAwait} value='Fetch' parameter={parameter} handlePush={handlePushData} />
      </header>
      <section className="fetch__container">
        {fetchData.map((dog, index) => {
          return (
            <div key={index} className="user_container">
              <img className="user__img" src={dog.message} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
