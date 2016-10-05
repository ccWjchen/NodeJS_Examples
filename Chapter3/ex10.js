function Dog(name,legNo) {
  this.name=name;
  this.legNo=legNo;
}

var dogA=new Dog("Lucky",4);
console.log("dogA 的名字是 "+dogA.name);
var dogB=dogA;
dogB.name="Doggie";
console.log("dogA 的名字是 "+dogA.name);
