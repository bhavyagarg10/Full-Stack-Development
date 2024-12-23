//singleton
// Object.create

//objects literal
const mysym=Symbol("key1")

const user={    //it will not a singleton object
    name:"Bhavya",
    [mysym]:"mykey",    //use symbol as a key in object
    age:20,
    email:"bhavyagarg@gamil.com",
    islog:false,
    lastlogdays:["Monday","friday"]
}
/*
console.log(user.email);
console.log(user["email"]); //we will prefer this method
console.log(user[mysym]);

user.email="bhavya@abes.com"
Object.freeze(user) //it  will prevent further changes in user details
user.email="bhavya@chtgpt.com"  //it will not overwrite and also did'nt throw any error as it is freezed
console.log(user)
*/

user.greeting=function(){
    console.log("Hello user");
}
console.log(user.greeting());

user.greeting2=function(){
    console.log(`Hello user ${this.name}`);
}
console.log(user.greeting2());