


let favoritku = ["ikan", "nasi lemak", "pir"];


console.log(favoritku);

console.log(...favoritku)


let vtuber = ["kobo kanaeru", "vestia zeta", "kaela kovalskia"];
let anime = ["kimetsu", "jujutsu","naruto","vinland saga"];


let gabungan = [vtuber, anime];

console.log(gabungan);

gabungan = [...vtuber, ...anime];

console.log(gabungan);


let obj1 = {
    nama : "ihsan",
    gender : "male"
};

let obj2 = {
    "tahun lahir" : 2000,
    bulan : "januari"
};

let allObject = {...obj1, ...obj2};

console.log(allObject);