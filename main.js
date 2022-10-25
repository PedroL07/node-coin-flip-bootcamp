let myArray = ["Head", "Tales"];

document.querySelector("button").addEventListener("click", coinToss);



function coinToss() {
    let botCoin = myArray[Math.floor(Math.random() * myArray.length)];

    document.querySelector('h2').innerText = botCoin
}
