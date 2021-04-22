const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 10;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `
  ${xWalk * -1}px ${yWalk * -1}px 1px rgba(0,0,0,0.25), 
  ${(xWalk * -1) * 2}px ${(yWalk * -1) * 2}px 2px rgba(0,0,0,0.20), 
  ${(xWalk * -1) * 3}px ${(yWalk * -1) * 3}px 4px rgba(0,0,0,0.15), 
  ${(xWalk * -1) * 4}px ${(yWalk * -1) * 4}px 8px rgba(0,0,0,0.10),
  ${(xWalk * -1) * 5}px ${(yWalk * -1) * 5}px 16px rgba(0,0,0,0.05)
  `;

  text.style.transform = `translate(${(xWalk * -1) * 3}px, ${(yWalk * -1) * 3}px)`

  text.style.color = `hsl(${((xWalk + yWalk) * 100) / 2}, 100%, 50%)`
}

hero.addEventListener('mousemove', shadow)