// Finally adalah kode yang berada di akhir try-catch. Bila mana catch dieksekusi hanya ketika ada,
// Error di dalam bolk try, blok yang ada finally akan selalu dieksekusi.

try {
    console.log('ini adalah blok try');
    throw new Error('ini dalah blok error')
}catch {
    console.log('ini adalah blok catch');
}finally {
    console.log("ini adalah blok finally");
}