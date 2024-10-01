

let person = {
    firstName : "jihan",
    lastName : "permata ayu",
    age : 20
};

let firstName = "ihsan";
let age = 24;


console.log(person.firstName);
console.log(firstName);

({firstName, age} = person);

console.log(firstName, age);

let {firstName : namaDepan, age : umur} = person;

console.log(namaDepan);
console.log(umur);