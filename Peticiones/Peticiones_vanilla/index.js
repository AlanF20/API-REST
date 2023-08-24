import axios from 'axios'

const fetchContainer = document.querySelector('.fetch__container')
const fetchButton = document.querySelector('.fetch__btn')
const fetchButtonPromise = document.querySelector('.fetch__btnPromise')
const fetchButtonXML = document.querySelector('.fetch__btnXML')
const fetchButtonAXIOS = document.querySelector('.fetch__btnAXIOS')
async function getAPIDataByAwait() {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users')
    const usersData = await response.json()
    return usersData  
  } catch (err) {
    console.log(err)
  }
}
async function getAPIDataByPromise() {
  return new Promise((res, rej) => {
    fetch('https://random-data-api.com/api/v2/users')
      .then(res => res.json())
      .then(data => res(data))
  })
}
function getAPIDataByXML() {
  let result
  const req = new XMLHttpRequest()
  req.open('GET', 'https://random-data-api.com/api/v2/users')
  req.send(result)
  return req
}
async function getAPIDataByAxios() {
  return await axios.get('https://random-data-api.com/api/v2/users')
}
fetchButton.addEventListener('click', async () => {
  const user = await getAPIDataByAwait()
  fetchContainer.innerHTML += `
    <h1>${user.first_name}</h1>
    <img src="${user.avatar}" />
    <p>${user.address.city}, ${user.address.state}</p>
    <p>${user.email}
  `
})

fetchButtonPromise.addEventListener('click', () => {
  getAPIDataByPromise()
    .then(data => {
      console.log(data)
      fetchContainer.innerHTML += `
      <h1>${data.first_name}</h1>
      <img src="${data.avatar}" />
      <p>${data.address.city}, ${data.address.state}</p>
      <p>${data.email}
    `
    })
})

fetchButtonXML.addEventListener('click', () => {
  const result = getAPIDataByXML()
  result.addEventListener('readystatechange', () => {
    const isDone = result.readyState === 4;
    const isOk = result.status === 200;

    if (isDone && isOk) {
      const data = JSON.parse(result.response)
      fetchContainer.innerHTML += `
      <h1>${data.first_name}</h1>
      <img src="${data.avatar}" />
      <p>${data.address.city}, ${data.address.state}</p>
      <p>${data.email}
    `
    }
  })
})

fetchButtonAXIOS.addEventListener('click', async () => {
  const data = await getAPIDataByAxios()
  fetchContainer.innerHTML += `
  <h1>${data.first_name}</h1>
  <img src="${data.avatar}" />
  <p>${data.address.city}, ${data.address.state}</p>
  <p>${data.email}
`
})