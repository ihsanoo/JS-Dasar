function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello my name is ${this.name}, im ${this.age} years old`);
}


const person1 = new Person("ihsan", 24);
const person2 = new Person("jihan Permata ayu", 20);

person2.greet();
person1.greet();

