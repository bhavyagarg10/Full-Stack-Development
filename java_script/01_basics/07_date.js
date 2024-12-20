let myDate=new Date()
/*console.log(myDate,"\n");
console.log("toString()",myDate.toString(),"\n");
console.log("toDateString()",myDate.toDateString(),"\n");
console.log("toISOString()",myDate.toISOString(),"\n");
console.log("toJSON()",myDate.toJSON(),"\n");
console.log("toLocaleDateString()",myDate.toLocaleDateString(),"\n");
console.log("toLocaleString()",myDate.toLocaleString(),"\n");
console.log("toLocaleTimeString()",myDate.toLocaleTimeString(),"\n");
console.log("toTimeString()",myDate.toTimeString(),"\n");
console.log("toUTCString()",myDate.toUTCString(),"\n");*/

//
console.log("Type of date is object ",typeof(myDate));

//create out own date
/*let createDate=new Date(2023,0,23)  //month starts with zero
console.log(createDate.toDateString());
let createDate1=new Date(2023,0,23,5,3)
console.log(createDate1.toLocaleString());
let createDate2=new Date("2023-01-3")   //but here month starts with one
console.log(createDate2.toLocaleDateString());
let createDate3=new Date("01/14/2024")
console.log(createDate3.toLocaleDateString());*/

/*let createDate=new Date(2023,0,23)
console.log(createDate.getTime());
let myTimeStamp=Date.now()  //it will give milliseconds from 1970
console.log(myTimeStamp);
//to convert millisecond to sec
console.log(Math.floor(myTimeStamp/1000));*/

let nDate=new Date()
console.log(nDate.getDate());
console.log(nDate.getDay());
console.log(nDate.getFullYear());
console.log(nDate.getMonth()+1);

nDate.toLocaleString('default',{
    weekday:"long",
})  //we can customize it also