const Mongoose = require('mongoose')

Mongoose.connect('mongodb://localhost:27017/db_database')

const db = Mongoose.connection

db.on('error', (error) => {
  console.log('connection error', error)
})

db.on('open', () => {
  console.log('数据库连接成功')
})

const Cat = Mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'HelloCat' })

kitty.save(err => {
  if(err) console.log('save error', error)
  console.log('save success')
})