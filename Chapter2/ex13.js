function factorial(N) {
	var result=1;
	if (N==1) {
		return result;
	}
	result=N*factorial(N-1);
	return result;
}

var i=1;
while (i<=10) {
	console.log(i+"!="+factorial(i));
	i++;
}
