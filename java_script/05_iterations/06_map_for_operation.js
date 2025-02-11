//use map to do operation over all element
// we can also use call back function instead of arrow function

const num=[5,4,9,2,4,2,6]
const nnum=num.map((val)=> val+10)
// console.log(nnum);


// chaining
const num1=[1,2,3,4,5,6,7,8,9]
const nnum1=num1
    .map((val)=>val*10)
    .map((val)=>val+1)

// console.log(nnum1);

const num2=[1,2,3,4,5,6,7,8,9]
const nnum2=num1
    .map((val)=>val*10)
    .map((val)=>val+1)
    .filter((val)=> val>40)
// console.log(nnum2);