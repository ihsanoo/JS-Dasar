/**
 * javascript bukanlah bahasa pemrograman berbasis class sehingga JavaScript tidak mengenal class.
 * meskipun tidak mengenal class, prinsip oop tetap dapat di terapkan. Constructor function adalah cara yang digunakan untuk 
 * membuat obeject dan class sebelum adanya ES6. cara mebuat obeject dan class menggunakan constuctor function dapat dilihat pada contoh berikut ini 
 * 
 */


function person(name,age) {
    this.name = name;
    this.age = age;
}

person.prototype.eat = function () {
    console.log(`${this.name} is eating`)
}

const person1 = new person("ihsan" , 24);
const person2 = new person('jihan', 20);

console.log(person1.name); // output ihsan
console.log(person2.name); // output jihan