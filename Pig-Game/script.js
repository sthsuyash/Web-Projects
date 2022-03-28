'use strict';

/* ********* element selection from DOM ********* */
const SCORE0 = document.getElementById('score--0');
const SCORE1 = document.getElementById('score--1');
const DICE = document.querySelector('.dice');
const CURRENT0 = document.getElementById('current--0');
const CURRENT1 = document.getElementById('current--1');
const PLAYER0 = document.querySelector('.player--0');
const PLAYER1 = document.querySelector('.player--1');
const NEW_GAME = document.querySelector('.btn--new')
const ROLL = document.querySelector('.btn--roll');
const HOLD = document.querySelector('.btn--hold');
const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const CLOSE_MODAL = document.querySelector('.close-modal');

/* ******************************* */

/* ********* declaring the variables ********* */
let currentScore, activePlayer, playing;
let scores = new Array();

/* ******************************* */

/* ********* functions ********* */
// function to switch player
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // changes the initial current text content to 0
    activePlayer = (activePlayer === 1) ? 0 : 1; // if active player is 1, change it to 0 and vice versa
    currentScore = 0; // change the current score to 0 as it needs to be reset for next player
    PLAYER0.classList.toggle('player--active');
    PLAYER1.classList.toggle('player--active');
}

// function to set initial values
function initialize() {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;
    // change the text content of current to 0
    CURRENT0.textContent = 0;
    CURRENT1.textContent = 0;
    // remove any extra classes that was defined after game finishes
    PLAYER0.classList.remove('player--winner');
    PLAYER1.classList.remove('player--winner');
    // make player 1 active again as the game is reset and remove active class from second player if contains
    PLAYER0.classList.add('player--active');
    PLAYER1.classList.remove('player--active');
    // initializing both players' score to be 0
    SCORE0.textContent = 0;
    SCORE1.textContent = 0;
    // adding class hidden which hides the dice area
    DICE.classList.add('hidden');
}

/* ******************************* */

// functions for modal windows //
const ADD = function () {
    // unhides the modal window and overlay part after the game is finished to show winner.
    MODAL.classList.add('hidden');
    OVERLAY.classList.add('hidden');
}

const REMOVE = () => {
    // hides the modal class and overlay
    MODAL.classList.remove('hidden');
    OVERLAY.classList.remove('hidden');
    // changes the heading according to winner
    document.querySelector('h1').textContent = `Player ${activePlayer + 1} wins!!🥇`;
}

/* event listener for clicking esc, close button and outside modal window to close the modal */
CLOSE_MODAL.addEventListener('click', ADD);
OVERLAY.addEventListener('click', ADD);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !MODAL.classList.contains('hidden')) {
        ADD();
    }
});

/* ******************************* */

// calling initial function in the start of the page
initialize();

/* ********* event listerners ********* */

// rolling dice functionality
ROLL.addEventListener('click', (e) => {
    if (playing) {
        // generating random number for dice roll
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        // remove the class 'hidden' so that the dice can be displayed
        DICE.classList.remove('hidden');
        // update the dice image source and alt text according to the generated number
        DICE.src = `images/dice-${randomNumber}.png`;
        DICE.alt = `dice ${randomNumber}`;

        //check if the random generated number is 1 or not // as the player is switched automatically if 1 is rolled.
        // if not 1, keep rolling
        if (randomNumber !== 1) {
            currentScore += randomNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // SCORE0.textContent = Number(SCORE0.textContent) + random;

        } else { // if the generated number is 1, switch player
            switchPlayer();
        }
    }
});

// function to run when hold is clicked
HOLD.addEventListener('click', (e) => {
    if (playing) { // continue only if the game is still running, i.e, neither one has won the game
        scores[activePlayer] += currentScore; //score of current player is added to the current score and show that in DOM
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // if the score of any player becomes more than equal to 20, game stops and winner is shown.
        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`); // add the player--winner class in winner player
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); // remove the player--active class
            DICE.classList.add('hidden'); // hide the dice 
            REMOVE(); 

        }
        else {
            switchPlayer();
        }
    }
});

// function when new game button is clicked
NEW_GAME.addEventListener('click', initialize);

/* ******************************* */