// ES6 Class
// Cara yang lebih modern untuk membuat object dan class adalah menggunakan ES6. 
//ES6 sudah mendukung class sehingga membuat JavaScript mirip dengan bahasa lain 
//yang berbasis class seperti Java, C++, dan C#. 
//Berikut cara untuk membuat class.


class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}

const person1 = new person("yanzah", 20);
const person2 = new person("nadine", 20);


person1.eat()
person2.eat();

