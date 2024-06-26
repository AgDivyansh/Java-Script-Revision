// const arr = [1,2,10] ;
const arr = new Array (1,2,10)
arr.push(0) ;
arr.push(8) ;
// console.log(arr);
const marvel = ["thor" , "ironman" , "spiderman"] ;
const dc = ["superman" , "flash" , "batman"] ;

// now it is ind 2d array form 
// marvel.push(dc) ;


// marvel.concat(dc)

// const hero = marvel.concat(dc) ;

const hero = [...marvel , ...dc]  // speread operator

console.log(hero);

console.log(Array.from("Divyansh"));

console.log(Array.from({name: "Divyansh"})); // returns a enpty array we have to specify weather we want to create the array of keys or values
