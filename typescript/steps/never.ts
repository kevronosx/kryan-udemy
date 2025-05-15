let userInput: unknown;
let userName: string = '';

userInput = 5;
userInput = 'Silly';

if (typeof userInput === 'string') {
  userName = userInput;
}

console.log('userInput', userInput);
console.log('userName', userName);

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError('Batshit', 400);
