var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var radomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + radomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var radomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + radomDiceImage2;
var image2 = document.querySelectorAll("img")[0];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) { // Player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) { // Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else { // Draw
  document.querySelector("h1").innerHTML = "Draw!"
}
