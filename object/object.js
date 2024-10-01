// membuat objek menggunakan javascript


// buat variabel terlebih dahulu

let jihan = {
    gender : "female",
    tahun_lahir : "05 juli 2004",
    tempat_lahir : "purwakarta",
    kampus : "Politeknik STTT Bandung",

};

jihan.boy_friend = "ihsan";
delete jihan.gender;


console.log(jihan);

console.log(jihan.gender);
console.log(jihan["tempat_lahir"]); 
console.log(jihan["boy_friend"]);


// Buat objek student dengan properti name, age, dan grade.
// Akses dan cetak nilai properti name dan grade. Ubah nilai grade dan tambahkan properti baru school.

let student = {
    name : "jihan",
    age : 22,
    grade : "2nd year"
};

console.log(student.name);
console.log(student["grade"]);

student.grade = "3rd year";
student.school = "POLTEK STTT BANDUNG";

console.log(student);


