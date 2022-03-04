//Homework 1

//Exercise 1

let a = +prompt("Write a number");
let b = +prompt("Write a number");

console.log(`1. sum of numbers: ${a + b}`);
console.log(`2. difference of numbers: ${a -b}`);
console.log(`3. product of numbers: ${a * b}`);
console.log(`4. quotient of numbers: ${a / b}`);
console.log(`5. reminder of numbers: ${a % b}`);

//Exercise 2

let firstName = prompt("What is your name?");
let age = +prompt("How old are you");

console.log(`My name is ${firstName}, I am ${age}.`);

//Exercise 3

let isOdd = +prompt("Write a number");

if(isOdd % 2 === 0){
    console.log("no");
} else{
    console.log("yes");
}

//Exercise 4

let isNegative = +prompt("Write a number");

if(isNegative < 0){
    console.log("yes");
} else{
    console.log("no");
}

//Exercise 5

let num1 = +prompt("Write first number");
let num2 = +prompt("Write second number")

if(num1 % num2 === 0 || num2 % num1 === 0){
    console.log("1");
} else{
    console.log("0");
}

//Exercise 6
//Option 1
let monthNum = +prompt("Write a number between 1 and 12 to know respective month");

switch(monthNum) {
    case 1: 
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Wrong number")
        break;
}


//Option 2
let monthNum = +prompt("Write a number between 1 and 12 to know respective month");

if(monthNum >= 1 && monthNum <= 12 && monthNum === 1){
    console.log("January");
} else if(monthNum === 2){
    console.log("February");
} else if(monthNum === 3){
    console.log("March");
} else if(monthNum === 4){
    console.log("April");
} else if(monthNum === 5){
    console.log("May");
} else if(monthNum === 6){
    console.log("Jun");
} else if(monthNum === 7){
    console.log("July");
} else if(monthNum === 8){
    console.log("August");
} else if(monthNum === 9){
    console.log("September");
} else if(monthNum === 10){
    console.log("October");
} else if(monthNum === 11){
    console.log("November");
} else if(monthNum === 12){
    console.log("December");
}

//Exercise 7

let num1 = +prompt("Write a number");
let num2 = +prompt("Write a number");
let num3 = +prompt("Write a number");

if(num1 >= num2 && num1 >= num3){
    console.log(`${num1} is maximum`);
} else if(num2 >= num1 && num2 >= num3){
    console.log(`${num2} is maximum`);
} else{
    console.log(`${num3} is maximum`);
}













