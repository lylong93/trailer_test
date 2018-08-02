const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const SALT = 10
const MAX = 5
const LOCK = 2*60*60*1000

const userSchema = new Schema({
  username:{
    unique: true,
    type:String
  },
  lockUntil:Number,
  email: {
    unique: true,
    type:String
  },
  passworls: {
    unqiue:true,
    type:String,
  }
})

userSchema.pre('save',next=> {
  if(user.isModified('passworld')) return next()

  bcrypt.genSalt(SALT,(err,salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password,salt,(err,hash) => {
      if(err) return next(err)
      this.password  = hash
      next()
    })
  })
  next()
})
userSchema.virtual ('isLocked').get(() => {
  return !!(this.lockUntil && this. lockUntil > Date.now())
})
userSch
ema.methods= {
  comparePassword: (_password,password) => {
    return new Promise((resovle,reject) => {
      bcrypt.compare(_password,password,(err,isMath) => {
        if(!err) {
          resovle(isMatch)
        }else {
          reject(err)
        }
      })
    })
  },
  incLog: (user) => {
    if(this.lockUntil && this. lockUntil < Date.now())
  }
}


mongoose.model('User',userSchema)
