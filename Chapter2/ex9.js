function calculateRectangleArea(width,height) {
	var area=0;
	area=width*height;
	return area;
}

function calculateSquareArea(sideLength) {
	var area=0;
	area=calculateRectangleArea(sideLength,sideLength);
	return area;
}

var area=calculateSquareArea(2);
console.log("邊長2的方形面積是 "+area);
