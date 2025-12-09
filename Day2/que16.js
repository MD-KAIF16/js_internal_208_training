function checkPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Agar kisi se bhi divide hua toh Prime nahi hai
        }
    }
    return true;
}

let num = 7;
if (checkPrime(num)) {
    console.log(`${num} is a Prime Number`);
} else {
    console.log(`${num} is NOT a Prime Number`);
}