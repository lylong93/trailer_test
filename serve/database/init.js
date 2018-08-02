const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/test'
mongoose.Promise = global.Promise

exports.connect = () => {
  // if(process.env.NODE_ENV  !== 'produciton') {
  //   mongoose.set('debug' ,true)
  // }
  mongoose.connect(db,{ useNewUrlParser: true })
  mongoose.connection.on('disconnected',()=> {
      mongoose.connect(db)
  })
  mongoose.connection.on('err', err => {
      console.log(err)
  })
  mongoose.connection.on('open',()=> {
      console.log('open')
  })
}
