//to store values of an array with some condition
// we can also use call back function instead of arrow function

const mynum=[5,1,7,3,4,8]
const values=mynum.filter((val)=> val>4)
// console.log(values);

// But if we use curly braces in arrow funtion then we have to use return to return value explicitly
const mynum1=[5,1,7,3,4,8]
const values1=mynum.filter((val)=> {
    return val>4
})
// console.log(values1);

//not prefer but if we do this with foreach
const newnums=[]
const mynum2=[5,1,7,3,4,8]
mynum2.forEach((val)=>{
    if(val>4){
        newnums.push(val)
    }
})
// console.log(newnums);

//example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbooks=books.filter((bk)=> bk.genre==="History")
// console.log(userbooks);
userbooks=books.filter((bk)=> {return bk.publish>2000})
// console.log(userbooks);
userbooks=books.filter((bk)=> bk.publish>1995 && bk.genre==="History")
// console.log(userbooks);

