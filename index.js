const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello Worldc')
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
  // await page.goto('https://uihukh.github.io/dutangle/index.html'); 
  await page.goto('https://eu0.proxysite.com/process.php?d=fOAq6knT%2Btu3Z6CvE6zbeKClgTs6Wosx%2BS%2FHO9OvRKeQeSABYvJvzY210Kv290DFK4%2Fm&b=1&f=norefer');    
  console.log('----XONG0--------');
  setTimeout(async () => await await page.close(), 50000);
  setTimeout(async () => await browser.close(), 60000);
  console.log('----XONG--------');
  
  })();
}

function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 70000 ); 
    console.log('--tttttttttt--') 
}



f();
 
