let num = 1236;
let sum = 0;
let temp = num;

while (temp > 0) {
    let digit = temp % 10; // Last digit nikala
    sum += digit;          // Sum me add kiya
    temp = Math.floor(temp / 10); // Last digit hata diya
}
console.log(`Sum of digits of ${num} is: ${sum}`);