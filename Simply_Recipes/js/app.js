const getElement = (selector) => {
  const ELEMENT = document.querySelector(selector)
  // if element exists, return the element
  if (ELEMENT) return ELEMENT
  throw Error( //else throw error
    `Please double check your class/id names, there is no ${selector} class or id`
  )
};

const LINKS = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', () => {
  LINKS.classList.toggle('show-links')
});

const date = getElement('#date');
date.textContent = new Date().getFullYear();
