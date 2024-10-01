// arrow function
// ES6 memperkenalkan fungsi baru yang dinamakan arow function
// expressio atau lebih dikenal sebagai arrow function.
// arrow function mirip seperiti regular function secara perilaku, tetapi?
/**
 * berbeda dalam penulisannya. Sesuai namanya, funsi didefinisanan menggukana 
 * tanda panah atau fat arrow =>. Tentunya penulisan arrow function ini akan lebih singkat.
 * 
 * selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular fucntion. regular
 * function dapat berupa function declaration dan function expression. Namun arrow fucntion hanya berupa expression function saja.
 * itu sebabanya arrow fucntion memiliki nama lengkap "arrow function expression".
 * 
 * 
 * 
 */


// function biasa atau rguar function

function sayHello(greet) {
    console.log(`${greet}!`)
}

sayHello("selmat pagi");


// function expression
const sayName = function(name) {
    console.log(`nama saya ${name}`)
}

sayName("ihsan");




// dan jika kita menggunakan arrow fucntion


let bilanHalo = (salam) => {
    console.log(`${salam}!`);
}

bilanHalo("selamt pagi");


let bilangNama = (nama) => {
    console.log(`Namaku ${nama}`)
}

bilangNama("ihsan");