
let cards = [
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

let cardsInPlay = [];


function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}else {
			alert("Sorry, try again.");
		}
}


function flipCard(cardId){
	console.log("user flipped " + cards[cardId].rank);
	console.log("user flipped " + cards[cardId].cardImage);
	console.log("user flipped " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2){
		checkForMatch();		
	}
};

flipCard(0);
flipCard(2);

