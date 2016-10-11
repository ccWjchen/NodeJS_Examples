var events=require('events');

function Dog() {
}

Dog.prototype=Object.create(events.EventEmitter.prototype);
/* 此方法讓小狗去做事，做完事後發出 endWork 事件 */
Dog.prototype.doSomeWork=function() {
  var thisDog=this;
  /* 利用計時器計時 3 秒鐘，模擬小狗做事的時間 */
  setTimeout (
    /* 3秒後，小狗做完事會呼叫此匿名函式 */
    function () {
      thisDog.emit("endWork");
    },
    3000
  );
};
var myDog=new Dog();
/* 登記事件 endWork 的事件處理函式 */
myDog.on(
  "endWork",
  function () {
    console.log("我的小狗做完事了");
  }
);
/* 使用小狗的 doSomeWork 方法，請小狗去做事情 */
myDog.doSomeWork();
