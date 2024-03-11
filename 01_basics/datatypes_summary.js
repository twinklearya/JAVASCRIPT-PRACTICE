//primitive(call by value) 
// seven types:- string, boolean, null, undefined, symbol, bigint

//non-primitive(call by reference)
// arrays,functions,objects
//we never defined in javascript
const score = false
const scorevalue = 110.7
 
const isLoggedin = false
const outsidetemp = null
let useremail = undefined
const id = Symbol('123')
const anotherid = symbol('123')

console.log(id===anotherid);

const bigNumber = 122277822222222222n

const heros = ['shaktimnan', 'shivg', 'papa']
let myObj =
{
    name: "twinkle"
    
 
}
const myfunction = function()
{
    console.log("hello")
}

