// Press a key to start the game;

// $(document).on("keypress", startGame);

// function startGame(){
//     $('h1').text('Level 1');
//     $('.btn').on("click", function(){
//         var sound = new Audio("./sounds/green.mp3");
//         sound.play();

//         console.log((sound));
//     })
// }

const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    // animatePress(randomChosenColour);
}

function playSound(name){
    let audio = new Audio("./sounds/"+name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(() => {
        $("."+currentColor).removeClass("pressed");
    }, 100);
}
