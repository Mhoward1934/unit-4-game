var playerScore = [];
var randomValue = [];
var wins = 0;
var losses = 0;

//Assigning random value
randomValue = Math.floor(Math.random() * 100) + 19;
document.getElementById("randomValue").innerHTML = randomValue;
//console.log(randomValue);

//Crystals random value
var blueCrystal = Math.floor(Math.random() * 13);
var greenCrystal = Math.floor(Math.random() * 13);
var purpleCrystal = Math.floor(Math.random() * 13);
var redCrystal = Math.floor(Math.random() * 13);