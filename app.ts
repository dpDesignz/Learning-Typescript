const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  // const person = {
  name: 'Damien',
  age: 27,
  hobbies: ['Music', 'Photography'],
  role: [5, 'admin']
};

// person.role.push('user'); // Why doesn't this throw an error once the tuple is defined? Answered 1:26:28 - Push is allowed with a tuple for some reason.
// person.role[1] = 10;
// person.role = [2, 'author', 'user'];

let favouriteActivities: string[];
favouriteActivities = ['Photography']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}