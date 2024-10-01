// import { name, age, address } from "./exportbio.mjs";
// cara ini terbilang sah sah saja namun lebih bagus menggunakan cara seperti dibawah ini

import * as variable from "./exportbio.mjs";

// tanda asterisk (*) memungkinkan kita untuk engimport semua varibale yang ada didalam file yang di export 

console.log(`hallo nama saya ${variable.name}, umur saya ${variable.age} tahun, dari ${variable.address}`)