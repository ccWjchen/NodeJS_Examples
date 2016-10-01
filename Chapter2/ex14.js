function factorial(N) {
	var result=1;
	if (N==1) {
		return result;
	}
	result=N*factorial(N-1);
	return result;
}

for (var i=1;i<=10;i++) {
	console.log(i+"!="+factorial(i));
}
