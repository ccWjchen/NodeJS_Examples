function factorial(N) {
	var result=1;
	if (N==1) {
		return result;
	}
	result=N*factorial(N-1);
	return result;
}

console.log("5!="+factorial(5));
console.log("10!="+factorial(10));
console.log("15!="+factorial(15));
