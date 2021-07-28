const net = require('net')

// const server = net.createServer(socket => {
//   socket.on('data', data => {
//     socket.write('hello')
//   })

//   socket.on('end', () => {
//     console.log('断开连接')
//   })

//   socket.write('欢迎光临《深入浅出Node.js》示例: \n')
// })

const server = net.createServer()
server.on('connection', socket => {
  socket.on('data', data => {
    console.log(data.toString())
    socket.write('hello')
  })

  socket.on('end', () => {
    console.log('断开连接')
  })

  socket.write('欢迎光临《深入浅出Node.js》示例: \n')
})

server.close(() => {
  console.log('server close')
})

server.on('listening', () => {
  console.log('server bound')
})

server.listen(8124)

// server.listen(8124, () => {
//   console.log('server bound')
// })

// server.listen('/tmp/echo.sock')