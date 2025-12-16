
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

//Arrays
let list: number[] = [1, 2, 3, 4, 5];
console.log("my list is "+list);
let list2: Array<string> = ["Omar", "Ahmed", "Sayed"];
console.log("my list2 is "+list2);
let list3: any[] = [1, "Omar", true, 4.5];
console.log("my list3 is "+list3);
console.log("my list3 element at index 1 is "+list3[1]);
console.log("my list3 element at index 2 is "+list3[2]);

// Empty Arrays
let names: string[] = [];
console.log("my names are "+names);

//Array literals
names = ["Omar", "Ahmed", "Sayed"];
console.log("my names is "+names[0]);

//Array constructor
let numbers: Array<number> = new Array(1, 2, 3, 4, 5);
console.log("my numbers are "+numbers);

//aadding element to array
names.push("Mahmoud");
console.log("my names after adding element "+names);

//removing element from array
names.pop();
console.log("my names after removing element "+names);

//adding element at specific index
names[1]="Ali";
console.log("my names after adding element at specific index "+names);

//length of array
console.log("length of names array is "+names.length);

//add element at the end of array
names[names.length]="Khaled";
console.log("my names after adding element at the end of array "+names);

//remove element from the end of array
names.length=names.length-1;
console.log("my names after removing element from the end of array "+names);


//union types
let price: string | number | boolean="25$";
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