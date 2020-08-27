// Using functions
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Void types
// Void means there will be nothing returned
// Void is better to be used over undefined
function printResult(num: number): void {
  console.log('Result: ' + num);
  // return; // This would be used if the return type is `undefined`
}

// Defining a function with a typed function parameter
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(27, 21));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5; // This will break if no type set!
// combineValues = printResult; // This will also break as wrong function would be called. Setting function types will error this.
console.log(combineValues(12, 22));

// let someValue: undefined; // Undefined type (this isn't useful like this)

addAndHandle(10, 25, (result) => {
  console.log(result);
})