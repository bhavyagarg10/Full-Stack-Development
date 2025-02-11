const myobj={
    js:"javascript",
    cpp:"cplusplus",
    rb:"ruby",
    swift:"swift by apple"
}
for(const val in myobj){    //it will assign each key one by one to val
    // console.log(val);
}
for(const val in myobj){
    // console.log(`${val} has value ${myobj[val]}`);
}
//for in loop in array
const myarr=[5,1,4,3]
for(const val in myarr){    //it will assign each index(not value) one by one to val
    console.log(val);
}
//we cannot use for in loop for map as map is not iterable