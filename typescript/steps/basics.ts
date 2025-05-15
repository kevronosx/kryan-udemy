const add = (n1: number, n2: number, printResult: boolean, phrase: string) => {
  if (printResult) {
    const calc = n1 + n2;
    const final = `${phrase} ${calc}`;
    console.log(final);
    return calc;
  } else {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 2.8;

const printResult = true;

const result = add(number1, number2, printResult, 'FontLeroy! ');

console.log('Value:', result);
