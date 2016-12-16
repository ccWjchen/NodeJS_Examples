const fileSystem=require("fs");
const readStream=fileSystem.createReadStream("data.txt");
const writeStream=fileSystem.createWriteStream("temp.txt");
readStream.pipe(writeStream);
