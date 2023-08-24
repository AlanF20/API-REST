export async function getAPIDataByAwait(parameter) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${parameter}/images/random`)
    const usersData = await response.json()
    return usersData
  } catch (err) {
    console.log(err)
  }
}
