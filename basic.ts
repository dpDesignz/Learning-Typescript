function add(n1: number, n2: number, log: boolean, phrase: string) {
  const result = n1 + n2;
  if (log) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 8; // 8.0 also accepted
const number2 = 4.6;
const logResult = true;
let resultPhrase = 'Result is: ';
resultPhrase = 'Result output: ';

const result = add(number1, number2, logResult, resultPhrase);