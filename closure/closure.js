function init() {
    const name = 'Obi wan'; // variabel lokal di dalam scope fungsi init

    function greet() {          // inner function, merupaka contoh closure
        console.log(`Halo, ${name}`);   // memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();