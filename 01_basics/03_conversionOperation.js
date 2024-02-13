/*let score = "abc" // o- string string number nan
let score = 123  // 
let score = "abc123"
let score = null // object object number o 
let score = undefined // undefined undefined number NaN 
let score = true // boolean boolean number 1*/

let score = "twinkle" // string string number NaN 

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //NaN full form not a number


//"33" => 33
//"33abc" => nan
// true => 1; false=>0;

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1=> true; 0=>false;
//"" => false
//"twinkle"=> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // output - 33 , string 