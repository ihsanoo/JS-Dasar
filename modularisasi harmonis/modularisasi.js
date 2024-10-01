// Modularisasi dapat membantu untuk memecah kode program sehingga lebih terstruktur, singkat dan jelas.


// Berikut adalah objektif pembelajaran yang akan dicapai pada modul ini.

// Menjelaskan sebuah masalah yang dapat dipecahkan dengan teknik modularisasi.
// Membedakan antara default export dan named exports, begitu juga dengan default import dan named imports.
// Mengidentifikasi "module" dalam konteks JavaScript.
// Mengimplementasikan modularisasi untuk mengekspor function, variable, atau nilai lain di dalam sebuah module.
// Menggunakan nilai function, variable, atau nilai lain yang diimpor dari sebuah module.

// Mengenal Modularisasi

// Idealnya kode yang ditulis memiliki struktur yang jelas dan ringkas. Untuk menjaga kode tetap terstruktur
// dan ringkas ketika programnya semakin kompleks, butuh upaya yang besar. Salah satu cara agar kode program yang kompleks
// menjadi tetap terstruktur dan jelas adalah dengan menerapkan modularisasi.


// Modularisasi adalah cara kita untuk memcahkan kode program yang kompleks dan besar menjadi bentuk yang lebih sederhana dan ringkas. 
// Implementasi dari modularisasi di JavaScript adalah dengan membuat berkas-berkas terpisah per bagian function/method yang disebut dengan modul.
// kode yang ada di dalam Modul dapat digunakan oleh modul lainnya dengan cara Export Import.

/**
 Manfaat dari Modularisasi adalah dapat menyelesaikan masalah terkait struktur dan kode program. Modularisai dapat mempernudah kita untuk memahami keseluruan struktur
 program sehingga gampang untuk berkolaborasi. Modularisasi membuat struktur kode menjadi rapi, memahami struktur dan membaca kode program yang sudah kompleks pun menjadi lebih mudah.
 selain itu, function/method yang ditulis dapat digunakan kembali di tempat lainnya(reusable). Misalnya, satu function dapat digunakan di dua fitur yang berbeda.


 JavaScript awalnya tidak memiliki konsep modularisai. javascript mengenal scope yang sama dari function/method/variable. Namun semenjak adanya ECMAscript 2015,
 JavaScript bisa menggunakan konsep modularisasi dan dapat menggunakan keyword import dan export.


 Import memungkinkan kita untuk memasukan function/method/fariabel dari modul lain.

 Export memungkinkan kita untuk mengeluarkan function/method/varibale ke modul lain agar dapt digunakan.
 
 */