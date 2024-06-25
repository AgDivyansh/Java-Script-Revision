let score = "90" ;
let cal = Number(score)
console.log(`${typeof(score)}`);

console.log(`${typeof cal}`);

let a = "100bc" ;
let c = Number(a) ;
console.log(`${typeof a}`);
console.log(`${typeof c}`);
console.log(`because it can not be converted into number ${c}`);


// "33" => 33
// "33abc" => Nan
// true => 1
// false => 0
console.log(1+"2");
console.log("1" +2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");



// types of data types
// primitive and non-primitive 
// changes takes place in copy of the varible
// primitive - 7 
// 1- string 
// 2 - number 
// 3 - boolean 
// 4 - null
// 5 - undefined 
// 6 - Symbol 
// 7 - bigint 

// refrence (non-primitive)
// arrays
// objects 
// functions

let id1 = Symbol("123") ;
let id2 = Symbol("123") ;    // symbol always return a unique symbol or value    

console.log(id1 == id2);
