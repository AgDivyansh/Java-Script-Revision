
// simple loop 

// for (let i = 0; i < 10; i++) {
//     // const element = array[i];
//     console.log(`${i}`);
    
    
// }

 
const arr = [1,2,3,4,5] ;

// arr.forEach((item) => {
//   console.log(`${item}`); 
// })

// console.log(arr.filter((item) => item >= 3));


const up = arr.map((item) => {return item+10});
console.log(up);


// accumulator 
let initial = 100 ;
const sum = arr.reduce (
    (accumulator, currentValue) => accumulator + currentValue, initial
)
// cout << sum clog
console.log(sum);

