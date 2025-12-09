function checkArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length; // Number of digits

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) return true;
    else return false;
}

let number = 153;
if (checkArmstrong(number)) {
    console.log(`${number} is an Armstrong Number`);
} else {
    console.log(`${number} is NOT an Armstrong Number`);
}