function getGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

let marks = 82;
console.log(`Marks: ${marks}, Grade: ${getGrade(marks)}`);