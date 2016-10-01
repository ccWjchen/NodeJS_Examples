var jsonString='{\
	"manifest_version" : 2,\
	"name" : "ex12",\
	"description" : "ex12",\
	"version" : "0.0.1",\
	"app" : {\
		"background" : {\
			"scripts" : ["background.js"]\
		}\
	},\
	"permissions" : [\
		"<all_urls>",\
		"unlimitedStorage"\
	]\
}\
';

var jsonObject=JSON.parse(jsonString);
console.log(jsonObject.manifest_version);
console.log(jsonObject.name);
console.log(jsonObject.version);
console.log(jsonObject.app);
console.log(jsonObject.permissions);
