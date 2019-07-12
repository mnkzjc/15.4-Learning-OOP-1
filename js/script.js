'use strict';

function Phone (brand, price, color, screen){
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.screen = screen;
}

Phone.prototype.printInfo = function(){
  console.log("The phone brand is " + this.brand + ", screen size is " + this.screen + ", color is " + this.color + " and the price is " + this.price + ".");
}


var iPhone6s = new Phone("Apple", 3500, "black", 5.3);
var xperiaZ5 = new Phone("Sony", 2000, "silver", 5.1);
var galaxyS6 = new Phone("Samsung", 2500, "red", 5.5);

iPhone6s.printInfo();
xperiaZ5.printInfo();
galaxyS6.printInfo();

