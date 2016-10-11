var fileSystem=require('fs');
console.log('呼叫 readFileSync 前!');
var ex15JsText=fileSystem.readFileSync('ex15.js').toString();
console.log(ex15JsText);
console.log('呼叫 readFileSync 後!');
