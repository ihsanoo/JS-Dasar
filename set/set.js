

let numberSet = new Set();

numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(4);
numberSet.add(5);


console.log(numberSet);

console.log(numberSet.has(3));

numberSet.delete(3);

console.log(numberSet.has(3));

console.log(numberSet);


numberSet.forEach(element => {
    console.log(element)
});

numberSet.clear();

console.log(numberSet.size);


numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(4);
numberSet.add(5);

for (value of numberSet) {
    console.log(value);
    
}

