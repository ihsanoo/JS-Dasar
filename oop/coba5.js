// Buatlah constructor function Animal dengan properti name.
// Tambahkan method speak yang mencetak "[name] makes a noise."
// Buatlah constructor function Dog yang mewarisi dari Animal dan menambahkan properti breed.
// Override method speak pada Dog untuk mencetak "[name] barks."
// Contoh Penggunaan:
// const animal = new Animal('Generic Animal');
// animal.speak(); // Output: Generic Animal makes a noise.
// const dog = new Dog('Rex', 'German Shepherd');
// dog.speak(); // Output: Rex barks.

function Animal(name) {
    this.name = name;
}
Animal.prototype.bark = function() {
    console.log(`${this.name} makes a noise`)
}

// membuat constructior function Dog yang nantinya akan mewarisi dari function Animal
function Dog(name, breed) {
    Animal.call(this, name) // memanggil constructor dari Animal
    this.breed = breed;
}