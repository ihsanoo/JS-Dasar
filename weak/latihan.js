let chace = new WeakMap();

let user1 = {name : "nadine"};
let user2 = {name : "yanzah"};

chace.set(user1, "profile1");
chace.set(user2, "profile2");

// ambil nilai dari chace user1 dan user2

console.log(chace.get(user1));
console.log(chace.get(user2));

// menghapus key user2 dan kemudian cek apakah masih ada di dalam weakmap

chace.delete(user2);

console.log(chace.has(user2));


// membuat dan menambahkan weakset 
// buat weakSet bernama visited dan tambahkan objek page 1 dan page 2

let visited = new WeakSet();

let page1 = {url : "page1"};
let page2 = {url : 'page2'};

visited.add(page1);
visited.add(page2);

// periksa apakah page1 dan page 2 ada dalam visited;

console.log(visited.has(page1));
console.log(visited.has(page2));

// menghapus page 2 dari visited kemudian cek kembali apakah ada dalam weakSet

visited.delete(page2);

console.log(visited.has(page2));






