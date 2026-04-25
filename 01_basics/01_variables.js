const accountId = 144553//never changes after the one time assigning
let accountEmail = "rinku@gmail.com"//can change after assigning in code
var accountPassword = "12345"
/*Prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Jaipur"
let accountState;

// accountId = 2 //it is  not allowed because acoount id already declare in a const variables.
console.log(accountId)


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])//print value in order in a table.
