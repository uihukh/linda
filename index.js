const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello Worldccc')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();

const puppeteer = require('puppeteer');
function kiusi(){
  (async () => {
  console.log('-----kiusi00000-----------');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  
  const page = await browser.newPage();
  await page.goto('https://uihukh.github.io/dutangle/aaa.html'); 
  // await page.goto('http://server1.kproxy.com/servlet/redirect.srv/sruj/sgemlqo/smno/p1/promote7.php?ref=biboucuongoc1102');    
  console.log('----XONG0--------');
  setTimeout(async () => await await page.close(), 40000);
  setTimeout(async () => await browser.close(), 45000);
  console.log('----XONG--------');
  
  })();
}

function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 50000 ); 
    console.log('--tttttttttt--') 
}



f();
 
