const email="bhavya.gmail.com"
if (email) {
    console.log("got email");
}
else{
    console.log("didnt get email");
    
}

/*falsy values :- 

false, 0, -0, BigInt 0n, null, NaN, undefined, "" 

//false==0 :- gives true

truthy values:- 

"0", 'false', " ", [], {}, function(){}
*/

// check array is empty or not
const myarr=[]
if(myarr.length===0){
    console.log("array is empty");
}

//check obj is empty or not 
const myobj={}
if(Object.keys(myobj).length===0){
    console.log("object is empty");
    
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing operator (??): undefined undefined

let val;
// val= 5 ?? 10 //gives 5
// val= null ?? 10  //gives 10
// val= undefined ?? 10    //gives 10
val= null ?? 10 ?? 20   //gives 10
console.log(val);

// Terniary operator ?
// condition ? true : false

let balance=100
balance>=100 ? console.log("balance is above the limit") : console.log("balance is below than the minimum limit");

