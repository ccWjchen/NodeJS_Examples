function RoasterClass() {
  this.temperature=0;
  this.targetTemperature=0;
}

RoasterClass.prototype.__defineSetter__(
  "temperature",
  function (temperature) {
    if (temperature>500) {
      console.log("你設定的溫度太高!");
    } else {
      this.targetTemperature=temperature;
    }
  }
);

RoasterClass.prototype.__defineGetter__(
  "temperature",
  function () {
    return this.temperature;
  }
);

var Roaster=new RoasterClass();
Roaster.temperature=1000;
