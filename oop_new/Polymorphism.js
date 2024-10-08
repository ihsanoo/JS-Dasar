// Polymorphism
// Seperti yang Anda ketahui sebelumnya bahwa kita dapat mewariskan property dan method ke class lainnya. Namun, 
//apa yang terjadi jika SubClass ingin mengubah implementasi dari method yang diwariskan dari SuperClass? Layaknya
// kita sebagai anak, ingin mengubah suatu sifat atau perilaku dari orang tua yang kita mungkin tidak setuju atau 
//butuhkan. Jangan khawatir, di OOP kita dapat mengubah implementasi method yang diturunkan dari SuperClass.

// Bagaimana cara untuk mengubah implementasi yang diturunkan dari SuperClass? Caranya adalah menggunakan pilar
// utama lainnya dari OOP yaitu Polymorphism. Polymorphism berasal dari bahasa Yunani yang memiliki arti secara 
//harfiah yaitu memiliki banyak bentuk. Polymorphism merupakan konsep di mana suatu entitas menjadi SuperClass untuk 
//mewariskan property atau method ke SubClass. 

// Polymorphism berhubungan erat dengan pewarisan. Sebelumnya kita memiliki SuperClass Smartphones yang memiliki 
//property color, brand, model dan method charging. Kemudian kita memiliki SubClass yang implementasinya berbeda 
//tergantung dengan jenisnya seperti Android dan iOS.

// Kini, bentuk implementasi dari Smartphones berbeda untuk setiap jenis. Inilah yang disebut dengan polymorphism. Lalu,
// bedanya apa dong dengan pewarisan? Bedanya terdapat pada implementasi method yang diubah. Untuk mengubah implementasi
// method tersebut, terdapat konsep yang disebut dengan overriding. 

// Overriding
// OOP memiliki konsep overriding yang sangat erat kaitannya dengan pewarisan. Overriding adalah cara kita untuk 
// membuat implementasi yang berbeda di SubClass untuk method yang diturunkan dari SuperClass. Overriding dapat 
// diterapkan untuk membuat method yang lebih spesifik di SubClass. Selain itu, overriding juga dapat diterapkan untuk
// menambah properti baru di SubClass. Overriding dapat diterapkan pada constructor maupun pada method.


// Overriding Constructor
// Constructor adalah method khusus yang dipanggil ketika instance class dibuat. Misalnya, ketika membuat instance class
// dengan keyword new, constructor akan terpanggil.

