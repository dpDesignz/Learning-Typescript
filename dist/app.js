"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function clickHandler(message, age) {
    let username = 'Damien';
    console.log(message, age, username);
    console.log('Clicked!');
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome", 30));
}
