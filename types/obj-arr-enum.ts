// Object explicitly defined with TS
// This isn't required, but since "role" is of
// type "tuple" we need to define it so TS doesn't just think that it's an array
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
//   // const person = { // If not wanting to define the object types, you can just use inference
//   name: 'Damien',
//   age: 27,
//   hobbies: ['Music', 'Photography'],
//   role: [5, 'admin']
// };

// Setting an enum
// This will compile as an object in JavaScript

enum Role {
  ADMIN,
  EDITOR,
  GUEST
};

// Type of "role" is now enum so the object no longer needs to be explicitly defined
const person = {
  name: 'Damien',
  age: 27,
  hobbies: ['Music', 'Photography'],
  role: Role.ADMIN
};

// person.role.push('user'); // Why doesn't this throw an error once the tuple is defined? Answered 1:26:28 - Push is allowed with a tuple for some reason.
// person.role[1] = 10;
// person.role = [2, 'author', 'user'];

let favouriteActivities: string[]; // Setting a string type array
favouriteActivities = ['Photography']

let myActivity: any[]; // Setting a non-restrictive array. This is not recommended since to TS check will run
myActivity = ['Coding', 12, true];

console.log(person.name); // Logging generated results

// Loop through array with for (not foreach?)
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // This will cause and error!
}

// Check if the persons role is as defined
// Using the enum "role"
if (person.role === Role.ADMIN) {
  console.log('is an admin user');
}