/*
const user={
    username:"Bhavya",
    price:500,
    welcome:function(){
        console.log(`${this.username}, welcome to our website`);    //this refer to the current context
        console.log(this); //it will give user object as output
    }
}
user.welcome()
console.log(this);  //it will give empty object as output as there is no global object
//but in browser we have global object 'windows' so, line 10 return window object as output in brwoser
*/

//+++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++++++
// syntax of arrow funciton '() => {}'
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(2,5));
// implicit return method of above arrow function
// const add2=(num1,num2)=> num1+num2
const add2=(num1,num2)=> (num1+num2)    //if you use braces then you must write return, but in parenthesis youd didn't need
console.log(add2(5,6));
//if you want to return a object in implicit return arrow function
const add3=(num1,num2)=> ({username:"Bhavya"})  //you must enclose in parenthesis