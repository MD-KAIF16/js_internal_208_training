function run(n){
    return n*2;
    
}

let ch = run(72);
console.log("The value of ch is :" ,ch);


//Array 

let arr = [1,2,3,"Hello","united" , ch]; //Array import "ch" value
console.log(arr);

let fr = ["Apple " , "Banana " , "Orange" , "Guava" , "Kiwi"];
for(let i of fr){
    console.log(fr);
}
for(let i = 0 ; i < fr.length ; i++){
    console.log(fr);
}
fr.push("papaya");
console.log(fr);
fr.pop();
console.log(fr);


fr.unshift("kiwi")
console.log(fr);
fr.shift();
console.log(fr);


console.log(fr.includes("Mango"));
console.log(fr.indexOf());



//map(()) function

console.log("Map function ")
let number = [1 ,2,3];
let double = number.map(n=>n*2);

console.log(number);
console.log(double);

//Filter(()) function

let res = number.filter(n=>n>2);
console.log(number);
console.log(res);


//Accumulated 





//Assignment 


//Question 1 
let arrr = [2,4,6,8];
let db = arrr.map(n=>n*2);

console.log(arrr);
console.log(db);


//Question 2
let numbers = [10 , 25 , 30 , 5 , 60 ];
let fl = numbers.filter(n=>n>20);

console.log(numbers);
console.log(fl);

//Question 3
let num = [ 1,2,3,4,5];
let sum = num.reduce((acc , val)=>acc+val , 0 );

console.log(num);
console.log(sum );
