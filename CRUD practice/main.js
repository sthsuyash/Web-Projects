// target all the ID selectors 
const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const posts = document.getElementById('posts');

/*** creating post ***/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked');
    formValidate();
});

let formValidate = () => {
    if (input.value === '') {
        msg.innerText = 'Post cannot be left empty.';
        console.log('failure');
    }
    else {
        console.log('success');
        msg.innerText = '';
        acceptData();
    }
};

// empty object named data to store the input
let data = {};

// using the function, collect data from inputs and store them in object named data
let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
};

// creating posts using JavaScript template literal 
let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class = 'options'>
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>  
            </span>
        </div>
    `;
    input.value = '';
};

/*** deleting post ***/
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

/*** editing post ***/
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
