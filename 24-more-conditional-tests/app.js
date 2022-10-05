// Tests for equality and inequality with strings
let firstString = "BMW";
let secondString = "toyota";
let thirdString = "BMW";

console.log(firstString.localeCompare(secondString) ? true : false);
console.log(firstString.localeCompare(thirdString) ? true : false);

// Tests using the lower case function
const isLowerCase = string => /^[a-z]*$/.test(string);
console.log(isLowerCase(secondString));

let num1 = 65;
let num2 = 15;
let num3 = 99;

/* Numerical tests involving equality and inequality, 
    greater than and less than, greater than or equal to, 
    and less than or equal to*/
console.log(num1 == num2 ? true : false);
console.log(num1 != num3 ? true : false);
console.log(num1 > num2 ? true : false);
console.log(num1 < num2 ? true : false);
console.log(num1 >= num3 ? true : false);
console.log(num1 <= num2 ? true : false);

// Tests using "and" and "or" operators
if(num1 == num2 && num2 <= num3)
    console.log(true)
else
    console.log(false);

if(num1 == num2 || num2 <= num3)
    console.log(true)
else
    console.log(false);

// Test whether an item is in a array
var locations = ["Naran","Kaghan","Hunza","Karachi","Daska"];
console.log(locations.includes("Daska") ? true : false );
console.log(locations.includes("Sialkot") ? true : false );