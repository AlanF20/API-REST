import PropTypes from 'prop-types'
export function Button({ method, value, typeOfRequest = "normal", handlePush }) {
  const executeMethod = async () => {
    let response = {}
    if (typeOfRequest === 'AXIOS') {
      const result = await method()
      response = result.data
    } else if (typeOfRequest === 'XML') {
      const result = method()
      result.addEventListener('readystatechange', () => {
        const isDone = result.readyState === 4;
        const isOk = result.status === 200;
        if (isDone && isOk) {
          response = result.response
          handlePush(JSON.parse(response))
        }
      })
      return
    }else if(typeOfRequest === 'PROMISE') {
      method()
        .then(res => handlePush(res))
      return
    } else {
      response = await method()
    }
    handlePush(response)
  }
  return (
    <button onClick={() => executeMethod()}>{value}</button>
  )
}

Button.propTypes = {
  method: PropTypes.func,
  value: PropTypes.string,
  typeOfRequest: PropTypes.string,
  handlePush: PropTypes.func
}