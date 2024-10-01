// membuat weaakMap

let myWeakMap = new WeakMap();


// menabahkan elemen kedalam weakMap

let obj1 = {};
let obj2 = {};


myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, 'value2');

// mengambil nilai dari weakMap


console.log(myWeakMap.get(obj1));
console.log(myWeakMap.get(obj2));

// memeriksa keberadaan key

console.log(myWeakMap.has(obj1));

// menghapus elemen WeakMap

myWeakMap.delete(obj1);
console.log(myWeakMap.has(obj1));
