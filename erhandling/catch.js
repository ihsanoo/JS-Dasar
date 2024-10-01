
try {
    console.log("Memulai Program");
    throw new Error('Error : Program berhenti');
    
    console.log("Mengakhiri Program");

} catch (err) {
    console.log('Karena terjadi error maka blok ini akan dieksekusi');
    
}