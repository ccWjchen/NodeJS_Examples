function RoasterClass() {
  this.temperature=0;
  this.targetTemperature=0;
}

RoasterClass.prototype.setTemperature=function (temperature) {
  if (temperature>500) {
    console.log("你設定的溫度太高!");
  } else {
    this.targetTemperature=temperature;
  }
};

RoasterClass.prototype.getTemperature=function () {
  return this.temperature;
};

var Roaster=new RoasterClass();
Roaster.temperature=1000;
Roaster.setTemperature(1000);
