/**
 Membuat dan Menambahkan Elemen ke Map:
Buat Map bernama studentMap dan tambahkan pasangan kunci-nilai untuk name, age, dan grade.
 */
let studentMap = new Map();

studentMap.set("name", "jihan");
studentMap.set("age", 20);
studentMap.set("grade", "2nd Year");

console.log(studentMap);

/*
Mengambil dan Memeriksa Nilai dari Map:
Ambil nilai dari studentMap untuk kunci name dan age, kemudian periksa apakah kunci grade ada dalam studentMap.
 */
let name = studentMap.get('name');
let age = studentMap.get('age');

console.log(name);
console.log(age);
console.log(studentMap.has('grade'));

/*
Menghapus Elemen dari Map:
Hapus kunci grade dari studentMap dan periksa kembali apakah kunci tersebut masih ada.
 */
studentMap.delete("grade");
console.log(studentMap.has("grade"));

/*

Menghapus Semua Elemen dan Memeriksa Ukuran Map:
Hapus semua elemen dari studentMap dan periksa ukuran Map tersebut.
 */
studentMap.clear();
console.log(studentMap.size);

/*
Iterasi Map:
Tambahkan kembali elemen ke studentMap dan gunakan for...of untuk mengiterasi dan mencetak semua
 pasangan kunci-nilai.
 */

 studentMap.set("name", "jihan");
 studentMap.set("age", 20);
 studentMap.set("grade", "2nd year");


 for (let [key, value] of studentMap) {
    console.log(key + ':' + value);
 }
