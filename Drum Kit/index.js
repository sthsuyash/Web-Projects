let button = document.querySelectorAll(".drum");

for (let each of button) {
    each.addEventListener("click", function () {
        click(this.innerHTML);
        animation(this.innerHTML);
    });
}
document.addEventListener("keydown", (event) => {
    click(event.key);
    animation(event.key);
});

function click(key) {
    console.log(key);
    switch (key) {
        case 'a':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'd':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'f':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        default:
            // do nothing
            break;
    }
}

const animation = (key) => {
    let active = document.querySelector(`.${key}`);
    active.classList.toggle("pressed");
    setTimeout(() => active.classList.toggle("pressed"), 150);
}