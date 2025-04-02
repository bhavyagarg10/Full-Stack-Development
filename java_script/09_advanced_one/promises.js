// create promises

const promise1=new Promise(function(resolve,reject){
    // do any async task
    // db calls, cryptography, network
    setTimeout(() => {
        // console.log("aSync task1 completed");
        resolve();
    }, 1000);
})
// resolve-> .then and reject-> .catch
promise1.then(function(){
    // console.log("promise1 consumed");
})

// second one
new Promise(function(resolve, reject){
    // console.log("async task2 complete");
    resolve()
},1000).then(function(){
    // console.log("async 2 resolved");
})    

//promise three
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"bhav",email:"bhav@example.com"})
    },1000)
})
promiseThree.then(function(user){
    // console.log(user);
})

//promise four
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"bhav",email:"bahv@example@gmail.com"});
        }
        else{
            reject("error something went wrong")
        }
    },1000)
})
promiseFour
.then((user)=>{
    // console.log(user);
    return user.username
})
.then((myusername)=>{
    // console.log(myusername);
})
.catch((msg)=>{
    // console.log(msg);
})
.finally(()=>{
    // console.log("finally block is always execute either resolve or rejected");
})

//promise 5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Javascript",email:"123"});
        }
        else{
            reject("Error: Js went wrong")
        }
    },1000)
})
async function consumePromiseFive() {
    try{
        const response=await promiseFive;
        // console.log(response);
    }  
    catch(err){
        // console.log(err);
        
    }
}
consumePromiseFive()

//six
async function getAllUsers() {
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        // console.log(data);
    }
    catch(err){
        // console.log("E",err);
        
    }
}
getAllUsers()

// alternative of Six with then
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    // console.log(data);
})
.catch((err)=>{
    // console.log(err);
})