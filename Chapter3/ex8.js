function collectData() {
	/* 從網路收集資料的程式
	   在這段程式中，會傳回收集到的資料
	 */
	return "";	// 為了示範自定義錯誤，所以傳回空字串
}
try {
	var receiveData= collectData();
	if (receiveData==="") {
		throw new Error("收集資料錯誤");
	}
} catch (errorObject) {
	console.log(errorObject.message);
	return;
}
/* receiveData不是空字串，可以繼續以程式處理收集到的資料 */
console.log("開始處理收集到的資料。");
