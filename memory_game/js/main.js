const back = "images/back.png";
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

const cardsInPlay = [];

const gameBoard = document.querySelector('#game-board');
const gameResetButton = document.querySelector('#game-reset');

let roundActive = true;

let score = 0;

function checkForMatch() {
	if(cardsInPlay.length === 2 && roundActive) {
		roundActive = false;
		if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert('You found a match!');
			score++;
		} 
		else {
			alert('Sorry, try again.');
			score--;
		} 
		updateScore();
		showPlayAgainButton();
	}
}

function createBoard() {
	gameBoard.innerHTML = "";
	for (var i = cards.length - 1; i >= 0; i--) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', back);
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

function showPlayAgainButton() {
	gameResetButton.style.visibility = 'visible';
}

function shuffle(array) {
	var arr =[];
	for (var i = array.length - 1; i >= 0; i--) {
		var random = Math.floor(Math.random()*4);
		switch(random) {
			case 0: arr.push(array.shift());
			break;
			case 1: arr.push(array.pop());
			break;
			case 2: arr.unshift(array.shift());
			break;
			case 3: arr.unshift(array.pop());
			break;
			default: break;
		}
	}
	for (var i = arr.length - 1; i >= 0; i--) {
		cards[i] = arr[i]
	}
}

function startNewGame() {
	roundActive = true;
	cardsInPlay.length=0;
	gameResetButton.style.visibility = 'hidden';
	shuffle(cards);
	createBoard();
}

function updateScore() {
	document.querySelector('#score').textContent = score;
}

createBoard();
updateScore();
gameResetButton.addEventListener('click', startNewGame);