const Mongoose = require('mongoose')

Mongoose.connect('mongodb://localhost:27017/db_helloworld')

const db = Mongoose.connection

db.on('error', error => {
  console.log('connect error', error)
})

db.on('open', () => {
  console.log('connect success')
})



