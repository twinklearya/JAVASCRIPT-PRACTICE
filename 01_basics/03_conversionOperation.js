/*let score = "abc" // o- string string number nan
let score = 123  // 
let score = "abc123"
let score = null // object object number o 
let score = undefined // undefined undefined number NaN 
let score = true // boolean boolean number 1

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
console.log(typeof stringNumber); // output - 33 , string */

// ******************* Operations *************************

let value = 3
let negvalue = -value
// console.log(negvalue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 pe power 2
console.log(2/2);
console.log(2%2);*/

let str1 = "hello"
let str2 = "twink"

let str3 = str1+str2
/*console.log(str3);
console.log("1"+2);
console.log(1+"2"); // output - 12 
console.log("1"+2+3);// output - 123
console.log(3+2+"1"); //output - 51

console.log((3+1)*5%3); // */

//console.log(+true); // 1
//console.log(+""); //0

let num1,num2,num3

num1 = num2 = num3 = 2+2


//presedence operator 
//postfix
/*let gameCounter = 100
gameCounter++;
console.log(gameCounter); // output:- 101*/

//prefix
let gameCounter = 100
++gameCounter;
console.log(gameCounter);