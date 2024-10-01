

let userMap = new Map();

let user1 = { id: 1 };
let user2 = { id: 2 };


userMap.set(user1, 'alice');
userMap.set(user2, 'ihsan');


console.log(userMap.get(user1))
console.log(userMap.get(user2));


let map1 = new Map();
let map2 = new Map();


map1.set("name", "ihsan");
map1.set("age", 24);

map2.set("nama", "jihan");
map2.set("umur", 20);


let gabunganMap = new Map([...map1, ...map2]);

console.log(gabunganMap);


let productMap = new Map();

productMap.set("brand", "coffe");
productMap.set("price", "80.000");

