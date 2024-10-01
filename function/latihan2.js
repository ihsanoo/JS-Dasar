


// function piramid(n) {
//     let result = "";
//     for (let i = 1; i <= n ; i++) {
//         for (let j = 0; j < n - i; j++) {
//             result += ' ';
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }


// console.log(piramid(5));


// Buatlah fungsi bernama invertedPyramid(n) yang mencetak piramida terbalik dengan n baris menggunakan 
//simbol #. Baris pertama harus memiliki 2*n - 1 simbol #, 
// dan setiap baris berikutnya mengurangi dua simbol #.


// function invertedPyramid(n) {
//     let result = '';
//     for (let i = n; i >= 1; i--) {
//         for(let j = 0; j < n - i; j++) {
//             result += " ";
//         }
//         for(let k = 0; k < 2 * i - 1; k++) {
//             result += "#";
//         }
//         result += '\n';
//     }
//     return result;
// }


// console.log(invertedPyramid(3));



// function pascalTriangle(n) {
//     result = '';
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n - i-1; j++) {
//             result += " ";
//         }
//         let value = 1;
//         for (let k = 0; k <= i; k++) {
//             result += value + ' ';
//             value = value * (i - k) / (k + 1);
//         }
//         result += "\n";
//     }
//     return result;
// }

// console.log(pascalTriangle(4));


let tinggi = 5;

for(let i = 1; i < tinggi; i++) {
    console.log()
}