// selecting id and classes
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id(`username`),
    email = id(`email`),
    password = id(`password`),
    form = id(`form`),
    errorMsg = classes(`error`),
    successIcon = classes(`success-icon`),
    failureIcon = classes(`failure-icon`);

// calling the event handler 
form.addEventListener('submit', (e) => {
    if (!engine(username, 0, 'User Name cannot be blank!') ||
        !engine(email, 1, 'Email cannot be blank!') ||
        !engine(password, 2, 'Password cannot be blank!')) {
        e.preventDefault();
    }

});

/*** 
    engine function => 
    does all sorts of form validation work 
***/
// id: for selecting among the three input tags
// index: for knowing which div is being selected as there are three error divs in each input tags
// message: to print the corresponding message to selected id[index]

let engine = (id, index, message) => {
    if (id.value.trim() === '') { // error
        errorMsg[index].innerHTML = message;
        id.style.border = '2px solid red'; // make the error input area red

        // icons
        failureIcon[index].style.opacity = '1'; // display error icon
        successIcon[index].style.opacity = '0';
        return 0;
    }
    else { // success
        errorMsg[index].innerHTML = '';
        id.style.border = '2px solid green';

        // icons
        failureIcon[index].style.opacity = '0';
        successIcon[index].style.opacity = '1'; // display success icon

        return 1;
    }
}