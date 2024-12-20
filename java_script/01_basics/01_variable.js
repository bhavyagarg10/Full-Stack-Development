const account=121654651 //value never change
let name="Bhavya"
var pass="23135"
state="Uttar Pradesh"
let city;

/*pref to use let insted of var due to issue of block scope and functional scope*/

//now change the values
name="Hitesh"
pass="564521"
state="Bihar"

console.log(account);
console.table([name,pass,state,city])// print all the given variable in a table

