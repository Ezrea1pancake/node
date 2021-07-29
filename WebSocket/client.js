const http = require('http')
const crypto = require('crypto')

function parseUrl (url) {
  const index = url.indexOf('://')
  const protocol = url.slice(0, index)
  const host = url.slice(index + 3, url.indexOf('/', index + 3))
  const obj = host.split(':')
  return {
    protocol,
    hostname: obj[0],
    port: obj[1],
    protocolVersion: '13'
  }
}

const WebSocket = function (url) {
  if(!url) return
  this.options = parseUrl(url)
  this.connect()
}

WebSocket.prototype.onopen = function () {
  console.log('WebSocket open')
}

WebSocket.prototype.setSocket = function (socket) {
  this.socket = socket
  this.socket.on('data', this.receiver)
}

WebSocket.prototype.receiver = function (data) {
  console.log('receiver', data)
}

WebSocket.prototype.connect = function () {
  const that = this
  const key = Buffer.from(`${this.options.protocolVersion}-${Date.now()}`).toString('base64')
  const shasum = crypto.createHash('sha1')
  const expected = shasum.update(`${key}258EAEF5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64')

  const options = {
    port: this.options.port,
    host: this.options.hostname,
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket',
      'Sec-WebSocket-Version': this.options.protocolVersion,
      'Sec-WebSocket-Key': key
    }
  }

  const req = http.request(options)
  req.end()

  req.on('upgrade', function(res, socket, upgradeHead) {
    that.setSocket(socket)
    that.onopen()
  })
}

const websocketInstance = new WebSocket('ws://127.0.0.1:12010/updates')

module.exports = WebSocket