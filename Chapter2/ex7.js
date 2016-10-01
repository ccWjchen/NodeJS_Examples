function calculateCircleLength(radius) {
	var circleLength;
	circleLength=2*3.1415926*radius;
	return circleLength;
}

var x=calculateCircleLength(1);
var y=calculateCircleLength(2);
var z=calculateCircleLength(3);

console.log("半徑1的圓之周長是 "+x);
console.log("半徑2的圓之周長是 "+y);
console.log("半徑3的圓之周長是 "+z);
