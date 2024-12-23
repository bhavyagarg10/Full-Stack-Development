/*
function add(no1,no2){  //function ki defination m parameter diye jaate h 
    console.log(no1+no2);
}
add(5,2)                //or function ko call krte hue unhe arguments diye jaate h

//function with return statement
function add(par1,par2){
    return par1+par2
}
let result=add(5,6)
console.log(result);
*/

/*
function login(username){
    return `${username} just logged in`
}
console.log(login("Bhavya"));
console.log(login());   //here as i did not give any argument it will return undefined where i use username in return statement
*/

/*function login(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(login("Bhavya"));
console.log(login());*/

/*
//default value of parameter
function login(username="Sam"){
    return `${username} just logged in`
}
console.log(login("Bhavya"));
console.log(login());
*/

/*
//when we don't know the exact number of parameters
function ids(...num1){    //here the "..." dotes will works as a rest operator
    return num1
}
console.log(ids(500,200,30,56,32));
*/

const myobj={
    username:"Bhavya",
    price:5465
}
function myfunc(anyobj){
    console.log(`Name is ${anyobj.username} and price is ${anyobj.price}`);
}
myfunc(myobj)