var width=3;
var height=4;

function calculateRectangleArea(width,height) {
	var area=0;
	area=width*height;
	width=10;
	height=20;
	return area;
}

var area=calculateRectangleArea(width,height);
console.log("width="+width);
console.log("height="+height);
console.log("area="+area);
