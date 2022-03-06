let heading = document.querySelector("h1");

function roll() {
    // generating random numbers from 1 to 6 to change the dice numbers for winner
    // generating separately as we need two different for both players
    let player1Dice = Math.floor(Math.random() * 6) + 1;
    let player2Dice = Math.floor(Math.random() * 6) + 1;

    // get element of storing image for manipulation after random number is generated.
    let player1Img = document.querySelector(".img1");
    let player2Img = document.querySelector(".img2");

    document.querySelectorAll("p")[0].classList.remove("visible");
    document.querySelectorAll("p")[1].classList.remove("visible");

    // for player 1
    // log in the console to check if the generated number and dice number match 

    console.log(`Player1 dice: ${player1Dice}`); // just for checking
    // changing the source of the image according to the random number generated and displaying in the browser.
    player1Img.src = `images/dice${player1Dice}.png`;

    // for player 2
    // log in the console to check if the generated number and dice number match 
    console.log(`Player2 dice: ${player2Dice}`);
    // changing the source of the image according to the random number generated and displaying in the browser.
    player2Img.src = `images/dice${player2Dice}.png`;

    if (player1Dice > player2Dice) {
        heading.innerHTML = `Player1 Wins!!🏆`;
    }
    else if (player1Dice < player2Dice) {
        heading.innerHTML = `Player2 Wins!!🏆`;
    }
    else {
        heading.innerHTML = "Draw!!📍";
    }
}
