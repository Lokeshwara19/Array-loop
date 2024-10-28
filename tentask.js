"use strict";

// 1. Get a number input n from the user. Print the numbers 1 to n with the following conditions:

// let num = parseInt(prompt("enter the number"));

// for(let i = 1; i <= num; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("fizz buzz");
//     }
//     else if(i%3==0){
//         console.log("fizz");
//     }
//     else if(i%5==0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }



// 2. Write a function that takes 5 number input from user a,b,c,d,e and perform the
// operation a + b - c * d / e and return the result.

// let a = parseInt(prompt("Enter the value 1"));
// let b = parseInt(prompt("Enter the value 2"));
// let c = parseInt(prompt("Enter the value 3"));
// let d = parseInt(prompt("Enter the value 4"));
// let e = parseInt(prompt("Enter the value 5"));

// function operation(){

//     return   a + b - c * d / e;
// }
// let output = operation();
// console.log("output : "+output);


// 3. Write a function that takes hours as input and converts it into seconds.

// let hours = parseInt(prompt("Enter the hours "));

// function convertion(){
//     return hours * 60 * 60;
// }
// let result = convertion();
// console.log("output : "+hours+" hour = "+result+" Seconds");


// 4. Write a function that takes years as input and converts it into days.

// let a = parseInt(prompt("Enter the year"));

// operation();
// function operation( ){
//     let result = a * 365;
//     console.log("The "+a+" years = "+result+ " days");
// }


//5. Write a program that gets a string from the user as input and the task is to
// count the number of vowels in that given string.
// Vowels: a, e, i, o, u

// let str = prompt("enter the string");
//     str = str.toLowerCase();
// let arr = str.split("");
// let count = 0;
// let result = "";
// for(let i=0;i<arr.length;i++){
//     if("a" == arr[i] ||"e" == arr[i]||"i" == arr[i]||"o" == arr[i]||"u" == arr[i] ){
//         count = ++count;
//         result = count + "vowels";   
//     }   
// }
// console.log("the word "+str+"= " +result);


// 6. Write a program that gets a number n from the user. The task is to print the
// number from 1 to n by mentioning it as odd or even number.


// let num = parseInt(prompt("enter the value"));
// for(let i= 1; i <= num ;i++){
//     if(i % 2 == 0){
//         console.log(i+" - even");
//     }
//     else{
//         console.log(i+" - odd");
//     }
// }

// 7. Get an array as input. The task is to reverse the array and store it in another
// array without using reverse() method.

let input =prompt("enter the 20 string") ;
let arr = input.split(" ");
let str = "";
for(let i= arr.length-1;i>=0;i--){
    str += arr[i]+" "
}
console.log((str).split(" "));

// 8. Get 2 input from users and store it in two variables. Check whether the strict
// values are equal, values are equal and values are not equal.


// let num1 = 20;
// let num2 = "20";

// if(num1 === num2){
//     console.log("Both the value and datatypes are equal");
// }
// else if(num1 == num2  ){
//     console.log("Values are equal but different datatypes");
// }
// else{
//     console.log(" Values are not equal")
// }


// 9. Get a number input from the user and return true whether the given number
// greater than zero, if the number is less than or equal to zero then return false.
// If the given input is not a number return invalid input.


// let value = parseInt(prompt("enter the value"));

// if(value > 0){
//     console.log("true");
// }
// else if(value <= 0){
//     console.log("false");
// }
// else{
//     console.log("invalid input");
// }


// 10. Get 2 inputs from the user. It can be numbers, strings, boolean, null,
// undefined, etc. If the given two numbers are truthy values then return true or
// else return false.


// let input1 = -1;
// let input2 = 10;

// if(input1 && input2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }