let choice = 3; // 1:Add, 2:Sub, 3:Mul, 4:Div
let a = 10, b = 5;

switch (choice) {
    case 1:
         console.log("Addition:", a + b);
          break;
    case 2:
         console.log("Subtraction:", a - b);
          break;
    case 3:
         console.log("Multiplication:", a * b);
          break;
    case 4:
         console.log("Division:", a / b);
          break;
    default:
         console.log("Invalid Choice");
}