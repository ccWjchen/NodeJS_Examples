var string1="root:passwd:/root";
var string2="    ABCD    ";
var string3=string2.trim();
var string4=string1.slice(-12,11);
var string5=string1.substring(-12,11);
var array1=string1.split(":");

console.log("string1="+string1);
console.log("string2="+string2);
console.log("string3="+string3);
console.log("string4="+string4);
console.log("string5="+string5);
for (var i=0;i<array1.length;i++) {
	console.log("\t"+array1[i]);
}
