function calculate(num1, num2, operator) {
    if (operator === '+') return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/') return num1 / num2;
    else return "Invalid Operator";
}

console.log("Add:", calculate(10, 5, '+'));
console.log("Divide:", calculate(10, 5, '/'));