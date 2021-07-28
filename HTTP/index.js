const http = require('http')

// http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain')
//   res.writeHead(200)
//   res.end('Hello world')
// }).listen(3001)

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.writeHead(200)
  res.end('Hello world')
})

server.on('request', (req, res) => {
  console.log('request')
})

server.listen(3001, () => {
  console.log('http server listening')
})