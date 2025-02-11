 const arr=[5,2,7,8,9]
arr.forEach(function(val){  // for each with call back function
    // console.log(val);
})

//for each with arrow function
arr.forEach((val)=>{
    // console.log(val);
})

//for each loop by giving reference of call back function
function printme(val){
    // console.log(val);
}
arr.forEach(printme)

//more in for each
arr.forEach((val,index,aray)=>{
    // console.log(val,index,aray);  
})

//for each loop on array of objects
const myarr=[
    {
        lan:"javascript",
        file:"js"
    },
    {
        lan:"java",
        file:"java"
    },
    {
        lan:"ruby",
        file:"rb"
    }
]
myarr.forEach((item)=>{
    // console.log(`${item.lan} and its value is ${item.file}`);
})
