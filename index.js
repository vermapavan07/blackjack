let person ={
    name: "Anand",
    coin: 3000
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.querySelector('#message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('card-el');
const personEl = document.getElementById("player-el");

personEl.innerText= person.name + ": $" + person.coin;

function getRandomCard(){
    let number = Math.floor(Math.random() *13 ) + 1 ;
    if (number === 1)
        return 11
    else if(number >=11)
        return 10
    else
        return number;
}



function startGame(){

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    randerGame()
}

function randerGame(){
    // this is hard coded code for display the card
    // cardsEl.innerText = "Cards: " + cards[0] + " " + cards[1];
    cardsEl.innerText = "Cards:"
    sumEl.innerText ="Sum: " + sum;
    for(let i =0; i<cards.length;i++)
        cardsEl.innerText = cardsEl.innerText +" " +cards[i];
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerText = message;
  
}

function newCard(){

    if(isAlive === true && hasBlackJack ===false)
    {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        randerGame()
    }
}
