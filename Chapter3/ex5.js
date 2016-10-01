function timeoutEventHandler() {
  console.log("計時結束!");
}

console.log("程式開始執行，開始計時，3秒後計時結束，請等候...。");
setTimeout(timeoutEventHandler,3000);
