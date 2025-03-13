"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log("Sum of 4 and 3.5 :",4 +3.5) // code readability should be high

console.log("Sagar")


let name = "Sagar"
let age = 23
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined to check of data type of variable 
console.log(typeof null); // object

//object

let person ={
    name :"Sagar",
    Age:"23",
    role: "Software Developer ",
    company :'Paisalo digital limited.'
}
console.log(person);

// array 
let role = ["Designer","Developer","Tester"];
console.log(role);
console.log(role[2]);

//Function 

function status (name){
    return `Happy, ${name}!`;
}
console.log(status("Jack"));


