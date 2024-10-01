

// construction function



function car(brand, color, maxspeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxspeed = maxspeed;
    this.chassisNumber = chassisNumber;
}


    car.prototype.drive = function () {
        console.log(`${this.brand} ${this.color} is Driving`);
    }

    car.prototype.reverse = function () {
        console.log(`${this.brand} ${this.color} is Reversing`);
    } 

    car.prototype.retrun = function() {
        console.log(`${this.brand} ${this.color} is Retruning`);
    }


const mobil1 = new car('BMW', 'red', 170000, 8999292);
const mobil2 = new car('Toyota', 'blue', 518518, 9090);
const mobil3 = new car();


console.log(mobil1)
console.log(mobil2)


mobil1.reverse();
mobil2.retrun();