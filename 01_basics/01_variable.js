const accountId = 144553
let accountEmail = "twinkle@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 //not allowed
/* prefer not to use var because of isssue in block scope and funcitional scope*/


accountEmail = "twink@gmail.com"
accountPassword = "1234"
accountCity = "patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

