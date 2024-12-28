/*
if(2=="2"){     //it will execute as '==' only checks value
    console.log("executed");
}
if(2==="2"){        //but it will not execute as '===' also checks the datatype of values
    console.log("executed");
}
*/

/*
// implicit scope in if statement
const power=500
if(power>200) console.log(`Power is : ${power}`);

// implicit scope with multiple lines
const balance=23456
if(balance>500) console.log(`Balance is ${balance}`),
console.log(power);

if(balance>500) console.log(`Balance is ${balance}`),console.log(power);
*/

balance=100
if(balance<200){
    console.log("balance is less than 200");
}
else if(balance<500){
    console.log("balance is less than 500");
}
else{
    console.log("balance is less than 1000");
}