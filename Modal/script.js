'use strict';

const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');
const CLOSE_MODAL = document.querySelector('.close-modal');
const SHOW_MODAL = document.querySelectorAll('.show-modal');

const ADD = function () {
    MODAL.classList.add('hidden');
    OVERLAY.classList.add('hidden');
}

const REMOVE = () => {
    MODAL.classList.remove('hidden');
    OVERLAY.classList.remove('hidden');
}

for (const each of SHOW_MODAL) {
    each.addEventListener('click', REMOVE);
}
CLOSE_MODAL.addEventListener('click', ADD)
OVERLAY.addEventListener('click', ADD)


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !MODAL.classList.contains('hidden')) {
        ADD();
    }
});