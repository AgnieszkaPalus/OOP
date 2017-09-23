function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxy = new Phone("Samsung", 1500, "black");
var OnePlus1 = new Phone("OnePlus", 2000, "pink");

iPhone6S.printInfo();
SamsungGalaxy.printInfo();
OnePlus1.printInfo();