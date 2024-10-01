

let color = ["red", "green", "blue"];

console.log(color[0]);
console.log(color[2]);

let animals = ["cat", "dog", "elephant"];

animals.push('lion');
animals.unshift('tiger')

animals.splice(1, 2);

console.log(animals);


let cars = ["toyota", "honda", "ford"];

cars[1] = "bmw"
cars.splice(2, 0,"tesla")
console.log(cars)