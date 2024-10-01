
let myMap = new Map();

myMap.set("nama", "yanzah");
myMap.set("umur", 24);
myMap.set("pacar", "nadine");

console.log(myMap);
console.log(myMap.size);

let name = myMap.get("nama");


console.log(name);
console.log(myMap.has("umur"));

myMap.delete("umur");


console.log(myMap);


myMap.clear();

console.log(myMap);


