var now=new Date();

var string1=now.toUTCString();
var string2=now.toLocaleString();
var string3=now.toString();

console.log("目前的時間的年份是 "+now.getFullYear());
console.log("目前的時間的月份是 "+now.getMonth()+1);
console.log("目前的時間的日期是 "+now.getDate());
console.log("目前的時間的時是 "+now.getHours());
console.log("目前的時間的分是 "+now.getMinutes());
console.log("目前的時間的秒是 "+now.getSeconds());
console.log("UTC時間字串是 "+string1);
console.log("地區時間字串是 "+string2);
console.log("時間字串是 "+string3);
