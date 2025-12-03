
// Boolean
let isDone: boolean = true;
let isNotDone: boolean = false;
console.log(isDone);
console.log(isNotDone);

// number
let num1: number = 15;
let num2: number = 9123.123312;
console.log(num1);
console.log(num2);

// String
let name: string = "Omar";
let number: string = "15";
console.log(name);
console.log(number);

// Any
let dynamic: any = "string";
console.log(dynamic);
dynamic = 17;
console.log(dynamic);
dynamic = false;
console.log(dynamic);

// null
let nullValue: null = null;
console.log(nullValue);

// undefined
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

// Arrays
let names=["Omar","Ali","Mohamed"];
let table:string[]=["Omar","Ali","Mohamed"];
let salary:number[]=[1253,2255589,32258];
console.log("my names is "+names[0]);

//union types
let price: string|number|boolean="25$";
price="omar";
price= 25;
console.log(price);

//object
let employee=
 {
    name:"Omar",
    age :29,
    address:{
        firstaddress:"Cairo",
        secondaddress:"Egypt" 
    }

} 
console.log("my name is "+employee.name+" and my age is "+employee.age+"my address is "+employee.address.firstaddress+" , "+employee.address.secondaddress);

