const colors = ["#ABD3DE","#87805E","#B09B71","#D8CCA3","#407A51"];

const bodyEl = document.querySelector("body");
const bgButton = document.querySelector('#btn');
const currentColor = document.querySelector('.color');

let simpleEl = document.querySelector('#simple-el');

const bgChanger = () => {
  let i; 
  i = getRandomNumber();
  bodyEl.style.backgroundColor = colors[i];
  currentColor.textContent = colors[i];
}

const getRandomNumber = () => {
 return Math.floor(Math.random() * colors.length);
}

