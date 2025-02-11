for (let i = 1; i<11; i++) {
    // console.log(i);
}
for (let i = 1; i<11; i++) {
    if(i===5){
        break
    }
    // console.log(i);

}
for (let i = 1; i<11; i++) {
    if(i===5){
        continue
    }
    // console.log(i);
}

// "for of" loop 
const arr=[5,1,4,2,34,6]
for (const val of arr) {
    // console.log(val);
}
const greeting="Hello World"
for(const char of greeting){
    console.log(char);
}