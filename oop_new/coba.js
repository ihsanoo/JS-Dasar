

function person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

person.prototype.run = function () {
    console.log(`${this.name} is running`)
}


let person1 = new person('jihan', 20, "bandung");
let person2 = new person('amel', 25, 'bandung');
let person3 = new person('ihsan', 24, "baubau")

person1.run();
person3.run();
person2.run();
