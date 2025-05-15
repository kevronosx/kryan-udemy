const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const funkyMonkey = (num: number): void => {
  console.log('Yojimbo! ', num);
};

const addAndhandle = (
  n1: number,
  n2: number,
  callback: (value: number) => void
) => {
  const result = n1 + n2;
  callback(result);
};

let combineValues: (a: number, b: number) => number;

combineValues = add;
// ------------------------------------

funkyMonkey(add(2, 2));

const myCallback = (result: number) => {
  console.log('chica', result);
};

addAndhandle(10, 20, myCallback);

console.log('combine', combineValues(8, 8));
