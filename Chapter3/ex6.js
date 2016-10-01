var counter=0;
var timerID;

function timeoutEventHandler() {
  counter++;
  if (counter==5) {
    console.log("計時結束! counter="+counter);
    clearInterval(timerID);
    return;
  }
  console.log("counter="+counter);
}

console.log("程式開始執行，開始計時，每3秒重新計時一次...。");
timerID=setInterval(timeoutEventHandler,3000);
