
let cards=[]
let sum = 0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    name: "Ved",
    chips: 145
}
let playerEl=document.getElementById("player-el")
 playerEl.textContent=player.name+": "+" $ "+player.chips

function startGame()
{
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1
    if(randomCard>10)
    {
        return 10 
    }
    else if(randomCard===1)
    {
        return 11;
    }
    else{
        return randomCard
    }
}
function renderGame()
{
    cardsEl.textContent= "Cards: " 
    for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+ sum
    if(sum<=20)
    {
        message="Do you want to pick another card?"
    }
    if(sum==21)
    {
        message="You've got the BLACK JACK!!"
        hasBlackJack=true
    }
    if(sum>21)
    {
        message="You are out of the game!!"
        isAlive=false
    }
   messageEl.innerText=message
}
function newCard()
{
    if(isAlive===true && sum!=21){
    let thirdCard=getRandomCard()
   
    cards.push(thirdCard)
    sum+=thirdCard 
    renderGame()
}
}