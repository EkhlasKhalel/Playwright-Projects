
let firstNumber: number = 10;
let secondNumber: number = 20;
console.log(firstNumber + secondNumber);

let thirdNumber: number = 15;
console.log(firstNumber + secondNumber + thirdNumber);
// insted of repeting this situaion more i can replace this with function  

// Functions in TypeScript with static value 
function sum (){
    let firstNumber: number = 10;
    let secondNumber: number = 20;
    console.log(firstNumber + secondNumber);
}
sum();
sum();

// Functions in TypeScript with dynamic value 
// يعنى بخلى الداله تاخد برامتر متغير بديهلها كل مره بنده فيه على الفانكشن 

function subtraction(firstNumber: number, secondNumber: number): void {
    console.log("Hello I'm a function");
}
subtraction(15,5);
subtraction(30,10);
subtraction(100,50);

//سؤال ابراهيم لى مينفعش حد فى كل حاجه any
//هنا هلاقيه طابعلى الاسمين فى اخر خطوه جنب بعص وده مش طبيعى اكون بطرح اسمين 
function multiplication(firstNumber: any, secondNumber: any): void {
    console.log("Hello I'm a function");
}
multiplication(15,5);
multiplication(30,10);
multiplication("take","world"); 
console.log(multiplication(30,10));
//فانا لو حاطه فوق النوع ارقام بس ودخلت اسماء المفروض يضرب ايرور 


// Function with return type

function calculateSum(price:number, quantity:number): number{
    return price + quantity;
}
console.log(calculateSum(100,5));

// Arrow function
const addNew= (a:number, b:number):number => a+b;
console.log(addNew(1,3));

type MatchOperation = (firstNumber:number, secondNumber:number) => number;

const addArrow:MatchOperation = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(addArrow(4,5));

const multiply:MatchOperation = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(multiply(4,4));