/**
 * Varibale Scope
 * 
 * Ada banyak keadaan di mana kira membutuhkan variabel untuk diakses
 * di seluruh script yang kita buat. tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya
 * dapat di akses pada cakupan fungsi dan fungsi turunannya saja.
 * 
 * Variable yang dapat di akses dari seluruh script disebut dengan globally scoped sementara variale yang hanya di akses hanya pada funsi tertentu disebut dengan locally scoped.
 * 
 * Variable javascript menggunakan fungsi untuk mengelola cakupannya.
 * jika variabel didefinisikan di luar fungsi, maka variable tersebut bersifat global. jika vriable didefinisikan di dalam fungsi, maka variable bersifat lokal dan cakupannnya hanya pada fungsi tersebut beserta turunanya.
 * 
 * 
 */


function multiply(num) {
    total = num * num;
    return total;
  }
  
  let total = 9;
  let number  = multiply(20);
  
  console.log(total)

  // output 400


  /**
   * mungkin kita berharap nilai total akan tetap 9, mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut.
   * hal ini bisa terjadi karena pada fungsi mltiply() kita tidak menetapkan variable total sebagai cakupan lokal. kita tidak menggunakan keyword const atau ketika mendeklarasikan variable total pada fungsi multiply sehingga variabel menjadi global.
   * 
   * 
   */