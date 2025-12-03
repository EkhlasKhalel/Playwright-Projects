const fruits = ['Mango', 'apple', 'strawberry'];
const name = 'Omar';

//for loop
//(intialization point; the condition(when true it will keep executing); what happens after each iteration)
for(let i = 0 ; i < fruits.length ; i++ ){
    console.log(fruits[i]);
}

//Enhanced for loop
for(const char of name){
    console.log(char);
}

//While loop
//it will keep iterating
let x = 0;
while(x < 3){
console.log(x);
if(x==2){
    break;
}
x++;
}

//Do while loop
// it executes the first block before checking the condition
let y = 2;
do{
    console.log(y);
    y++;
}
while(y !=2)
