// membuat objek menggunakan javascript


// buat variabel terlebih dahulu

let nadine = {
    gender : "female",
    tahun_lahir : "05 juli 2004",
    tempat_lahir : "Bandung",
    kampus : "UCLA",

};

nadine.boy_friend = "yanzah";
delete nadine.gender;


console.log(nadine);

console.log(nadine.gender);
console.log(nadine["tempat_lahir"]); 
console.log(nadine["boy_friend"]);


// Buat objek student dengan properti name, age, dan grade.
// Akses dan cetak nilai properti name dan grade. Ubah nilai grade dan tambahkan properti baru school.

let student = {
    name : "nadine",
    age : 22,
    grade : "2nd year"
};

console.log(student.name);
console.log(student["grade"]);

student.grade = "3rd year";
student.school = "UCLA";

console.log(student);


