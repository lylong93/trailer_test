const mongoose = require('mongoose')
const Schema  =  mongoose.Schema
const Mixed = Schema.Types.Mixed

const MovieSchema = new Schema ({
  movieId:String,
  rate:Number,
  title:String,


})
