function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}


Rectangle.prototype.area = function() {
     return this.width * this.height
}

Rectangle.prototype.perimeter = function() {
    return 2 * (this.height + this.width)
}

const ppanjang = new Rectangle(21, 12);


console.log(ppanjang.area());
console.log(ppanjang.perimeter());