const fileSystem=require("fs");
const writeStream=fileSystem.createWriteStream("data.txt");
writeStream.write("name:王小明\n");
writeStream.write("tel:0912345678\n");
writeStream.end();
