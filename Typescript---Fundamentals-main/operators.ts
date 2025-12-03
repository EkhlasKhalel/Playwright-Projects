// Arthimetic operators
let number1 = 10;
let number2 = 5;
let sum = number1 + number2; //15 
let subtract = number1 - number2; //5
let product = number1 * number2; //50
let division = number1 / number2;//2
let remainder = number1 % (number2-2); //1


console.log(sum);
console.log(subtract);
console.log(product);
console.log(division);
console.log(remainder);

// Comparison operator

let firstNumber = 5;
let secondNumber = 10;

firstNumber == secondNumber; // is equal
firstNumber === secondNumber; // is strict equal "same value and same data type"
firstNumber != secondNumber; // is not equal
firstNumber > secondNumber; // is greater than
firstNumber < secondNumber; // is lesser than
firstNumber <= secondNumber; // is lesser than or equals
firstNumber >= secondNumber; // is greater than or equals

// logical operators

let isTrue = true;
let isFalse = false;

isTrue && isFalse; // And
isTrue || isFalse; // Or
!isTrue; // not


// Assignment operator
let num;
num = 5;
num += 4; // 5 + 4 = 9
num -= 3; // 9 - 3 = 6
num *= 4; // 6 * 4 = 24
num /= 3; // 24 / 3 = 8
num %= 5; // 8 % 5 = 3
console.log(num);


// ternay operator
let age = 15;
let message = age>=18 ? 'adult' : 'minor';
console.log(message);

