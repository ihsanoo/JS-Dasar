function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello my name is ${this.name}, im ${this.age} years old`);
}


const person1 = new Person("yanzah", 24);
const person2 = new Person("nadine", 20);

person2.greet();
person1.greet();

