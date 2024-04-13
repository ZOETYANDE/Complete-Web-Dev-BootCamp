// let arr = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
// arr.forEach(function (item) {
//     document.querySelector(`.${item}`).addEventListener('click', function () {
//         alert("I got clicked");
//     })
// });


// On Button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        let buttonInnerHtml = this.innerHTML;

        playSoundOn(buttonInnerHtml);

    });
}

// On key press

document.addEventListener("keypress", function (event) {
    playSoundOn(event.key);
});


// Function to be executed when the key or button is pressed is pressed
function playSoundOn(key){
    
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            let tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            let tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            let tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break
        default:
            console.log(buttonInnerHtml);
            break;
    }
}