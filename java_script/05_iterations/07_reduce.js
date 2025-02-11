//using call back function
const num=[10,2,3]
const nnum=num.reduce(function(acc,curr){
    // console.log(`accumulator= ${acc} current value= ${curr}`);
    return acc+curr
},0)
// console.log(nnum);

//using arrow function
const num1=[10,2,3]
const nnum1=num1.reduce((acc,curr)=>(acc+curr),0) 
//here 0 is the initial value used as acc for first element acc->accumulator, curr->currentvalue
// console.log(nnum1);

//example of shopping cart
const shoppingCart=[
    {
        item:"java course",
        cost:2999
    },
    {
        item:"js course",
        cost:1567
    },
    {
        item:"py course",
        cost:5999
    },
    {
        item:"ds course",
        cost:1099
    }
]

const total=shoppingCart.reduce((acc,item)=>(acc+item.cost),0)
console.log(total);
