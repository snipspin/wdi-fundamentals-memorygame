const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
let cardOne;
let cardTwo;

cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

checkForMatch(cardsInPlay);


flipped(cardOne);
flipped(cardsInPlay[0]);
flipped(cardsInPlay[1]);
flipped(cards);

function checkForMatch(cardsToCheckArray) {
	if(cardsToCheckArray.length === 2) {
		if(cardsToCheckArray[0] === cardsToCheckArray[1]) {
			alert('You found a match!');
		} 
		else {
			alert('Sorry, try again.');
		} 
	}
}

function flipped(card) {
	var flippedMsg = 'User flipped ';
	console.log(flippedMsg + card);
}