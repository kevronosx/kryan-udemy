// Number;
// String;
// Boolean;
// Object;

// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 1000);
// });

// promise.then(data => {
//   data.split(' ');
// });

// const merge = <T, U>(objA: T, objB: U) => Object.assign(objA, objB);

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const obj1 = { name: 'Kevron' };
const obj2 = { age: 20 };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj.name, mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptiontext = 'ugggg';
  if (element.length > 0) {
    descriptiontext = 'got it';
  }

  return [element, descriptiontext];
}

console.log(countAndPrint('juk'));
type Test = {
  string: keyof string;
};

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'test' }, 'name'));

class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Menu');
textStorage.removeItem('Max');
textStorage.addItem('Simple');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Max' });
// objectStorage.addItem({ name: 'Team' });

// objectStorage.removeItem({ name: 'Max' });

// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];

// names.push('chilly');
// names.pop();
console.log('names', names);
