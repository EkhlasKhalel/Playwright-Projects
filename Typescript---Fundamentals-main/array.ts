// Empty array
const names: string[] = [];
// array literal
const fruits: string[] = ['apple', 'banana', 'strawberry']; // 0 1 2 
// array constructor
const numbers: number[] = new Array(1,2,3,4,5);

console.log(fruits[1]);

fruits[2] = 'cherry';
console.log(fruits);

// add value at the beginning of an array
numbers.unshift(0);
console.log(numbers[0]);
// add value at the end of an array
numbers.push(6);
console.log(numbers[numbers.length-1]);
// to remove a number from the beginning of an array
numbers.shift();
console.log(numbers[0]);
// to remove a number from the end of an array
numbers.pop();
console.log(numbers[numbers.length-1]);
// this create new array from the starting point until the last point - 1
const slicedArray = numbers.slice(1,5);
console.log(slicedArray);
// filters an array
const filteredArray = numbers.filter((num)=> num > 4 );
console.log(filteredArray);
// readOnly array
const readOnlyArray: readonly string[] = ['omar', 'ahmed'];
// readOnlyArray[1] = 'mohamed';