type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combindable = string | number;
type Numeric = number | boolean;

type Universal = Combindable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combindable, b: Combindable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('max', 'kid');

const spilt = result.split('');

console.log(spilt);

const fetchedData = {
  id: 'ui',
  name: 'max',
  // job: { title: 'ceo', description: 'a jo ber' },
};

console.log(fetchedData?.job?.title ?? 'janitor');

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log('emp: ', emp.name);
//   if ('privileges' in emp) {
//     console.log(`privileges:  ${emp.privileges}`);
//   }
//   if ('startDate' in emp) {
//     console.log('Start:', emp.startDate);
//   }
// }

// printEmployeeInfo({ name: 'jim', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('driving car...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('driving truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('loading cargo...', amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (vehicle: Vehicle) => {
//   vehicle.drive();

//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(400);
//   }
// };

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//     default:
//       return;
//   }

//   console.log('Moving at speed', speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 300 });
// moveAnimal({ type: 'horse', runningSpeed: 100 });

// const getP = document.querySelector('#shite')!;
// const userInput = document.querySelector('#user-input')! as HTMLInputElement;

// userInput.value = 'Super';

// console.log(getP);
// console.log(userInput.value);

// interface ErrorContainer {
//   id: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   id: 'one',
//   email: 'not a valid email',
//   username: 'get a name fool!',
// };
// console.log(errorBag);
