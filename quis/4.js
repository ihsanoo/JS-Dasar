/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 
 *
 *   
 */


// TODO

function min(a,b) {
    if(a < b ) {
        return a
    } else if (b < a) {
        return b
    } else {
        return a
    }
}

console.log(min(5,6))


// * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
//  *    - Menerima dua buah argumen number, a dan b.
//  *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
// contoh:
// *    power(7, 3) // 343
// *    power(3, 3) // 27
// *    power(4, 0.5) // 2

function power(a,b) {
    return a ** b;
}

console.log(power(2,3))


function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));