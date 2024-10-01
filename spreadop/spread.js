


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
    nama : "yanzah",
    gender : "male"
};

let obj2 = {
    "tahun lahir" : 2005,
    bulan : "januari"
};

let allObject = {...obj1, ...obj2};

console.log(allObject);