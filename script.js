var tl = gsap.timeline();

const all = document.querySelector('.all');
const open = document.querySelector('nav i');
const close = document.querySelector('.all i');

tl.to(all, {
  right: 0,
  duration: 0.9,
});

tl.from('.link h4', {
  x: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from(close, {
  scale: 0,
  opacity: 0,
  duration: 0.5,
});

tl.pause();

open.addEventListener('click', () => {
  tl.play();
});
close.addEventListener('click', () => {
  tl.reverse();
});
