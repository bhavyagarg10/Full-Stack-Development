//primitive

// 7types: Number, String, Boolean, Null, Symbol, undefined, BigInt         these acces by value

//Reference type (Non Primitive)            these access by reference
// Array, Object, functions

// JavaScript is a dynamically typed language

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//const bignumber=615165465168186n      //it represent the bigInt

const myArray=["Bhavya", "Anivesh","Akshat","Abhishek"]
const myObj={
    name: "Avi",
    age: 1
}
console.log(myArray,myObj)

const myfunc=function(){
    console.log("Hello");
}

console.log(typeof id);

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
       