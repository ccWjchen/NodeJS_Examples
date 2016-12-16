const fileSystem=require("fs");
const readStream=fileSystem.createReadStream("ex8.js");
readStream.on(
  "data",
  function (chunkData) {
    console.log(chunkData.toString());
  }
);
readStream.on(
  "end",
  function () {
    console.log("檔案讀取結束。");
  }
);
