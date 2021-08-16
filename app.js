let cardsArr = [];
let summ = 0;
// let isActiveButton = false;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let startGameButton = document.querySelector("#startGameBtn");
startGameButton.addEventListener("click", startGame);

let newCardButton = document.querySelector("#newCardBtn").addEventListener("click", newCard);
let statusMessage = document.querySelector("#message-el");
let allCards = document.querySelector("#cards-el");
let summOfCards = document.querySelector("#sum-el");

function startGame() {
    cardsArr = [];
    isAlive = true;
    allCards.innerText = "Cards: ";
    let card1 = randomNumber();
    let card2 = randomNumber();
    cardsArr.push(card1);
    cardsArr.push(card2);
    summ = card1 + card2;
    renderGame()
}

function randomNumber() {
  let number = Math.floor( Math.random()*13 ) + 1
  if (number > 10) {
      return 10
  } else if (number === 1) {
      return 11
  } else {
      return number
  }
}

function renderGame() {
  isActiveButton = true;
  if (summ <= 20) {
    message = "Do you  want to draw a new card?";
  } else if (summ === 21) {
    message = "Wohoo! You got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  statusMessage.innerText = message;
  allCards.innerText = "Cards: ";
  for (let i = 0; i < cardsArr.length; i++) {
    allCards.textContent += cardsArr[i] + " ";
      
  }
  summOfCards.textContent = "Sum: " + summ;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let otherCard = randomNumber();
    cardsArr.push(otherCard);
    summ += otherCard;
    renderGame();
  } else {
      console.error("Start game first!!!");
  }
}
