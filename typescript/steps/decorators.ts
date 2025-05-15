function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('rendering template...');
    const id = document.getElementById(hookId)!;
    const p = new constructor();
    if (id) {
      id.innerHTML = template;
      id.querySelector('h1')!.textContent = p.name;
    }
  };
}

@WithTemplate('<h1>Monkey</h1>', 'app')
@Logger('LOGGING - PERSON')
class Person {
  name = 'kevron';

  constructor() {
    console.log('Creating person...');
  }
}

const peers = new Person();
console.log(peers);

function Log() {}

class Product {
  title: String;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('crap');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {}
}
