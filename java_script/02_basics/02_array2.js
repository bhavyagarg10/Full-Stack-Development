const marvel=["Ironman","thor","Spiderman"]
const dc=["superman","flash","batman"]

/*
marvel.push(dc) //it will add dc in marvel as a new element a whole array as a element
console.log(marvel);
console.log(marvel[3][1]);
*/

/*
const narr=marvel.concat(dc)    //it will add elements of dc in marvel and return a new array
console.log(narr);

// add two or more list in one using spread 
const narr1=[...marvel,...dc,...narr]
console.log(narr1);
*/

/*
const array=[1,2,3,[2,1,6],25,[2,4,8,[2,3,5]],5]
//here we can see the array in array in array
// and we want all the elements in one depth 
const anarray=array.flat(Infinity)
console.log(anarray);
*/

/*
console.log(Array.isArray("Bhavya"));
console.log(Array.from("Bhavya"));
console.log(Array.from({name:"Bhavya"}));   //here it will return empty array as it's not understand for which array should be created

let score=15
let age = 20
let number = 51651206
console.log(Array.of(score,age,number));    //it will create the array of these variables
*/
