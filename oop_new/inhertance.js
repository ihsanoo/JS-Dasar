class smarphones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model
    }
    charging() {
        console.log(`charging ${this.model}`)
    }
}


class iOs extends smarphones {
    airDrop() {
        console.log(`iOs hava a behavior airDrop`)
    }
}

class android extends smarphones {
    splitScreen() {
        console.log(`Android have a split screen`)
    }
}


const ios = new iOs('Red', "Iphone", "11");
const Android = new android("Black", "Samsung", "S")


console.log(ios)
console.log(Android)

ios.charging();
ios.airDrop();

Android.charging();
Android.splitScreen();