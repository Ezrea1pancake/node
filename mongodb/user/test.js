require('./connect')

const User = require('./user')

const user = new User({
  username: 'JarvanIV',
  password: '123456'
})

// user.save((err, doc) => {
//   if(err) console.log('save error', err)
//   console.log('save success', doc)
// })

User.find((err, docs) => {
  if(err) console.log('find error', err)
  console.log('find success', docs)
})

// User.findOne({
//   _id: '610fe6e15f1e06484cd56b3d'
// }, (err, doc) => {
//   if(err) console.log('findOne error', err)
//   console.log('findOne success', doc)
// })

// User.updateOne({
//   _id: '610fe6e15f1e06484cd56b3d'
// }, {
//   username: 'Ezreal'
// }, (err, numberAffected, raw) => {
//   if(err) console.log('updateOne error')
//   console.log('numberAffected', numberAffected)
//   console.log('raw', raw)
// })