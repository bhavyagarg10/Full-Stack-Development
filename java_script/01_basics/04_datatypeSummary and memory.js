//primitive

// 7types: Number, String, Boolean, Null, Symbol, undefined, BigInt         these acces by value

//Reference type (Non Primitive)            these access by reference
// Array, Object, functions

// JavaScript is a dynamically typed language

/*const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//const bignumber=615165465168186n      //it represent the bigInt
console.log(typeof id);
*/

/*const myArray=["Bhavya", "Anivesh","Akshat","Abhishek"]
const myObj={
    name: "Avi",
    age: 1
}
console.log(myArray,myObj)

const myfunc=function(){
    console.log("Hello");
}
*/


// typeof of null is object
// typeof of all non primitive function is object
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  it gives a copy of the value , Heap(Non-Primitive) it gives the reference of the value

/*let user1={
    email:"bhavya@gmail.com",
    name:"bhavya"
}
let user2=user1
user2.email="avi@gmail.com"
console.log("email of user 1", user1.email)
console.log("email of user 2", user2.email) //both gives the same answer avi@gmail.com as object is non primitive and gives reference
*/