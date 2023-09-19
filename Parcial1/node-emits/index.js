import event from 'events'
function saludar() {
  const emisor = new event.EventEmitter()
  setInterval(() => {
    const nameArrays = ['alan', 'jaqui', 'fernando', 'felipe', 'oscar']
    const pos =( Math.random() * 4).toFixed()
    emisor.emit('saluda', nameArrays[pos])
  }, 2500)
  return emisor
}
const sal = saludar()
sal.on('saluda', (name) => {
  console.log(`Hola ${name}`)
})