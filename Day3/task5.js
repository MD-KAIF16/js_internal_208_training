let user = { name: "Aman", age: 21, course: "JS" };

// Convert object → JSON string
let jsonData = JSON.stringify(user);
console.log(jsonData);

// Convert JSON string → object
let objData = JSON.parse(jsonData);
console.log(objData);
