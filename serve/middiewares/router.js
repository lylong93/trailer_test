import {Route} from '../lib/decorator'
import {resolve } from 'path'

export const router = (app) => {
  const apiPath = resolve(__dirname,'../routers')
  const instance = new Route(app,apiPath)
  instance.init()
}
