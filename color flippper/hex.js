const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// #f15025 - hex color.

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

  let hexColor = '#';
  for(let i = 0; i < 6; i++)
  {
   
    hexColor += hex[getHexNumber()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.innerHTML = hexColor;
 })

 const getHexNumber = () => {
  return Math.floor(Math.random() * hex.length);
 }
