function formatInt(num) {
	if (num<10) {
		return num.toString()+"   ";
	} else {
		return num.toString()+"  ";
	}
}

for (var i=1;i<=9;i++) {
	var multiplyString="";
	if (i==4) continue;
	for (var k=1;k<=9;k++) {
		multiplyString = multiplyString +
		i+"*"+k+"="+formatInt(i*k);
	}
	console.log(multiplyString);
}
