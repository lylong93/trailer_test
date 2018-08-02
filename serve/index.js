const koa = require('koa')
const views = require('koa-views')
const { resolve,join } = require('path')
const {connect} = require('./database/init.js')

const R = require('ramda')

// const router = require('./routers')
const MIDDLEWARES = ['router','parcel']

// ;(async () => {
//   await connect ()
// })()



const useMiddlewraes =(app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname,`./middiewares/${name}`)
    )
  )(MIDDLEWARES)
}


async function ok() {
  const app = new koa()
  await useMiddlewraes (app)
  app.listen(5000)

}
ok()
// app
//   .use(router.routes())
//   .use(router.allowedMethods())

// app.use(views(resolve(__dirname,'./views'),{
//   extension:'pug'
// }))
