
let identitas = {
    nama : "ihsan",
    umur : "24 tahun",
    gf : "jihan permata ayu",
    tinggi : 174,
    berat : 60,
    "tinggkat pendapatan" : "Lebih"
};


console.log(identitas);
console.log(identitas.nama);

console.log(`nama saya adalah ${identitas.nama}`)
console.log(`penghasilan ${identitas["tinggkat pendapatan"]}`)


identitas.tinggi = 180;
identitas["umur"] = "25 tahun"

console.log(identitas.tinggi);
console.log(identitas.umur);