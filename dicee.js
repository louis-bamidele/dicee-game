const x = document.getElementById("btn");
x.addEventListener("click", diceGame);
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const year = document.getElementById("year");

year.textContent = currentYear;

var images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
function diceGame() {
  // set the random numbers generators for f and s to generate random numbers from 0-6
  var f = Math.random();
  var f = Math.floor(f * 6);
  var s = Math.random();
  var s = Math.floor(s * 6);

  // using the random numbers to pick random dice from the images array
  var firstDice = images[f];
  var secondDice = images[s];

  // displaying the selected image to the players
  document.querySelector(".img1").setAttribute("src", firstDice);
  document.querySelector(".img2").setAttribute("src", secondDice);

  // a condition to check which player won and if it was a tie
  if (f > s) {
    document.querySelector(".heading").innerHTML =
      " Player One is the winner.  🚩";
  } else if (f < s) {
    document.querySelector(".heading").innerHTML =
      " Player Two is the winner.  🚩";
  } else if (f === s) {
    document.querySelector(".heading").innerHTML = "It's a tie, play again! ";
  }
}
