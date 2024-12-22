//Array
/*let myArray=[1,2,3,"shaktiman","muskan"]
// Array in js are resizable and also can have mix datatype element
console.log(myArray);
// in js copy operation create shallow copy, it means it share the reference point if you change in one it will change in all other
let myArray2=new Array(1,2,3)
console.log(myArray2);
myArray2.push(0)    //add element at end
console.log(myArray2)
myArray2.pop()      //remove the last element
console.log(myArray2);

myArray2.unshift(10)    // add element at first place
console.log(myArray2);

myArray2.shift()    // remove the first element
console.log(myArray2)

console.log(myArray2.includes(3));
console.log(myArray2.indexOf(3));

const newArr=myArray.join()     //it adds all elemts of myArray and converts it into string
console.log(newArr); 
console.log(typeof newArr);
*/

//+++++++++++++++ Now we look at the difference between slice and splice ++++++++++++++++++++++++++++++++

let arr=[0,1,2,3,4,5]
console.log("original array: ",arr);
console.log("a new sliced arary: ",arr.slice(1,3));     //it only access the part of the array exclued last index of range
console.log("original array after sliced operation: ",arr);
console.log("new spliced array: ",arr.splice(1,3));         //splice operation remove that part from the original array permanently and it also incluedes the last index too
console.log("original array after spliced operation: ",arr);




