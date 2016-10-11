var ex16JsText;

function readFileCallback(error,fileText) {
  console.log(fileText);
}

var fileSystem=require('fs');
console.log('呼叫 readFileSync 前!');
fileSystem.readFile('ex16.js','utf8',readFileCallback);
console.log('呼叫 readFileSync 後!');
