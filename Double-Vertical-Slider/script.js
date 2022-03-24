const main = document.querySelector('main');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0; // index of slide that is active at the moment

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const mainHeight = main.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > (slidesLength - 1)) {
            activeSlideIndex = 0;
        }
    }
    else {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }

    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * mainHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * mainHeight}px)`;
}