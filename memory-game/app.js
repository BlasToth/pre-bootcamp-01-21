const gameContainer = document.querySelector('#game-container');
const background = [
    {
        name: "apple",
        img: "images/apple.png"
    },
    {
        name: "apple",
        img: "images/apple.png"
    },
    {
        name: "banana",
        img: "images/banana.png"
    },
    {
        name: "banana",
        img: "images/banana.png"
    },
    {
        name: "fig",
        img: "images/fig.png"
    },
    {
        name: "fig",
        img: "images/fig.png"
    },
    {
        name: "lemon",
        img: "images/lemon.png"
    },
    {
        name: "lemon",
        img: "images/lemon.png"
    },
    {
        name: "mango",
        img: "images/mango.png"
    },
    {
        name: "mango",
        img: "images/mango.png"
    },
    {
        name: "pear",
        img: "images/pear.png"
    },
    {
        name: "pear",
        img: "images/pear.png"
    }   
  ];

randomArrayShuffle(background);

var cardsClicked = [];
var cardsClickedId = [];
console.log(cardsClicked);
var cardsWon = [];

function createBoard() {
    for (let i = 0; i < background.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    }
}

function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsClickedId[0];
    const optionTwoId = cardsClickedId[1];
    if (cardsClicked[0] === cardsClicked[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cardsWon.push(cardsClicked);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    cardsClicked = [];
    cardsClickedId = [];
}

createBoard();

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsClicked.push(background[cardId].name);
    cardsClickedId.push(cardId);
    this.setAttribute('src', background[cardId].img);
    if (cardsClicked.length === 2) {
        setTimeout(checkForMatch, 600);
    }
}



function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  