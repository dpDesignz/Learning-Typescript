let appId = 'abc'; // Will not error if `noUnusedLocals` true as it's a global not local variable
const button = document.querySelector('button');

// This function will trigger a warning if `noImplicitReturns` is true as a return may not happen
// function add(n1: number, n2: number) {
//   if (n1 + n2 > 0) {
//     return n1 + n2;
//   }
// }

function clickHandler(message: string, age: number) {
  let username = 'Damien'; // Will error if `noUnusedLocals` true
  console.log(message, age, username);
  console.log('Clicked!');
}

// This is a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome", 30));
}