// Focused app logic simulation. This is NOT a browser or a visual/a11y audit.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
class Element extends EventTarget {
  constructor(tag,attrs={},doc){super();this.tagName=tag;this.attrs=attrs;this.doc=doc;this.children=[];this.parent=null;this.hidden='hidden' in attrs;this.open=false;this.disabled='disabled' in attrs;this.style={};this.dataset={};this.isConnected=true;for(const [k,v] of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5)]=v;}
  get textContent(){return this.children.map(x=>typeof x==='string'?x:x.textContent).join('');}
  set textContent(value){this.children=[String(value)];}
  matches(selector){if(selector.startsWith('#'))return this.attrs.id===selector.slice(1);if(selector.startsWith('.'))return (this.attrs.class||'').split(' ').includes(selector.slice(1));if(selector.startsWith('[')){const key=selector.slice(1,-1);return key==='hidden'?this.hidden:key in this.attrs;}return this.tagName===selector;}
  querySelectorAll(selector){const results=[];const walk=n=>{for(const c of n.children)if(typeof c!=='string'){if(c.matches(selector))results.push(c);walk(c);}};walk(this);return results;}
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
  closest(selector){let n=this;while(n){if(n.matches(selector))return n;n=n.parent;}return null;}
  setAttribute(k,v){this.attrs[k]=String(v);}
  getAttribute(k){return this.attrs[k]??null;}
  focus(){this.doc.activeElement=this;}
  click(){this.dispatchEvent(new Event('click'));}
  showModal(){this.open=true;}
  close(){this.open=false;this.dispatchEvent(new Event('close'));}
  animate(){return {cancel(){},finished:Promise.resolve()};}
  getBoundingClientRect(){return {width:300,height:320};}
}
function parse(html){
  const doc=new EventTarget();doc.hidden=false;const root=new Element('root',{},doc);let current=root;
  const voids=new Set(['meta','link','input','img','br','hr']);
  for(const token of html.match(/<[^>]*>|[^<]+/g)||[]){
    if(token.startsWith('<!'))continue;
    if(token.startsWith('</')){if(current.parent)current=current.parent;continue;}
    if(token.startsWith('<')){const tag=token.match(/^<([a-z0-9]+)/i)?.[1];if(!tag)continue;const attrs={};const body=token.slice(tag.length+1,-1);for(const match of body.matchAll(/([\w-]+)(?:="([^"]*)")?/g))attrs[match[1]]=match[2]??'';const el=new Element(tag,attrs,doc);el.parent=current;current.children.push(el);if(!voids.has(tag))current=el;}
    else current.children.push(token);
  }
  doc.querySelector=root.querySelector.bind(root);doc.querySelectorAll=root.querySelectorAll.bind(root);doc.documentElement={scrollHeight:3000};doc.body=doc.querySelector('body');return doc;
}
function environment(html){
  const document=parse(html),preference=new EventTarget(),events=new EventTarget();preference.matches=false;
  let next=0;const frames=new Map(),intersections=[];
  const sandbox={document,console,Event,AbortController,navigator:{clipboard:{writeText:()=>Promise.resolve()}},matchMedia:()=>preference,devicePixelRatio:3,scrollY:0,innerHeight:1000,
    requestAnimationFrame(fn){frames.set(++next,fn);return next;},cancelAnimationFrame(id){frames.delete(id);},addEventListener:events.addEventListener.bind(events),
    IntersectionObserver:class{constructor(fn){this.fn=fn;intersections.push(this);}observe(el){this.el=el;}unobserve(){}disconnect(){this.disconnected=true;}},
    ResizeObserver:class{constructor(fn){this.fn=fn;}observe(){}disconnect(){this.disconnected=true;}}
  };
  sandbox.window=sandbox;
  return {sandbox,document,preference,events,frames,intersections,context:vm.createContext(sandbox)};
}
let checks=0;
function pass(title){checks++;console.log('PASS simulation:',title);}
function run(script,env){const code=fs.readFileSync(script,'utf8').replace(/^import .*?;\n/m,'');vm.runInContext(code,env.context,{filename:script});}
(async()=>{
  const model=await import('../examples/portfolio-lab/model.mjs');
  const progress=await import('../examples/scroll-lab/progress.mjs');
  const base=path.resolve(__dirname,'../examples');
  const env=environment(fs.readFileSync(path.join(base,'portfolio-lab/index.html'),'utf8'));
  Object.assign(env.sandbox,{matchesCategory:model.matchesCategory,countLabel:model.countLabel});
  run(path.join(base,'portfolio-lab/app.js'),env);
  const controls=env.document.querySelector('.filters').querySelectorAll('button');
  assert.equal(env.document.querySelector('.filters').hidden,false);pass('filter activated after setup');
  controls[1].click();assert.equal(env.document.querySelectorAll('[data-id]').filter(x=>!x.hidden).length,2);assert.equal(env.document.querySelector('#result-count').textContent,'2 proyek latihan ditampilkan.');pass('filter visibility/count integrated');
  controls[3].click();assert.equal(env.document.querySelector('#empty').hidden,false);assert.equal(env.document.querySelector('#result-count').textContent,'0 proyek latihan ditampilkan.');pass('empty integrated');
  controls[0].click();assert.equal(env.document.querySelectorAll('[data-id]').filter(x=>!x.hidden).length,3);pass('reset integrated');
  const trigger=env.document.querySelector('[data-detail]');trigger.focus();trigger.click();assert.equal(env.document.querySelector('#detail-dialog').open,true);assert.equal(env.document.querySelector('#detail-title').textContent.trim(),'Filter yang dapat dipahami');pass('detail content from actual card');
  env.document.querySelector('#close-dialog').click();assert.equal(env.document.activeElement,trigger);pass('close handler returns focus (simulated)');
  env.sandbox.navigator.clipboard.writeText=()=>Promise.reject(new Error('denied'));
  env.document.querySelector('#copy-email').click();await new Promise(resolve=>setImmediate(resolve));assert.match(env.document.querySelector('#copy-status').textContent,/Tidak dapat/);pass('clipboard rejection preserves fallback');
  env.sandbox.navigator.clipboard.writeText=()=>Promise.resolve();env.document.querySelector('#copy-email').click();await new Promise(resolve=>setImmediate(resolve));assert.equal(env.document.querySelector('#copy-status').textContent,'Email contoh disalin.');pass('clipboard success after resolution');
  const canvasEnv=environment(fs.readFileSync(path.join(base,'canvas-lab/index.html'),'utf8'));
  const canvas=canvasEnv.document.querySelector('canvas');const draw={};for(const name of ['clearRect','beginPath','arc','fill','ellipse','stroke'])draw[name]=()=>{};draw.setTransform=(...v)=>draw.transform=v;canvas.getContext=()=>draw;
  run(path.join(base,'canvas-lab/app.js'),canvasEnv);
  const toggle=canvasEnv.document.querySelector('#toggle');assert.equal(canvas.width,600);assert.equal(canvas.height,640);assert.deepEqual(draw.transform,[2,0,0,2,0,0]);pass('DPR cap and backing store');
  toggle.click();assert.equal(canvas.dataset.state,'running');assert.equal(canvasEnv.frames.size,1);pass('start creates one loop');
  toggle.click();assert.equal(canvasEnv.frames.size,0);pass('pause cancels loop');
  toggle.click();canvasEnv.intersections[0].fn([{isIntersecting:false}]);assert.equal(canvasEnv.frames.size,0);pass('offscreen cancels loop');
  canvasEnv.intersections[0].fn([{isIntersecting:true}]);assert.equal(canvasEnv.frames.size,1);pass('in-view resumes requested scene');
  canvasEnv.document.hidden=true;canvasEnv.document.dispatchEvent(new Event('visibilitychange'));assert.equal(canvasEnv.frames.size,0);pass('hidden cancels loop');
  canvasEnv.document.hidden=false;canvasEnv.document.dispatchEvent(new Event('visibilitychange'));assert.equal(canvasEnv.frames.size,1);pass('visible resumes');
  canvasEnv.preference.matches=true;canvasEnv.preference.dispatchEvent(new Event('change'));assert.equal(canvasEnv.frames.size,0);assert.equal(toggle.disabled,true);assert.equal(canvas.dataset.state,'static');pass('runtime reduced motion cancels and disables');
  const scrollEnv=environment(fs.readFileSync(path.join(base,'scroll-lab/index.html'),'utf8'));scrollEnv.sandbox.pageProgress=progress.pageProgress;
  run(path.join(base,'scroll-lab/app.js'),scrollEnv);assert.equal(scrollEnv.frames.size,1);const tick=scrollEnv.frames.values().next().value;scrollEnv.frames.clear();tick();assert.equal(scrollEnv.document.querySelector('.bar').style.transform,'scaleX(0)');pass('initial scroll sync');
  scrollEnv.sandbox.scrollY=1000;scrollEnv.events.dispatchEvent(new Event('scroll'));const nextTick=scrollEnv.frames.values().next().value;scrollEnv.frames.clear();nextTick();assert.equal(scrollEnv.document.querySelector('.bar').style.transform,'scaleX(0.5)');pass('scroll progress integrated');
  scrollEnv.preference.matches=true;scrollEnv.preference.dispatchEvent(new Event('change'));assert.equal(scrollEnv.document.querySelector('.progress-wrap').hidden,true);assert.equal(scrollEnv.frames.size,0);pass('scroll reduced fallback');
  console.log(JSON.stringify({status:'PASS',simulation_checks:checks,browser:false}));
})().catch(error=>{console.error(error);process.exitCode=1;});
