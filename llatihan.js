


let myArray =["kelinci", "anjing", "kucing", "kerbau"];


for (let hewan of myArray) {
    console.log(hewan);
}

let obj = {
    nama : "yanzah",
    umur : 24,
    pacar : "nadine"
}


for (let key of Object.keys(obj)) {
    console.log(`${key} : ${obj[key]}`);
}

let buah = ["apple", "kelapa", "anggur", "kecapi", "kelengkeng", "pisang"];


for (let semuaBuah of buah) {
    console.log(`${semuaBuah}`);
}


let orang = new Map();

orang.set("nama", "yanzah");
orang.set("umur", 24);
orang.set("pacar", "nadine");


for(let[key, value] of orang) {
    console.log(key + ':' + value);
}

console.log(orang.get("pacar"));