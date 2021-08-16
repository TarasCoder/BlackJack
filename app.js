let card1 = randomNumber();
let card2 = randomNumber();

let cardsArr = [card1, card2];
let summ = card1 + card2;
let isActiveButton = false;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let startGameButton = document.querySelector("#startGameBtn");
startGameButton.addEventListener("click", startGame);

let newCardButton = document.querySelector("#newCardBtn").addEventListener("click", newCard);
let statusMessage = document.querySelector("#message-el");
let allCards = document.querySelector("#cards-el");
let summOfCards = document.querySelector("#sum-el");

function startGame() {
    renderGame()
    startGameButton.setAttribute("disabled", "disabled");
    startGameButton.style.backgroundColor = "gray"
}

function randomNumber() {
  let number = Math.floor(Math.random() * 11) + 1;
  if (number < 2) {
    number++;
  }
  return number;
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
  if (isActiveButton) {
    let otherCard = randomNumber();
    cardsArr.push(otherCard);
    summ += otherCard;
    renderGame();
  } else {
      console.error("Start game first!!!");
  }
}
