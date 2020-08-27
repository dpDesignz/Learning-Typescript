// Using `unknown` vs `any`
let userInput: unknown;
let userName: string;

userInput = 7;
userInput = 'Damien';
if (typeof userInput === 'string') // Check the type is valid for an unknown before setting to a set type
  userName = userInput;

// Using `never`
// This is used to define that nothing with EVER be returned, not even `void` because the script will be "crashed"
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {} // This would also return a `never` result since it would never end
}

const errorReturn = generateError('There was an error', 400);
console.log(errorReturn); // This will never be reached