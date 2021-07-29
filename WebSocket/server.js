const http = require('http')
const crypto = require('crypto')
const WebSocket = require('./client')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello world\n')
})
server.listen(12010)

server.on('upgrade', (req, socket, upgradeHead) => {
  const head = Buffer.from(String(upgradeHead.length))
  upgradeHead.copy(head)
  let key = req.headers['sec-websocket-key']
  const shasum = crypto.createHash('sha1')

  key = shasum.update(`${key}258EAEF5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64')
  const headers = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${key}`,
    // `Sec-WebSocket-Protocol: ${protocol}`
    `Sec-WebSocket-Protocol: chat`
  ]
  socket.setNoDelay(true)
  socket.write(headers.concat('', '').join('\r\n'))
  const websocket = new WebSocket()
  websocket.setSocket(socket)
})

// server.on('error', error => {
//   console.log('error', error)
// })