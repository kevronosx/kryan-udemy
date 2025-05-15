// type PersonType = {
//   name: string;
//   age: number;
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Kevron',
//   age: 30,
//   hobbies: ['Sports', 'Cars'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  MANAGER,
}

const person = {
  name: 'Kevron',
  age: 30,
  hobbies: ['Sports', 'Cars'],
  role: Role.ADMIN,
};

console.log(person);
console.log(`Age: ${person.age}`);
console.log(`Name: ${person.name}`);
console.log(`Role ${person.role}`);

for (const hobby of person.hobbies) {
  console.log(`Hobby: ${hobby}`);
}
