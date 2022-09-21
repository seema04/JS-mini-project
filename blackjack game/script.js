let player = {
  name: 'Seema',
  chips: 0,
}

let card = [];
let sum = 0;

let hasblackJack = false;
let isAlive = false;

let chipsEl = document.querySelector('#chips-el');

let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el');

const startGame = () => {
  if(sum === 0)
  {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    card.push(firstCard);
    card.push(secondCard);
  
    sum = firstCard + secondCard;
    renderGame();
  }
  else if(hasblackJack === true || isAlive === false)
  {
    sum = 0;
    card = [];
    sumEl.textContent = "Sum : " + 0 ;
    cardEl.textContent = "Cards : " + 0; 
    messageEl.textContent = "Play another round ?";
  }
}

const getRandomCard = () => {
  let randomcard = Math.floor(Math.random() * 13) + 1;

  if(randomcard === 1)
  return 11;
  else if(randomcard > 10)
  return 10;
  else
  return randomcard;
}

const renderGame = () => {

  cardEl.textContent = "Cards : ";
 for(let i = 0; i < card.length; i++)
 {
  cardEl.textContent += card[i] + ' ';
 }

  sumEl.textContent = "Sum : "+ sum;

 if(sum < 21)
 {
  messageEl.textContent = 'Want to pick another card ? 🙂';
 }
 else if(sum === 21)
 {
  messageEl.textContent = "Wohooo! you've got a blackjack 🥳 ";
  hasblackJack = true;
  player.chips = 200;
  chipsEl.textContent = 'Chips won : '+ player.chips;

 }
 else
 {
  messageEl.textContent = 'Opps you are out of the game !😥 click start game to play another round';
  isAlive = false;
 }

}

const newCard = () => {
  if(isAlive === true && hasblackJack === false)
  {
    let newcard = getRandomCard();
    card.push(newcard);
    sum += newcard;
    renderGame();
  }
  // else if(isAlive === false || hasblackJack === true)
  // {
  //   sum = 0;
  //   card = [];
  //   sumEl.textContent = "Sum : " + 0 ;
  //   cardEl.textContent = "Cards : " + 0; 
  //   messageEl.textContent = "Play another round ?";
  // }
 
}
