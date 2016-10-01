var Lucky={
	"feetNo" : 4,
	"canBark" : true,
	"bark" : function(n) {
			for (var i=0;i<n;i++) {
				console.log("汪汪!");
			}
		 }
};

console.log("Lucky有"+Lucky.feetNo+"隻腳");
if (Lucky.canBark) {
	Lucky.bark(4);
}
