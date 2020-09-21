var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNum1 = randomNumber1;
var diceNum2 = randomNumber2;

if (diceNum1 === 1) {
  document.querySelector(".img1").src = "images/dice1.png";
} else if (diceNum1 === 2) {
  document.querySelector(".img1").src = "images/dice2.png";
} else if (diceNum1 === 3) {
  document.querySelector(".img1").src = "images/dice3.png";
} else if (diceNum1 === 4) {
  document.querySelector(".img1").src = "images/dice4.png";
} else if (diceNum1 === 5) {
  document.querySelector(".img1").src = "images/dice5.png";
} else if (diceNum1 === 6) {
  document.querySelector(".img1").src = "images/dice6.png";
}

if (diceNum2 === 1) {
  document.querySelector(".img2").src = "images/dice1.png";
}else if (diceNum2 === 2) {
  document.querySelector(".img2").src = "images/dice2.png";
}else if (diceNum2 === 3) {
  document.querySelector(".img2").src = "images/dice3.png";
}else if (diceNum2 === 4) {
  document.querySelector(".img2").src = "images/dice4.png";
}else if (diceNum2 === 5) {
  document.querySelector(".img2").src = "images/dice5.png";
}else if (diceNum2 === 6) {
  document.querySelector(".img2").src = "images/dice6.png";
}

if(diceNum1 > diceNum2){  // Player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}else if(diceNum2 > diceNum1){ // Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}else{  // Draw
  document.querySelector("h1").innerHTML = "Draw!"
}
