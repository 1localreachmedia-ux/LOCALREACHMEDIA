const header=document.querySelector('.header');
const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
const onScroll=()=>header?.classList.toggle('scrolled',scrollY>24);
onScroll();addEventListener('scroll',onScroll,{passive:true});
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revealObserver.unobserve(e.target);}}),{threshold:.14,rootMargin:'0px 0px -35px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
  const parallax=document.querySelector('.parallax');
  addEventListener('scroll',()=>{if(parallax){const r=parallax.parentElement.getBoundingClientRect();parallax.style.transform=`translate3d(0,${r.top*-.08}px,0) scale(1.06)`;}},{passive:true});
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-3px)`;});
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}

const counted=new WeakSet();
const counterObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting||counted.has(e.target))return;counted.add(e.target);const el=e.target,target=Number(el.dataset.target||0),start=performance.now(),dur=900;const tick=t=>{const p=Math.min((t-start)/dur,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);}),{threshold:.7});
document.querySelectorAll('.counter').forEach(el=>counterObserver.observe(el));

document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{const sel=document.querySelector('#placement');if(sel){sel.value=a.dataset.plan;setTimeout(()=>sel.focus(),500);}}));
