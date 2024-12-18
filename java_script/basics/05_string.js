const name="Bhavya"
const age=20
// console.log(name+age+" value");
console.log(`My name is ${name} and my age is ${age}`);

const gname=new String('Hello-World')
console.log(gname[0]);
console.log(gname.__proto__)
console.log(gname.length)
console.log(gname.toLowerCase())
console.log(gname.toUpperCase())
console.log(gname.charAt(7));
console.log(gname.indexOf('o'));
console.log(gname.substring(0,4));
console.log(gname.slice(-11,4));        //it can also take -ve values


const s="   Bhavya"
console.log(s);
console.log(s.trim());


const s1="bhavyagarg310@gmail.com"
console.log(s1.replace('31','41'));
console.log(s1.includes('havya'));

// split in js
const s2="bhavya-garg-20"
console.log(s2.split('-'))

