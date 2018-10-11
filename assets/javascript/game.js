var playerScore = 0;
var crystalsValue = [];
var wins = 0;
var losses = 0;

//Assigning random value from 19 to 120
crystalsValue = Math.floor(Math.random() * 100) + 19;
$("#crystalsValue").html(crystalsValue);
//console.log(crystalsValue);

//Crystals random value from 1 to 12
var blueCrystal = Math.floor(Math.random() * 13);
var greenCrystal = Math.floor(Math.random() * 13);
var purpleCrystal = Math.floor(Math.random() * 13);
var redCrystal = Math.floor(Math.random() * 13);

// Reset game
function reset() {
    crystalsValue = Math.floor(Math.random() * 100) + 19;
    $("#crystalsValue").html(crystalsValue);
    blueCrystal = Math.floor(Math.random() * 13);
    greenCrystal = Math.floor(Math.random() * 13);
    purpleCrystal = Math.floor(Math.random() * 13);
    redCrystal = Math.floor(Math.random() * 13);
    playerScore = 0;
    $("#playerScore").html(playerScore);
}

//Display wins
function winner() {
    alert("Congrats, You Won!");
    wins++;
    $("#wins").html(wins);
}
//Display losses
function loser() {
    alert("Sorry, Try Again!");
    losses++;
    $("#losses").html(losses);
}

//Generating the player score
//This will capture the player's score when they click on a crystal
$(".blue").on("click", function () {
    playerScore = playerScore + blueCrystal;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").html(playerScore);
    //Win & Lose conditions
    if (playerScore === crystalsValue) {
        winner();
    }
    else if (playerScore > crystalsValue) {
        loser();
    }
})
$(".green").on("click", function () {
    playerScore = playerScore + greenCrystal;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").html(playerScore);
    //Win & Lose conditions
    if (playerScore === crystalsValue) {
        winner();
    }
    else if (playerScore > crystalsValue) {
        loser();
    }
})
$(".purple").on("click", function () {
    playerScore = playerScore + purpleCrystal;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").html(playerScore);
    //Win & Lose conditions
    if (playerScore === crystalsValue) {
        winner();
    }
    else if (playerScore > crystalsValue) {
        loser();
    }
})
$(".red").on("click", function () {
    playerScore = playerScore + redCrystal;
    console.log("New playerScore= " + playerScore);
    $("#playerScore").html(playerScore);
    //Win & Lose conditions
    if (playerScore === crystalsValue) {
        winner();
    }
    else if (playerScore > crystalsValue) {
        loser();
    }
})

