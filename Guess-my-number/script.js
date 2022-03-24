'use strict';
document.querySelector('.guess').value = 0;
// generating a random number between 1 and 20
let RANDOM_GENERATED_NUMBER = Math.floor(Math.random() * 20) + 1;
// console.log(RANDOM_GENERATED_NUMBER);

// document query selected part
const MESSAGE = document.querySelector('.message');
const GENERATED_NUMBER_AREA = document.querySelector('.number');
const HIGH_SCORE = document.querySelector('.highscore');
const SCORE = document.querySelector('.score');
const HEADING = document.querySelector('h1');
const CHECK = document.querySelector('.check');
const AGAIN = document.querySelector('.again');

// score and highScore initialization
let score = 10;
let highScore = 0;

// adding event listener in check buttmvfcon
CHECK.addEventListener('click', function () {
    // initializing guessed number of user from document
    // type-casting to Number data type as it is string by default
    const GUESS_NUM = Number(document.querySelector('.guess').value);
    // console.log(GUESS_NUM); // just for checking values

    // when guess is not entered
    if (!GUESS_NUM || typeof GUESS_NUM != 'number') {
        MESSAGE.textContent = 'No Number Entered 🚫';
    }
    // when guess is not in range of 1 and 20
    else if (GUESS_NUM < 1 || GUESS_NUM > 20) {
        MESSAGE.textContent = '🌝 Enter Number between 1 and 20!!';
    }
    // when guess is correct, i.e. equal to random number generated
    else if (GUESS_NUM === RANDOM_GENERATED_NUMBER) {
        MESSAGE.textContent = '🥳 Correct Guess!';
        GENERATED_NUMBER_AREA.textContent = RANDOM_GENERATED_NUMBER;
        // make the background-color green for victory
        document.querySelector('body').classList.remove('black');
        document.querySelector('body').classList.add('green');
        // and also increase the width of container
        GENERATED_NUMBER_AREA.style.width = '30rem';
        // if highscore is less than current score, replace hs with score
        highScore = score > highScore ? score : highScore;
        HIGH_SCORE.textContent = highScore;
    }
    // when guess is not correct
    else {
        if (score > 1) { // only operate when score is higher than 1.
            // when guess is high.
            if (GUESS_NUM > RANDOM_GENERATED_NUMBER) {
                MESSAGE.textContent = '📈 Too High!';
            }
            else {// when guess is low.
                MESSAGE.textContent = '📉 Too Low!';
            }
            score--; // decrement the score variable
            SCORE.textContent = score; // and display the decremented score in respective dom
        }
        else {
            // when you run out of chances. // you lose the game
            MESSAGE.textContent = '😢 You lost the Game!';
            // change the background Color to red to specify you lost // add class 'red'
            document.querySelector('body').classList.add('red');
            GENERATED_NUMBER_AREA.style.width = '30rem';
            HEADING.textContent = 'Play Again! The number was: ';
            // display the random number that was generated.
            GENERATED_NUMBER_AREA.textContent = RANDOM_GENERATED_NUMBER;
        }
    }
});

// again button click reinitializes all the initial values
AGAIN.addEventListener('click', function () {
    // remove the class green background or red bg
    document.querySelector('body').classList.remove('green');
    document.querySelector('body').classList.remove('red');
    // then add black background like the initial bg color
    document.querySelector('body').classList.add('black');
    // reinitialize the score value to zero and show it in the document
    score = 10;
    SCORE.textContent = score;
    // the area that showed guessed number is again initialized to '?'
    GENERATED_NUMBER_AREA.textContent = '?';
    // reinitialize the width of answer showing div
    GENERATED_NUMBER_AREA.style.width = '15rem';
    // make new random number
    RANDOM_GENERATED_NUMBER = Math.floor(Math.random() * 20) + 1;
    MESSAGE.textContent = 'Start guessing...';
    document.querySelector('.guess').value = 0;
    // highscore is not re-initialized as the highscore must be the largest value 
});