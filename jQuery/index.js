$('h1').addClass("big-title margin-50");
$('button');

console.log($('h1').hasClass("margin-50"));

$('h1').text("Bye");
$("button").html("<em>Momo<em>");

$('h1').click(function(){
    $('h1').css('color', 'purple');
});

// Using Vanilla Js
// for(var i = 0; i < 5; i++){
//     document.querySelectorAll('button')[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "green";
//     })
// }


// Using jQuery
$("button").click(function () {
    $('h1').css("color", "indianred");
})

$('input').keypress(function(e) {
    let getKey = e.key;
    $("h1").text(getKey);
});

$("h1").on("mouseover", function(){
    $("h1").css('color', 'green')
});

// adding an element before the h1 element using before()
$("h1").before("<button>New before</button>");

// adding an element after the h1 element using append
$("h1").append("<button>New after</button>");

// adding an element inside the h1 element
$('h1').prepend("<button>Inside</button>");

//Removing elements using .remove() method
//$("button").remove();


// $('button').on("click", function() {
//     $("h1").hide();
// })

// $('button').on("click", function() {
//     $("h1").show();
// })

// $('button').on("click", function() {
//     $("h1").toggle();
// });

// $('button').on("click", function() {
//     $("h1").fadeOut();//fadeIn();
// });

// $('button').on("click", function() {
//     $("h1").fadeToggle();
// })

//slideUp(), slideDown()

// $('button').on("click", function() {
//     $("h1").slideToggle();
// })

// $('button').on("click", function() {
//     $("h1").animate({fontSize: 100, opacity: 0.5});
// })

$('button').on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5, fontSize: "15rem"});
})