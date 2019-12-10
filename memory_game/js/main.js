const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
let cardOne;
let cardTwo;

cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} 
	else {
		alert('Sorry, try again.');
	} 
}

flipped(cardOne);
flipped(cardsInPlay[0]);
flipped(cardsInPlay[1]);
flipped(cards);

function flipped(card) {
	var flippedMsg = 'User flipped ';
	console.log(flippedMsg + card);
}