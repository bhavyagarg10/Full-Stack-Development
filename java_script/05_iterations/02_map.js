const map=new Map()
map.set("In","India")
map.set("USA","United states of america")
map.set("Fr","France")
map.set("Rus","Russia")
// console.log(map);

for(const it of map){
    // console.log(it);    //it will contain a array including key and value
}

for(const [k,val] of map){  //by this we have key in k and value in val variable
    console.log(k," :- ",val);
}