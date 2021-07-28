const net = require('net')

// const client = net.connect({ port: 8124 }, () => {
//   console.log('clinet connnected')
//   client.write('world!\r\n')
// })

const client = net.connect({ port: 8124 })

client.on('connect', () => {
  console.log('clinet connnected')
  client.write('world!\r\n')
})

client.on('data', data => {
  console.log(data.toString())
  // client.end()
})

client.on('end', () => {
  console.log('client disconnected')
})