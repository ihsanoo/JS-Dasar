

let person = {
    firstName : "nadine",
    lastName : "imanuel",
    age : 20
};

let firstName = "nindi";
let age = 24;


console.log(person.firstName);
console.log(firstName);

({firstName, age} = person);

console.log(firstName, age);

let {firstName : namaDepan, age : umur} = person;

console.log(namaDepan);
console.log(umur);