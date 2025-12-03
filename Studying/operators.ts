
// Arithmetic Operators in TypeScript

let firstnumber = 10;
let secondnumber = 5;       
let addition = firstnumber + secondnumber;
let subtraction = firstnumber - secondnumber;
let multiplication = firstnumber * secondnumber;
let division = firstnumber / secondnumber;
let modulus = firstnumber % secondnumber; 
console.log("Addition: "+addition);
console.log("Subtraction: "+subtraction);
console.log("Multiplication: "+multiplication);
console.log("Division: "+division);
console.log("Modulus: "+modulus);   


firstnumber = 5;
secondnumber = 5; 
// Comparison Operators in TypeScript
let isEqual = firstnumber == secondnumber;
let Equal = firstnumber === secondnumber;
let isNotEqual = firstnumber != secondnumber;
let isGreaterThan = firstnumber > secondnumber;
let isLessThan = firstnumber < secondnumber;
let isGreaterThanOrEqual = firstnumber >= secondnumber;
let isLessThanOrEqual = firstnumber <= secondnumber;
console.log("Is Equal: "+isEqual);
console.log("Is Not Equal: "+isNotEqual);
console.log("Is Greater Than: "+isGreaterThan);
console.log("Is Less Than: "+isLessThan);
console.log("Is Greater Than Or Equal: "+isGreaterThanOrEqual);
console.log("Is Less Than Or Equal: "+isLessThanOrEqual);

// Logical Operators in TypeScript
let and = (firstnumber > 5) && (secondnumber < 10);
let or = (firstnumber > 15) || (secondnumber < 10);
let not = !(firstnumber > secondnumber);
console.log("AND Operation: "+and);
console.log("OR Operation: "+or);
console.log("NOT Operation: "+not);

// Assignment Operators in TypeScript
let x = 5;
x += 4;
console.log("Final value of x: "+x);
x -= 3;
console.log("Final value of x: "+x);
x *= 3;
console.log("Final value of x: "+x);
x /= 3;
console.log("Final value of x: "+x);
x %= 3;
console.log("Final value of x: "+x);

// Increment and Decrement Operators in TypeScript
let y = 10;
y++;
console.log("Value of y after increment: "+y);
y--;
console.log("Value of y after decrement: "+y);

// Ternary Operator in TypeScript
let age = 20;
let isAdultorminor = (age >= 18) ? "Adult" : "minor";
console.log(isAdultorminor);

// Typeof Operator in TypeScript
let sampleString = "Hello, TypeScript!";
let sampleNumber = 42;      
console.log("Type of sampleString: "+typeof sampleString);
console.log("Type of sampleNumber: "+typeof sampleNumber);

