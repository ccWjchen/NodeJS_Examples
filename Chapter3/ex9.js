function connectServer() {
  var connectOK=false;
  if (!connectOK) {
    var errorObject=new Error();
    errorObject.number=1;
    errorObject.description="連接伺服器失敗";
    throw errorObject;
  }
}

function collectData() {
  /* 接收資料前要先連接伺服器 */
  connectServer();

	/* 從網路收集資料的程式
	   在這段程式中，會傳回收集到的資料
	 */
  var data="";  // 假設收到空字串的資料
	return data;	// 為了示範自定義錯誤，所以傳回空字串
}

try {
	var receiveData= collectData();
	if (receiveData==="") {
    var errorObject=new Error();
    errorObject.number=2;
    errorObject.description="收集資料錯誤";
    throw errorObject;
	}
} catch (errorObject) {
  console.log(errorObject.description);
  var number=errorObject.number;
  switch (number) {
    case 1:
      /* 因連接伺服器失敗所引起的錯誤 */
      console.log("重新連接");
      break;
    case 2:
      /* 因空字串資料所引起的錯誤 */
      console.log("無法處理資料");
      break;
  }
	return;
}
/* receiveData不是空字串，可以繼續以程式處理收集到的資料 */
console.log("開始處理收集到的資料。");
