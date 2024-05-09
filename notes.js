// console.log("notes page is loaded");
// var age =45;
// const addNumber= function(a,b){
//     return a+b;
// }
// module.exports={
//     age,
//     addNumber
// }

var prompt = require('prompt-sync')();
const age = prompt("enter here");
if (age<18) {
    console.log("get 20% discount");
} else {
    console.log("get above 20%");
}