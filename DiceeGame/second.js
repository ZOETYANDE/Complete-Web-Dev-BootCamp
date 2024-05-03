
function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    
    let player1 = document.querySelector('img.img1');
    let player2 = document.querySelector('img.img2');
    let winnerFlag = document.querySelector('h1');
    let timeout = 1000;

    player1.setAttribute('src', `./images/dice${randomNumber1}.png`);
    
    setTimeout(() => {
        player2.setAttribute('src', `./images/dice${randomNumber2}.png`);
    }, timeout);
    

    setTimeout(() => {
        if(randomNumber1 > randomNumber2){
            winnerFlag.innerText = "Player 1 Wins";
        }
        else if(randomNumber1 < randomNumber2){
            winnerFlag.innerText = "Player 2 Wins"
        }
    
        else{
            winnerFlag.innerText = "Draw";
        }
    }, timeout);

    clearTimeout;
}

document.addEventListener('click', rollDice);