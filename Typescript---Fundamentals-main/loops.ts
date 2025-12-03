
//Loops in Typescript

let number=1;

//for loop
//(intialization point; the condition(when true it will keep executing); what happens after each iteration called increment/decrement)

for(let i = 0 ; i < 100 ; i++ ){
    console.log(i);
}
console.log("-------"); 

//print only number 50

for(let i = 0 ; i < 100 ; i++ ){
    if(i == 50){
    console.log(i);
}}
console.log("-------"); 


//print array using for loop
let names = ["Alice", "Charlie", "Carol", "Bob", "Eve"];

for (let i = 0 ; i < names.length ; i++ ) {
    
    if(names[i] == "Bob") { 
        console.log("Found Bob!");
    }
}
console.log("-------");



//print array using for loop and break statement
for (let i = 0 ; i < names.length ; i++ ) {
    
    if(names[i] == "Bob") { 
        console.log("Found Bob!");
        break;  
    }
}
console.log("-------");

//Enhanced for loop
for(const name of names){

    if(name == "Bob") { 
        console.log("Found Bob!");
        break;  
    }
}

//
for(const name of names){

        console.log(name);
    }


//While loop
//it will keep iterating
let x = 0;
while(x < 3){
console.log(x);
     x++;
}

//While loop that doesn't execute
let i = 5;
while(i < 5){
console.log(i);
     i++;
}




//Do while loop
// it executes the first block before checking the condition
let y = 2;
do{
    console.log(y);
    y++;
}
while(y !=2)
