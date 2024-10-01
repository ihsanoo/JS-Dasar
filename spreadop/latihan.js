

let array = [10,20,30,40];


let copyArray = [...array];


console.log(copyArray);

let arr1 = ["a", "b"];
let arr2 = ["c", "d"];


let combineArr = [...arr1, ...arr2];

console.log(combineArr);


let person = {
    name : "alice",
    age : 20
};

let copiedPerson = {
    ...person
}

console.log(copiedPerson);


let person2 = {
    nama : "nadine",
    umur : 22
}

let combinePerson = {...person, ...person2};

console.log(combinePerson);


let student = {
    nama : "yanzah",
    kelas : 12
}

let updateStudent = {...student, age : 18};

console.log(updateStudent);