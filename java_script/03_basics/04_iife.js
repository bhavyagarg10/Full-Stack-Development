// iife : immediately invoked function expression
//iife is also used so that function doesn't get polluted(distrubed) by global scope
// and we use parenthesis to enclose function 

(function chai(){
    //named iife
    console.log("db connected");
}) ();  //we use semicolon here so that we end it here and also can write anothe iife after this

(()=>{
    console.log("db connected two");
}) ();

// parameter
((name)=>{
    console.log(`db connected two ${name}`);
}) ('Bhavya');
