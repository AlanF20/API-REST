import axios from "axios"


export async function getAPIDataByAwait() {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users')
    const usersData = await response.json()
    return usersData
  } catch (err) {
    console.log(err)
  }
}

export async function getAPIDataByPromise() {
  return new Promise((res, rej) => {
    fetch('https://random-data-api.com/api/v2/users')
      .then(res => res.json())
      .then(data => res(data))
      .catch((err) => rej(err))
  })
}

export function getAPIDataByXML() {
  let result
  const req = new XMLHttpRequest()
  req.open('GET', 'https://random-data-api.com/api/v2/users')
  req.send(result)
  return req
}

export async function getAPIDataByAxios() {
  return await axios.get('https://random-data-api.com/api/v2/users')
}
export async function getAPIDataByJQuery() {
  // eslint-disable-next-line no-undef
  return $.ajax({
    url: 'https://random-data-api.com/api/v2/users',
    type: 'GET',
    dataType: 'json', 
    success: function (res) {
      res
    }
  })
}

