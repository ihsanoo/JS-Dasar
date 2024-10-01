// membuat weakset

let myWeakSet = new WeakSet();


// menambahkan elemen pada weakset

let obj1 = {};
let obj2 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);

// memeriksa keberadaan elemen

console.log(myWeakSet.has(obj1));
console.log(myWeakSet.has(obj2));


// menghapus elemen dari weakset

myWeakSet.delete(obj1);

console.log(myWeakSet.has(obj1));



