const tinder=new Object()   //it will create a singleton object
tinder.name="Sam"
tinder.age=18
tinder.isloggedin=false

// console.log(tinder);

const regularuser={
    email:"bhavya@adobe.com",
    fullname:{
        usrname:{
            firstname:"Bhavya",
            lastname:"Chaudhary"
        }
    }
}
// console.log(regularuser.fullname.usrname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}  //it will create a object of objects
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}    //mostly use this method
// console.log(obj3);

const a=[
    {
    id:653,
    name:"ram"
},
{
    id:651,
    name:"anad"
}
]
// console.log(a[0].id);

/*
console.log(tinder);
console.log(Object.keys(tinder));   //these all will written in a array form
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty("age"));  //it will return whether this key is in object or not 
*/

const course={
    name:"mern",
    id:654,
    courseInstructor:"Bhavya"
}
// if we want to access course Instructor multiple time
console.log(course.courseInstructor);

//an efficient method to access course Instructor multiple time
const {courseInstructor}=course
console.log(courseInstructor);

//and if you want to use a smaller name for courseInstructor
const {courseInstructor:Instructor}=course
console.log(Instructor);
