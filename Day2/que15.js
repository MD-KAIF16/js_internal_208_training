function canVote(age) {
    if (age >= 18) return "Eligible";
    else return "Not Eligible";
}
console.log(canVote(20));