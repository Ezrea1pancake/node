// const str = '深入浅出node.js'
// // 16进制的两位数
// const buf1 = Buffer.from(str, 'utf-8')
// // 中文在UTF-8编码下占用3个元素，字母和半角标点符号占用一个元素
// console.log(buf1) // <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>
// // 访问length属性可以得到buffer长度，也可以通过下标访问元素
// console.log(buf1.length)
// console.log(buf1.toString('utf8'))

// const buf2 = Buffer.alloc(10)
// console.log(buf2.length)
// buf2[0] = 100
// buf2[1] = 400
// buf2[2] = 10.13
// buf2[3] = -100
// console.log(buf2)

// console.log(Buffer.isEncoding('utf8'))

/**
 * Buffer编码类型
 */
// const iconv = require('iconv-lite')

// const buf3 = iconv.encode('sample input string', 'win1251')
// console.log('buf3:', buf3)
// const str = iconv.decode(buf3, 'win1251')
// console.log('buf3 toString:', str)

/**
 * Buffer拼接
 */
const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, './test.md'), { highWaterMark : 11})
// rs.setEncoding('utf8')

// let str = ''
// rs.on('data', chunk => {
//   str += chunk.toString()
// })
// rs.on('end', chunk => {
//   console.log('str:', str)
// })

let chunks = []
let size = 0
rs.on('data', chunk => {
  chunks.push(chunk)
  size += chunk.length
})
rs.on('end', chunk => {
  const buf4 = Buffer.concat(chunks, size)
  console.log('buf4:', buf4)
  console.log('buf4 toString:', buf4.toString())
})

