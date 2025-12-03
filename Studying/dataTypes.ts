
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
let n: string = "Omar";
let number: string = "15";
console.log(n);
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

// Tuple
let person: [string, number, boolean];
person = ["Omar", 29, true];
console.log("Name: " + person[0] + ", Age: " + person[1] + ", Employed: " + person[2]);

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log("Color value: " + c);

// Tuple with Enum
enum Status {
    Active,
    Inactive,
    Pending
}
let userStatus: [string, Status];
userStatus = ["Omar", Status.Active];
console.log("User: " + userStatus[0] + ", Status: " + Status[userStatus[1]]);

// Void
function logMessage(): void {
    console.log("This is a void function");
}
logMessage();

// Never
function throwError(message: string): never {
    throw new Error(message);
} 