// buld apiramide * for loop
function pyramid(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            result += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}

console.log(pyramid(1));

// bulid a diamond * for loop
// function diamond(n) {
//     let result = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             result += " ";
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             result += "*";
//         }
//         result += "\n";
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         for (let j = 0; j < n - i; j++) {
//             result += " ";
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             result += "*";
//         }
//         result += "\n";
//     }
//     return result;
// }

// console.log(diamond(5));