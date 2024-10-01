
let identitas = {
    nama : "yanzah",
    umur : "18 tahun",
    gf : "Nadine",
    tinggi : 179,
    berat : 68,
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