// Creating random numbers

// console.log(playerOne);
// console.log(playerTwo);

function rollDice(){
    let randOne = Math.floor(Math.random() * 6 + 1);
    let randTwo = Math.floor(Math.random() * 6 + 1);

    const game_one = document.querySelector('img.img1');
    const game_two = document.querySelector("img.img2");
    let flag = 0;
    

    if(randOne > randTwo && flag == 0){
        
        if(randOne == 2 || randTwo == 1){
            game_one.setAttribute("src", "./images/dice2.png");
            game_two.setAttribute("src", "./images/dice1.png");
        }
        else if(randOne == 3 || randTwo == 2){
            game_one.setAttribute("src", "./images/dice3.png");
            game_two.setAttribute("src", "./images/dice2.png");
        }
        else if(randOne == 4 || randTwo == 3){
            game_one.setAttribute("src", "./images/dice4.png");
            game_two.setAttribute("src", "./images/dice3.png");
        }
        else if(randOne == 5 || randTwo == 4) {
            game_one.setAttribute("src", "./images/dice5.png");
            game_two.setAttribute("src", "./images/dice4.png");
        }
        else {
            flag = 1;
        }
    }
    else if(randOne < randTwo){

        if(randOne == 1 || randTwo == 2){
            game_one.setAttribute("src", "./images/dice1.png");
            game_two.setAttribute("src", "./images/dice2.png");
        }
        else if(randOne == 2 || randTwo == 3){
            game_one.setAttribute("src", "./images/dice2.png");
            game_two.setAttribute("src", "./images/dice3.png");
        }
        else if(randOne == 3 || randTwo == 4){
            game_one.setAttribute("src", "./images/dice3.png");
            game_two.setAttribute("src", "./images/dice4.png");
        }
        else if(randOne == 4 || randTwo == 5) {
            game_one.setAttribute("src", "./images/dice4.png");
            game_two.setAttribute("src", "./images/dice5.png");
        }
        else {
            flag = 1;
        }
    }

    else {
        console.log("Equality");
    }
}

document.addEventListener("click", rollDice)