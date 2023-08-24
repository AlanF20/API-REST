import { useEffect, useState } from "react";
import { getAPIDataByAwait, getAPIDataByAxios, getAPIDataByJQuery, getAPIDataByPromise, getAPIDataByXML } from "../utils/jsFetchMethods";
import { Button } from "./components/Button";
import { FetchData } from "./components/FetchData";

export function App() {
  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    console.log(fetchData)
  }, [fetchData])
  const handlePushData = (newData) => {
    const newArr = [...fetchData, newData]
    setFetchData(newArr)
  }
  return (
    <main className="main">
      <h1>Tipos de peticiones en JS</h1>
      <p className="me">Alan Israel Flores Cabrera <span>19100179</span></p>
      <header className="action__btns">
        <Button method={getAPIDataByAwait} value='Fetch con await' handlePush={handlePushData} />
        <Button method={getAPIDataByPromise} value='Fetch con promise' handlePush={handlePushData} typeOfRequest='PROMISE' />
        <Button method={getAPIDataByXML} value='Fetch con XML' handlePush={handlePushData} typeOfRequest='XML' />
        <Button method={getAPIDataByAxios} value='Fetch con AXIOS' handlePush={handlePushData} typeOfRequest="AXIOS" />
        <Button method={getAPIDataByJQuery} value='Fetch con JQuery' handlePush={handlePushData} typeOfRequest="JQuery" />
      </header>
      <section className="fetch__container">
        {fetchData.map((user) => {
          return (<FetchData key={user.id} user={user} />)
        })}
      </section>
    </main>
  )
}