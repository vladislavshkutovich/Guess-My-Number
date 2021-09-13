"use strict";

// set the random secret number and starter score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

// wrapping DOM manipulations in functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// realize the "Check!" button adding an event listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when here is no input
  if (!guess) {
    displayMessage("⛔ No number...");

    // when the player win
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // +disable check button after winning
    document.querySelector(".check").disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;

      // case when the score is over
    } else {
      displayMessage("😭 You lost the game!");
      document.querySelector("body").style.backgroundColor = "#d84f4f";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// realize the button "Again!" to reset game to start
document.querySelector(".again").addEventListener("click", function () {
  // restore initial values of variables
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restore initial HTML elements
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  // +undisable check button after starting new game
  document.querySelector(".check").disabled = false;
});
