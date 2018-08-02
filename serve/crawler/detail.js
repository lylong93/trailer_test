const puppeteer = require('puppeteer')

const id = 25807345
// const id = 1292281
const base = `https://movie.douban.com/subject/${id}/`


console.log('start')
process.on('mes', async (result) => {
  console.log('开始访问目标页面')
})
//  ;(async () => {
//   console.log('start video')
//   const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
//
//   const page = await browser.newPage()
//   await page.goto(base,{
//     waitUntil: 'networkidle2'
//   });
//
//   async function sleep(timeout) {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }
//
//   await sleep(1000)
//
//   const res = await page.evaluate(() => {
//
//     const item = document.querySelector(".related-pic-video")
//     if (item) {
//       const items = item.getAttribute('style').replace(/.*\((.+?)\)$/, '$1');
//       const href = item.getAttribute('href')
//       return {
//         items,
//         href
//       }
//     }
//     return {}
//   })
//
//   let vidoeUrl
//   if(res.href) {
//     await page.goto(res.href,{
//       waitUntil: 'networkidle2'
//     });
//
//     await sleep(2000)
//
//     const vidoerl = await page.evaluate(() => {
//       return url = document.getElementsByTagName("source")[0].getAttribute('src')
//     })
//      vidoeUrl = vidoerl
//   }
//   const data = {
//     id,
//     pic:res.items,
//     vidoeUrl
//   }
//   console.log(data)
//   browser.close();
//
  process.send({base})
//   // process.exit(0)
// })()
