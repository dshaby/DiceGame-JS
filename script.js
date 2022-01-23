var randomNumber1 = 1 + Math.floor(6 * (Math.random()));
//creating a random # between 1-6

var randomDiceImage1Source = "images/dice" + randomNumber1 + ".png";
// all 6 dice images ("images/dice#.png")

var firstImage = document.querySelectorAll("img")[0];
firstImage.setAttribute("src", randomDiceImage1Source);
// first dice spot will be filled with one of the six dice images

var randomNumber2 = 1 + Math.floor(6 * (Math.random()));

var randomDiceImage2Source = "images/dice" + randomNumber2 + ".png";

var secondImage = document.querySelectorAll("img")[1];
secondImage.setAttribute("src", randomDiceImage2Source);

//Changing h1 to display winner or tie
var h1Winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    h1Winner.textContent = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    h1Winner.textContent = "Player 2 Wins! 🚩"
} else {
    h1Winner.textContent = "Draw!"
}