let p = document.querySelector('p')
    btn = document.querySelector('button');


btn.style.position = 'absolute'
btn.style.top = '50%'
btn.style.left = '50%'
btn.style.fontSize = '36px';
btn.style.transform = 'translateX(-50%)';

p.style.position = 'absolute';
p.style.top = '40%';
p.style.left = '50%';
p.style.transform = 'translateX(-50%)';
p.style.fontSize = '36px';


function randomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(randomColor());

btn.addEventListener('click', function(){
  p.textContent = randomColor();
  let color = randomColor();
  document.body.setAttribute('style', 'background-color: ' + color)
})