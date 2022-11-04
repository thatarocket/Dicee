let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");
let result = "none";

if(randomNumber1 > randomNumber2) {
    result = "Player 1 wins!";
} else if(randomNumber2 > randomNumber1) {
    result = "Player 2 wins!";
}
else {
    result = "Draw!";
}

document.querySelector("h1").innerHTML = result;