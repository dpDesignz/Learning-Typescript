// Using an alias
type Combinable = number | string;
type ConversionTypes = 'num' | 'str';

// Using union and literal types
// Piping allows defining multiple types to allow more flexibility
function combine(
  value1: Combinable,
  value2: Combinable,
  resultType: ConversionTypes // Literal type
) {
  // const result = value1 + value2; // This will throw an error with union types since it doesn't know what will be used
  let result; // Define result due to block scoping
  // if (typeof value1 === 'number' && typeof value2 === 'number') {
  //   result = value1 + value2;
  // } else {
  //   result = value1.toString() + value2.toString(); // Define setting to string clearly to avoid errors
  // }
  // if (resultType === 'num') {
  //   return +result; // Adding the `+` works the same as `parseFloat()`
  // } else {
  //   return result.toString();
  // }
  if (typeof value1 === 'number' && typeof value2 === 'number' || resultType === 'num') {
    result = +value1 + +value2;
  } else {
    result = value1.toString() + value2.toString(); // Define setting to string clearly to avoid errors
  }
  return result;
}

// Using number combined
const combinedAges = combine(27, 32, 'num');
console.log(combinedAges);

// Using string combined
const combinedNames = combine('Damien', 'Peden', 'str');
console.log(combinedNames);

// Using string combined on numbers
const combinedStringAges = combine('27', '32', 'num');
console.log(combinedStringAges);