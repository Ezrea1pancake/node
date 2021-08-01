const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  if(ctx.path === '/good') {
    return ctx.body = 'Hello Good'
  }

  fs.readFile(path.join(__dirname, './README.md'), (err, data) => {
    if(err) throw err
    console.log(data.toString())
    ctx.body = 'Hello Koa'
    // try {
    //   if(err) throw err
    //   console.log(data.toString())
    //   ctx.body = 'Hello Koa'
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   console.log('离开try catch')
    // }
  })
})

// process.on('uncaughtException', err => {
//   console.log(err)
// })

app.listen(3000)