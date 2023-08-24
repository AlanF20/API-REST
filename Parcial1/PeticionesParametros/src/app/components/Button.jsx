import PropTypes from 'prop-types'
export function Button({ method, value, parameter,handlePush }) {
  const executeMethod = async () => {
    const response = await method(parameter)
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
  handlePush: PropTypes.func,
  parameter: PropTypes.string
}