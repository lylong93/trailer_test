const cp = require('child_process')
const {resolve} = require('path')

;(async ()=> {
  const script = resolve(__dirname,'../crawler/detail')
  const child = cp.fork(script,[])
  let invoked = false

  // child.on('error',err => {
  //   if(invoked) return
  //   invoked = true
  //   // console.log(err)
  // })
  // child.on('exit',code => {
  //   if(invoked) return
  //   invoked = false
  //   let err = code === 0?null: new Error('exit err' + code)
  //   // console.log(err)
  // })
  let result
  child.on('message',data =>{
     // result = data.result
     console.log('ok')
  })

  child.send(result)
})()
