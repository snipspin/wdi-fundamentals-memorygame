const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
		} 
		else {
			alert('Sorry, try again.');
		} 
		cardsInPlay.length=0;
	}
}

function flipCard(cardId) {
	console.log(`User flipped ${cards[cardId]}`);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);

flipCard(3);
flipCard(2);