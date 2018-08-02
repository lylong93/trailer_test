const Router = require('koa-router')

const router = new Router()

import  { controller, get}  from  '../lib/decorator.js'
import {getAllMovie} from '../controls/movie.js'

@controller('/api/movie')
export class movieController {
    @get('/all')
    async getMovie (ctx,next) {
        const movie = await getAllMovie()

        ctx.body = movie
    }
}
