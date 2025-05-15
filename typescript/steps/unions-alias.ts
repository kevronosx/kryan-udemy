type Combinable = 'as-number' | 'as-text';
type textOrString = number | string;

const combine = (n1: textOrString, n2: textOrString, convert: Combinable) => {
  let result: textOrString | null = null;
  if (
    typeof n1 === 'number' &&
    typeof n2 === 'number' &&
    convert === 'as-number'
  ) {
    result = +n1 + +n2;
  }

  if (
    typeof n1 === 'string' &&
    typeof n2 === 'string' &&
    convert === 'as-text'
  ) {
    result = n1 + n2;
  }

  return result;
};

const combineNumbers = combine(5, 2, 'as-number');

console.log('combineNumbers number', combineNumbers);

const combineName = combine('hey', 'oh', 'as-text');

console.log('combineName text', combineName);
