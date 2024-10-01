

function greeting(name, language) {
    if(language === "english") {
        return "Good morning " + name + '!';
    } else if (language === "french") {
        return "Bonjour " + name + '!';
    }else if (language === "japanese") {
        return "Ohayo Gozaimasu " + name + " san" + '!';
    } else {
        return " bahasa tidak ditemukan";
    }
}



console.log(greeting("ihsan", "english"));
console.log(greeting("ihsan", "japanese"));
console.log(greeting("ihsan", "spanish"));





let user = {
    id : 24,
    displayName : "yanzah",
    realName : 'ihsan'
}

function introduce({displayName, realName}) {
    return `${displayName} is ${realName}`
}

console.log(introduce(user));


// rest parameter

function penjumlahan(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}


console.log(penjumlahan(1,4,5,3));