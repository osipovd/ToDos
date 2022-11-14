const gameContainer = document.getElementById("game");

let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;
let notClicked = false;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");

    newDiv.classList.add(color);

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  if (notClicked) return;
  if (event.target.classList.contains("flipped")) return;

  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  if (!firstCard || !secondCard) {
    currentCard.classList.add("flipped");
    firstCard = firstCard || currentCard;
    secondCard = currentCard === firstCard ? null : currentCard;
  }

  if (firstCard && secondCard) {
    notClicked = true;
    let gif1 = firstCard.className;
    let gif2 = secondCard.className;


  if (gif1 === gif2) {
    cardsFlipped += 2;
    firstCard.removeEventListener("click", handleCardClick);
    secondCard.removeEventListener("click", handleCardClick);
    firstCard = null;
    secondCard = null;
    notClicked = false;
  } else {
    setTimeout(function() {
      firstCard.style.backgroundColor = "";
      secondCard.style.backgroundColor = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard = null;
      secondCard = null;
      notClicked = false;
    }, 1000);
  }
  }
  if (cardsFlipped === COLORS.length) alert ("You Lost!");
}
createDivsForColors (shuffledColors);
