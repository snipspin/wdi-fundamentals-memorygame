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

function checkForMatch() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert('You found a match!');
		} 
		else {
			alert('Sorry, try again.');
		} 
		cardsInPlay.length=0;
	}
}

function createBoard() {
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
	console.log(`cardID: ${cardId}`);
	console.log(`User flipped ${cards[cardId].rank}`);
	console.log(`Imagepath: ${cards[cardId].cardImage} suit: ${cards[cardId].suit}`);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

createBoard();