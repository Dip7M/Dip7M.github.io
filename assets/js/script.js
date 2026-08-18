const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const words=['.NET','Angular','APIs','SQL','Azure'];let wi=0,ci=0,del=false;
const typed=document.querySelector('#typed');
function type(){const word=words[wi];ci=del?ci-1:ci+1;typed.textContent=word.slice(0,ci);let delay=del?55:90;if(!del&&ci===word.length){delay=1100;del=true}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;delay=250}setTimeout(type,delay)}type();

const theme=document.querySelector('#theme');
theme.addEventListener('click',()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');document.documentElement.style.setProperty('--bg',light?'#f4f7fb':'#07111f');document.documentElement.style.setProperty('--surface',light?'#fff':'#0d1929');document.documentElement.style.setProperty('--surface2',light?'#edf2f8':'#101f32');document.documentElement.style.setProperty('--text',light?'#102033':'#edf4ff');document.documentElement.style.setProperty('--muted',light?'#5c6d80':'#8fa1b7');theme.textContent=light?'☀':'☾'});

document.querySelector('#year').textContent=new Date().getFullYear();
