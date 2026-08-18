const nav=document.querySelector('#nav');
document.querySelector('#menuBtn').addEventListener('click',e=>{const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const words=['.NET','Angular','APIs','SQL','Azure'];let wi=0,ci=0,del=false;
const typed=document.querySelector('#typed');
function type(){const w=words[wi];ci=del?ci-1:ci+1;typed.textContent=w.slice(0,ci);let t=del?50:85;if(!del&&ci===w.length){del=true;t=1050}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=220}setTimeout(type,t)}type();

const theme=document.querySelector('#themeBtn');
const saved=localStorage.getItem('portfolio-theme');
if(saved==='light')setLight(true);
theme.addEventListener('click',()=>setLight(!document.body.classList.contains('light')));
function setLight(light){document.body.classList.toggle('light',light);document.documentElement.style.setProperty('--bg',light?'#f4f7fb':'#07111f');document.documentElement.style.setProperty('--surface',light?'#ffffff':'#0d1929');document.documentElement.style.setProperty('--surface2',light?'#edf2f8':'#112035');document.documentElement.style.setProperty('--text',light?'#102033':'#edf4ff');document.documentElement.style.setProperty('--muted',light?'#5c6d80':'#91a2b8');theme.textContent=light?'☀':'☾';localStorage.setItem('portfolio-theme',light?'light':'dark')}

document.querySelector('#year').textContent=new Date().getFullYear();
window.addEventListener('resize',()=>{if(innerWidth>800)nav.classList.remove('open')});
