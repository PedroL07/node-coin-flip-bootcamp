let myArray = ["Head", "Tail"];

// document.querySelector("button").addEventListener("click", coinToss);
document.querySelector(".head").addEventListener("click", coinToss);
document.querySelector(".tails").addEventListener("click", coinTossTwo);

// function coinToss() {
//   let botCoin = myArray[Math.floor(Math.random() * myArray.length)];

//   document.querySelector("h2").innerText = botCoin;
// }

function coinToss() {
  let botCoin = myArray[Math.floor(Math.random() * myArray.length)];
  document.querySelector("h2").innerText = botCoin;
  checkWhoWon(botCoin, "head");
}

function coinTossTwo() {
  let botCoin = myArray[Math.floor(Math.random() * myArray.length)];
  document.querySelector("h2").innerText = botCoin;
  checkWhoWon(botCoin, "tail");
}

function checkWhoWon(botCoin, playersCoin) {
  if (botCoin == "Head" && playersCoin == "head") {
    document.querySelector("h4").innerText = "You guessed corretly";
  } else if (botCoin == "Head" && playersCoin == "tail") {
    document.querySelector("h4").innerText = "Try Again Loser";
  } else if (botCoin == "Tail" && playersCoin == "tail") {
    document.querySelector("h4").innerText = "You guessed corretly";
  } else if (botCoin == "Tail" && playersCoin == "head") {
    document.querySelector("h4").innerText = "Try Again Loser";
  }
}
