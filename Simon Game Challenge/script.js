// create a list of colors of button
let buttonColors = ['red', 'blue', 'green', 'yellow']; // matching to the colors of boxes
//create an empty gamePattern array to store the pattern in which colors are generated.
let gamePattern = new Array();
// array to store pattern of user clicked colors
let userClickedPattern = new Array();

let level = 0; // variable to store the count of levels // useful in restarting game when wrong
let started = false; // variable to check if key has been pressed or not during the first interaction

let heading = $('#level-title'); // selecting heading from the document and storing it in heading variable

// function to check if key has been pressed or not at first to start the game
$(document).on('keydown', function (e) {
    if (e.key === 'Enter') { // check if the entered key is 'Enter'
        if (!started) { // if enter is pressed again after the game started, it must not goto next level
            nextSequence(); // 
            started = true;
        }
    }
});

$(".btn").click(function () {
    let userChosenColor = $(this).attr('id');
    // console.log(userChosenColor)
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animate(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        heading.text('Game Over, Press Enter to Restart')
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);
        startOver();
    }
}

function nextSequence() {
    level++;
    userClickedPattern = [];
    heading.text(`Level ${level}`)

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animate(color) {
    $(`#${color}`).addClass('pressed');
    setTimeout(function () {
        $(`#${color}`).removeClass('pressed');
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}