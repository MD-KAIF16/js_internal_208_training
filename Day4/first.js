let mydate  = new Date();

console.log("Not best formate :" , mydate);

console.log("Best readeable formate : ",mydate.toString());
console.log(mydate.toLocaleDateString())
console.log(mydate.toISOString())
console.log(mydate.getTimezoneOffset())
console.log(mydate.toLocaleTimeString())
//alert("Hello") not working 