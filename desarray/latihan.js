/**
 Destructuring Sederhana:
Buat array fruits dengan elemen "Apple", "Banana", "Cherry". Gunakan destructuring untuk mengekstrak 
nilai-nilai dari array tersebut ke dalam variabel.
 */
let fruits =["Apple", "Banana", "cherry"];

let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit, secondFruit, thirdFruit);
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

/*

Melewati Elemen:
Buat array colors dengan elemen "Red", "Green", "Blue", "Yellow". Gunakan destructuring untuk mengekstrak 
elemen pertama dan ketiga dari array tersebut.
 */
let colors = ["red", "green", "blue", "yellow"];

let [firstColor, , thirdColor] = colors;

console.log(firstColor, thirdColor);

/*
Nilai Default:
Buat array names dengan elemen "Alice", "Bob". Gunakan destructuring untuk mengekstrak dua elemen pertama 
dan berikan nilai default "Charlie" untuk elemen ketiga.
 */
let names = ["Alice", "Bob"];

let [firstNames, secondNames, thirdNames = "Charlie"] = names;
console.log(firstNames);
console.log(secondNames);
console.log(thirdNames);



/*
Destructuring Nested Arrays:
Buat array numbers dengan elemen 1, [2, 3], 4. Gunakan destructuring untuk mengekstrak nilai dari nested 
array tersebut.
 */
let numbers = [1, [2,3], 4];

let [firstNumbers, [secondNumbes, thirdNumbers], fourthNumbers] = numbers;

console.log(firstNumbers, secondNumbes, thirdNumbers, fourthNumbers);

/*
Menggunakan Rest Operator:
Buat array letters dengan elemen "A", "B", "C", "D", "E". Gunakan destructuring untuk mengekstrak dua elemen
 pertama dan kumpulkan sisa elemen menjadi array baru.
 */

 let letters =["A", "B", "C", "D", "E"];

 let [first, second, ...Rest] = letters;

console.log(first);
console.log(second);
 console.log(Rest);
