let marks = [80 , 90 , 70 , 85 , 95];
let avg = marks.reduce((sum , val) => sum+val , 0) / marks.length ;
console.log("Average Marks :" , avg);