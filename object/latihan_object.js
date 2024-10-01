
// Buat objek bernama book dengan properti title, author, dan year. Lalu, 
//tambahkan properti baru publisher dengan nilai yang kamu tentukan, dan hapus properti year.


let book = {
    title : "Blink by Malcolm Gladwell",
    author : "Malcolm Gladwell",
    year  : 2022
};

book.publisher = "Buku Media";
delete book.year;


console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.publisher);