import { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getUsers() {
      const response = await fetch('http://localhost:3000/alumnos')
      const data = await response.json()
      setUsers(data)
    }
    getUsers()
  }, [])
  console.log(users)
  return (
    <>
      <h1>Consumo API</h1>
      <TableContainer width='xl' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Table variant='simple' size='lg' width='xl'>
          <TableCaption placement='top'>Informacion consumida desde la API construida en clase</TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Nombre</Th>
              <Th>Numero de control</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(user => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.nombre}</Td>
                  <Td>{user.numero_control}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
