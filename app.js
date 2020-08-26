var person = {
    // const person = {
    name: 'Damien',
    age: 27,
    hobbies: ['Music', 'Photography'],
    role: [5, 'admin']
};
// person.role.push('user'); // Why doesn't this throw an error once the tuple is defined? Answered 1:26:28 - Push is allowed with a tuple for some reason.
// person.role[1] = 10;
// person.role = [2, 'author', 'user'];
var favouriteActivities;
favouriteActivities = ['Photography'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
