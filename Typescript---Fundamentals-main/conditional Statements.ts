// if - else if - else - nested if

let age = 40;

if(age > 20){
    if(age > 50){
            console.log("age is over 50");
    }else{
    console.log("age is over 20");
    }
}else if(age > 10 && age < 20){
    console.log("age is between 10 and 20");
}else{
    console.log("age is below 10");
}