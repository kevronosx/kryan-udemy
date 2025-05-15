// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 32;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + this.name);
    } else {
      console.log(phrase + 'Hello');
    }
  }
}

const user1 = new Person();

console.log('User >>', user1);
user1.greet('Jong - ');
