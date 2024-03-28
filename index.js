let game = {
    name: "You",
    chips: 0
}
let cards = []
let sum = 0
let BlackJack = false
let Alive = false
let Notificati = ""
let message = document.getElementById("message-el")
let summ = document.getElementById("sum-el")
let cardss = document.getElementById("cards-el")
let gameEl = document.getElementById("gamer-el")

gameEl.textContent = game.name + ": Rs." + game.chips
let blackjackAudio = document.getElementById("blackjack-audio");

function RandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1;
    if (randomNumer > 10) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }
}

function startgame(){
    Alive = true
    let firstCard = RandomCard()
    let secondCard = RandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    alert("Game Started!");
    rendergame()
}
function rendergame(){
    cardss.textContent="Cards: "
    for(let i=0;i<cards.length;i++) 
        cardss.textContent += cards[i] +" "
    summ.textContent="Sum: "+sum
    if (sum < 21) {
        Notificati=("Do You Want Any Other Card")
    } else if(sum >= 21){
        if(sum === 21) {
            Notificati=("Ahh! You Got BlackJack")
            hasBlackJack = true
            blackjackAudio.play();
            alert("WOW!! You Got BlackJack")
            
            game.chips += 500;
            gameEl.textContent = game.name + ": Rs." + game.chips; 
        } else {
            Notificati=("Your Out Of The Game")
            Alive = false
            
        }
    }
    message.textContent= Notificati
}

function newcard(){
    if (Alive === true && BlackJack === false) {
        let card=RandomCard()
        sum += card
        cards.push(card)
        console.log(card)
        rendergame()
        if (sum > 21) {
            alert("Your sum exceeds 21. Your Out Of The Game!. Better Luck Next Time");
            Alive = false;
        }
    }
}
function resetgame() {
    cards = [];
    sum = 0;
    BlackJack = false;
    Alive = false;
    Notificati = "";
    message.textContent = "You Want To Play The Game"; 
    summ.textContent = "Sum: "; 
    cardss.textContent = "Cards: "; 
    game.chips = 0; 
    gameEl.textContent = game.name + ": Rs." + game.chips; 
}
