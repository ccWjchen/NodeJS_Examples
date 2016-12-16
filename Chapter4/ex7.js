var Company=require("./company.js").Company;
Company.numberOfLoad++;
console.log("Company.numberOfLoad="+Company.numberOfLoad);
Company=require("./company.js").Company;
Company.numberOfLoad++;
console.log("Company.numberOfLoad="+Company.numberOfLoad);
