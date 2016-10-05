function Dog(name) {
  this.name=name;
}

Dog.prototype.run=function() {
  console.log(this.name+" 小跑步!");
};

var dogA=new Dog("Lucky");
var dogB=new Dog("Doggie");

dogA.run=function() {
  console.log(this.name+" 急速快跑!");
};

dogA.run();
dogB.run();
