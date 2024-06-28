const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d",
}
const obj3 = {
    5: "e",
    6: "f"
}

const ans = Object.assign({}, obj1,obj2,obj3) ;
console.log(ans);
console.log(" first object ");
console.log(obj1);


console.log(`list of keys ${Object.keys(ans)}`);
console.log(Object.entries(ans));


const course = {
    price : "1000" ,
    coursename : "Java-Script-Revision",
    instucotr : "Hitesh sir"
}

const {instucotr : sir} = course
console.log(sir);
