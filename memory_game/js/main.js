const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.jpg"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.jpg"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.jpg"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.jpg"
	}
];

const cardsInPlay = [];

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

function flipCard(cardId) {
	console.log(`User flipped ${cards[cardId].rank}`);
	console.log(`Imagepath: ${cards[cardId].cardImage} suit: ${cards[cardId].suit}`);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);

flipCard(3);
flipCard(2);