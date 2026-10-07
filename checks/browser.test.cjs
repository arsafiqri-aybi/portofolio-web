// Optional browser QA. Requires Playwright and installed Chromium binary.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'../examples');
const output=path.resolve(__dirname,'../qa-output');
const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript'};
const server=http.createServer((req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const relative=pathname.replace(/^\/test-subpath\//,'');
  let file=path.resolve(root,relative);
  if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);return res.end();}
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file)){res.writeHead(404);return res.end();}
  res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
let browser,checks=0;
const report=[];
function record(title){checks++;report.push({title,status:'PASS'});console.log('PASS',title);}
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=`http://127.0.0.1:${server.address().port}/test-subpath`;
  try{
    browser=await chromium.launch({headless:true});fs.mkdirSync(output,{recursive:true});
    for(const width of [320,390,768,1440]){
      const context=await browser.newContext({viewport:{width,height:900}});
      const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto(base+'/portfolio-lab/');
      await page.locator('.filters:not([hidden])').waitFor();
      assert.equal(await page.locator('.card:not([hidden])').count(),3);record(`initial content ${width}`);
      await page.getByRole('button',{name:'Frontend',exact:true}).click();
      assert.equal(await page.locator('.card:not([hidden])').count(),2);record(`filter ${width}`);
      await page.getByRole('button',{name:'Research',exact:true}).click();
      assert.equal(await page.locator('.card:not([hidden])').count(),0);
      assert.equal(await page.locator('#empty').isVisible(),true);record(`empty state ${width}`);
      await page.getByRole('button',{name:'Semua',exact:true}).click();
      const trigger=page.getByRole('button',{name:'Ringkasan filter',exact:true});await trigger.focus();await page.keyboard.press('Enter');
      assert.equal(await page.locator('dialog').evaluate(x=>x.open),true);
      await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('dialog').open);
      assert.equal(await trigger.evaluate(x=>document.activeElement===x),true);record(`dialog escape return focus ${width}`);
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);assert.equal(overflow,false);record(`no horizontal overflow ${width}`);
      assert.deepEqual(errors,[]);record(`runtime errors ${width}`);
      await page.screenshot({path:path.join(output,`portfolio-${width}.png`),fullPage:true});
      await context.close();
    }
    const context=await browser.newContext({viewport:{width:390,height:844}});
    const page=await context.newPage();
    await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:()=>Promise.reject(new Error('denied'))}}));
    await page.goto(base+'/portfolio-lab/');await page.getByRole('button',{name:'Salin email contoh'}).click();
    await page.waitForFunction(()=>document.querySelector('#copy-status').textContent.includes('Tidak dapat'));
    record('clipboard denial fallback');
    await page.goto(base+'/canvas-lab/');await page.locator('#toggle:not([hidden])').waitFor();
    await page.getByRole('button',{name:'Mulai motion'}).click();
    await page.waitForFunction(()=>document.querySelector('canvas').dataset.state==='running');record('canvas starts');
    await page.getByRole('button',{name:'Jeda motion'}).click();
    assert.equal(await page.locator('canvas').getAttribute('data-state'),'static');record('canvas pauses');
    await page.getByRole('button',{name:'Mulai motion'}).click();
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.waitForFunction(()=>document.querySelector('#toggle').disabled);
    assert.equal(await page.locator('canvas').getAttribute('data-state'),'static');record('canvas runtime reduced motion');
    await page.goto(base+'/scroll-lab/#dua');
    await page.waitForFunction(()=>document.querySelector('.progress-wrap').hidden);record('scroll reduced fallback');
    await page.emulateMedia({reducedMotion:'no-preference'});
    await page.waitForFunction(()=>!document.querySelector('.progress-wrap').hidden);record('scroll preference restored');
    await context.close();
    const staticContext=await browser.newContext({javaScriptEnabled:false,viewport:{width:320,height:700}});
    const staticPage=await staticContext.newPage();await staticPage.goto(base+'/portfolio-lab/');
    assert.equal(await staticPage.locator('.card').count(),3);
    assert.equal(await staticPage.locator('.filters').isVisible(),false);record('JS off full content and no inert controls');
    await staticPage.locator('h3 a').first().click();assert.equal(await staticPage.locator('#filter').isVisible(),true);record('JS off direct case study');
    await staticContext.close();
    fs.writeFileSync(path.join(output,'browser-report.json'),JSON.stringify({status:'PASS',checks,browser:browser.version(),results:report},null,2));
    console.log(JSON.stringify({status:'PASS',checks}));
  }catch(e){
    fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,'browser-report.json'),JSON.stringify({status:'FAIL_OR_UNAVAILABLE',checks,error:e.message,results:report},null,2));
    console.error(e.message);process.exitCode=1;
  }finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})();
