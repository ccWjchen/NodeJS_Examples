var fs=require("fs");
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new console.Console(output, errorOutput);
logger.log("count=%d", 254);
logger.error("錯誤");
