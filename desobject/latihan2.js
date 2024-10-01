/**
 Destructuring Sederhana:
Buat objek car dengan properti brand, model, dan year. Gunakan destructuring untuk mengekstrak nilai-nilai
dari objek tersebut ke dalam variabel.

*/
let car = {
    brand : "bmw",
    model : "xxx",
    year : 2024
};


({brand, model, year}=car);

console.log(brand);
console.log(model);
console.log(year);
/**

Mengganti Nama Variabel:
Buat objek laptop dengan properti brand, memory, dan storage. Gunakan destructuring untuk 
mengekstrak nilai-nilai dari objek tersebut ke dalam variabel dengan nama laptopBrand, laptopMemory,
 dan laptopStorage.

*/
let laptop = {
    brand : "asus",
    memory : "8GB ddr4",
    storage : "ssd 1TB"
};

({brand : laptopBrand, memory : laptopMemory, storage : laptopStorage}= laptop);

console.log(laptopBrand);
console.log(laptopMemory);
console.log(laptopStorage);

/*
Nilai Default:
Buat objek book dengan properti title dan author. Gunakan destructuring untuk mengekstrak 
nilai title, author, dan publisher (dengan nilai default "Unknown Publisher") dari objek tersebut.

*/
let book = {
    title :"solo leveling",
    author : "Chu gong"
}

let {title, author, publisher = "Unknown Publisher"} = book;

console.log(title);
console.log(author);
console.log(publisher);

/*

Destructuring Nested Objects:
Buat objek student dengan properti name, age, dan address yang merupakan objek dengan properti 
city dan postalCode. Gunakan destructuring untuk mengekstrak nilai name, city, dan postalCode dari objek student.
*/
let student = {
    name : "nadine",
    age : 20,
    address : {
        properti : 1,
        city : "bandung",
        postalcode : 1224
    }
};

let {name,address : {city, postalcode}} = student;

console.log(name);
console.log(city);
console.log(postalcode);

/*

Menggabungkan Destructuring dan Spread Operator:
Buat objek person dengan properti name, age, dan gender. Gunakan destructuring untuk
 mengekstrak name dan age ke dalam variabel, lalu gunakan spread operator untuk menempatkan
  sisa properti ke dalam objek baru bernama rest.
 */

  let person = {
    nama : "fabian",
    umur : 24,
    gender : "male"
  };

  ({nama, umur,...rest} = person);


  console.log(nama);
  console.log(umur);
  console.log(rest);

  