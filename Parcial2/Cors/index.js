import http from 'http'
const server = http.createServer((req, res)=> {
  res.setHeader('Access-Control-Allow-Origin', "*")
  const users = [{name:'Jaqui'}]
  console.log(req.url)
  if(req.url === '/user/1') res.write(JSON.stringify(users[0]))
  res.end()
})
server.on('connection', (socket)=> {
  socket.emit('ready')
  console.log('usuario conectado')
})


server.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080 ')
})