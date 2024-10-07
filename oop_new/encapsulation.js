/**
 * ENCAPSULATION
 * 
 * setelah membahas pilar OOP pewarisan, berikut kita akan membahasa pilar utama berikutnya dari OOP yaitu encapsulation.
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. menyembunyikan data adalah 
 * bagian kunci dari encapsulation.
 * 
 * desain OOP yang baik adalah objek hanya akan menampilkan data yang dibutuhkan oleh objek lain. Data akan diisolasi dan
 * tidak dapat diakses langsung dari luar. Secara sederhana, ecapsulation adalah membuat data yang ada di class menjadi private.
 * 
 * 
 * 
 * Di dunia nyata, kita bisa lihat contoh pada mesin kopi. Mesin kopi memiliki data dan method yang bersifat private
 * seperti pengatur suhu, pemanas dan method pemanas air. Data dan method tersebut tidak bisa diakses oleh pihak luar(kita sebagai pengguna).
 * 
 * 
 * 
 * 
 * Properti dan Method
 * 
 * seperti yang anda ketahui, di dalam sebuah class kita dapat mendefinisikan dua hal, yaitu property dan method.
 * Karena kita menerapkan encapsulation, kita harus mengatur akses dari keduannya. Secara umum, property yang ada
 * didalam instance class bersifat mutable (dapat diubah). Perharikan contoh dibawah ini
 */


class coffeMachine {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.temperature = 90;
    }
    makeCoffe()  {
        console.log('membuat kopi dengan suhu', this.temperature)
    }
}


const coffe = new coffeMachine(100);

coffe.temperature = 60;


coffe.makeCoffe()


// Pada contoh di atas, kita menetapkan temperature mesin kopi 90 derajat Celcius, tetapi ada pengguna yang iseng 
// mengubahnya menjadi 60. Mengubah nilai tersebut bisa saja mengakibatkan mesin kopi rusak. Meskipun kita sudah 
// menetapkan nilai temperature, nilainya tetap dapat diubah. Hal ini tidaklah baik. Untuk mencegah hal itu terjadi lagi,
// kita dapat menerapkan getter dan setter.

// Getter terdiri dari method get. get adalah cara untuk mendapatkan nilai dari property, sedangkan setter terdiri dari 
// method set. set adalah method untuk menetapkan nilai property. Dengan begitu, kita dapat mengatur akses ke property
// yang dimiliki oleh object. Perhatikan contoh berikut ini.

class CoffeeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this._temperature;
    }
  }
  
  const coffee = new CoffeeMachine(10);
  console.log('Sebelum diubah: ', coffee.temperature);
  coffee.temperature = 100;
  console.log('Setelah diubah: ', coffee.temperature);