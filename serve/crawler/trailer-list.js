const puppeteer = require('puppeteer')

const url = 'https://movie.douban.com/top250'
;(async () => {
  console.log('start')
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage()
  await page.goto(url,{
    waitUntil: 'networkidle2'
  });

  async function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

  await sleep(3000)
  await page.waitForSelector('.next')
  let result = []
  for (var i = 0; i < 1; i++) {
      await sleep(3000)
      const res = await page.evaluate(() => {
        var items = document.querySelectorAll(".item");
        let arr = []
        items.forEach( (x,i,a) => {
          const title = x.querySelector('.info').firstElementChild.getElementsByTagName('span')[0].innerHTML
          const star = x.querySelector('.info').querySelector('.bd').querySelector('.star').querySelector('.rating_num').innerHTML
          const pic = x.firstElementChild.getElementsByTagName('img')[0].getAttribute('src').replace('s_ratio_poster', 'l_ratio_poster')
          arr.push({
            title,
            star,
            pic
          })
        })
        return {
          arr
        }
      })
      result = result.concat(res.arr)
      page.click('.next')
}

  browser.close();
  process.send({result})
  process.exit(0)
})()
