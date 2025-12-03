function hi(){
    console.log("Hello I'm a function");
}

hi();
function welcome(myName:string){
    console.log(`Hello ${myName}`);
}

welcome("Omar");

function calculateSum(price:number, quantity:number): number{
    return price + quantity;
}

console.log(calculateSum(4,5));

function greeting(name:string, message?:string){
    if(message){
        console.log(`Hello ${name}, ${message}`)
    }else{
        console.log(`Hello ${name}`)
    }
}

greeting("Omar");
greeting("Omar", "Welcome onboard!");

function add(firstNumber: number, secondNumber: number=0){
    console.log(firstNumber + secondNumber);
}
add(1);
add(3,5);

// Arrow function
const addNew= (a:number, b:number):number => a+b;
console.log(addNew(1,3));

type MatchOperation = (firstNumber:number, secondNumber:number) => number;

const addArrow:MatchOperation = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(addArrow(4,5));

const multiply:MatchOperation = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(multiply(4,4));