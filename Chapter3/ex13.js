/* 定義 Animal 類別 */
function Animal(name,feetNo,sound,canMakeSound) {
	this.name=name;
	this.feetNo=feetNo;
	this.sound=sound;
	this.canMakeSound=canMakeSound;
}
Animal.prototype.makeSound=function(n) {
	if (this.canMakeSound) {
		for (var i=0;i<n;i++) {
			console.log(this.name+this.sound);
		}
	}
};

/* 定義 Dog 類別 */
function Dog(name,feetNo,sound,canMakeSound,canGuardHouse) {
	Animal.call(this,name,feetNo,sound,canMakeSound);
	this.canGuardHouse= canGuardHouse;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.guardHouse=function() {
	if (this.canGuardHouse) {
		console.log(this.name+"在看家。");
	} else {
		console.log(this.name+"在睡覺。");
	}
};
Dog.prototype.makeSound=function (n) {
  if (this.canMakeSound) {
    console.log("我是狗，我的名字是 "+this.name+" ,我的叫聲是");
    for (var i=0;i<n;i++) {
      console.log(this.sound);
    }
  }
};

/* 定義 Cat 類別 */
function Cat(name,feetNo,sound,canMakeSound) {
	Animal.call(this,name,feetNo,sound,canMakeSound);
}
Cat.prototype=Object.create(Animal.prototype);

/* 主要的程式從此開始，前面是類別的定義 */
var animalArray=[];
animalArray.push(new Dog("Lucky",4,"BARK!",true,true));
animalArray.push(new Cat("Lucy",4,"喵!",true));
animalArray.push(new Dog("Joe",3,"吠!",true,false));
animalArray.push(new Dog("Doggie",4,"汪!",false,true));

for (var i=0;i<animalArray.length;i++) {	// 印出每個動物有幾隻腳
	console.log(animalArray[i].name+"有"+animalArray[i].feetNo+
	"隻腳");
}
for (var i=0;i<animalArray.length;i++) {	// 每個動物叫一聲
	animalArray[i].makeSound(1);
}
for (var i=0;i<animalArray.length;i++) {	// 請每隻狗看家
	if (animalArray[i] instanceof Dog) {	// 判斷這個動物是不是狗
		animalArray[i].guardHouse();		// 如果是狗，才能看家
	}
}
