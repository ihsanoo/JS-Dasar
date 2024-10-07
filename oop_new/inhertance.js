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


console.log(ios instanceof smarphones)
console.log(Android instanceof smarphones)

ios.charging();
ios.airDrop();

Android.charging();
Android.splitScreen();

// iF WE DO WITHOUT ES6


// function smartphones(color, brand, model) {
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
// }

// smartphones.prototype.charging = function() {
//     console.log(`charging ${this.model}`)
// };

// function iOS(color, brand, model) {
//     smartphones.call(this, color, brand, model);
// }

// iOS.prototype = Object.create(smartphones.prototype);
// iOS.prototype.constructor = iOS;

// iOS.prototype.airDrop = function() {
//     console.log(`iOS have a behavior AirDrop`)
// };


// function Android(color, brand, model) {
//     smartphones.call(this, color, brand, model);
// }

// Android.prototype = Object.create(smartphones.prototype);
// Android.prototype.constructor = Android;

// Android.prototype.splitScreen = function() {
//     console.log(`Android vae a split screen`)
// };

// const ios = new iOS("black", 'A', "12 pro");
// const android = new Android("red" , 'b', "samsung");


// ios.charging(); // Output: Charging 12 Pro Max
// ios.airDrop(); // Output: iOS have a behavior AirDrop

// android.charging(); // Output: Charging Galaxy S21
// android.splitScreen(); // Output: Android have a Split Screen