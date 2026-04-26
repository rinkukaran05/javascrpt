let score = "rinku"
let valueInNumber = Number(score)           //string convert to number.//
console.log(typeof score);//output: string
console.log(typeof(score));//output: string
console.log(typeof valueInNumber);//output: number
console.log(valueInNumber);//output: Nan


let number = 20                         //number convert to string//
let stringNumber = String(number)
console.log(typeof stringNumber);//output: string
console.log(stringNumber);//output: 20


let isLoggedIn = 1            //number to boolean

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);//output: boolean
console.log(booleanIsLoggedIn);//output: true


let logged = "Rinku"                  //string convert to boolean//

let booleanLogged = Boolean(logged)
console.log(typeof booleanLogged);//output: boolean
console.log(booleanLogged);//output: true


let loggedIn = ""                      //empty string to boolean//

let booleanLoggedIn = Boolean(loggedIn)
console.log(typeof booleanLoggedIn);//output: boolean
console.log(booleanLoggedIn);//output: false


/*
number to string:
33 => "33"

string to number:
"33abc" =>NaN

boolean to number:
true => 1; false => 0

number to boolean:
1 => true; 0 => false

string to boolean:
"" => false   (Empty string)
"Rinku" => true (Normal string)
*/



// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);//ouput: -3

console.log(2+2);//output: 4
console.log(2-2);//output: 0
console.log(2*2);//output: 4
console.log(2**3);//output: 8(** means to the power)
console.log(2/3);//output: 0.6666666666666
console.log(2%3);//output: 101

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2           //addition of two string//
console.log(str3);//output: hello hittesh    


//IMPORTANT OPARATION//
console.log("1" + 2);//output: 12
console.log(1 + "2");//output:12
console.log("1" + 2 + 2);//output:122
console.log(1 + 2 + "2");//output: 32
console.log( (3 + 4) * 5 % 3);//output: 2
console.log(+true);//output: 1
console.log(+"");//ouput: 0


//increament operator//
let gameCounter = 100
console.log(++gameCounter);//preincrement=>first increament then use .[output: 101]
console.log(gameCounter++);//postincreament=>firs use then increament.[output: 101] 

//decreament operator//
let num = 10
console.log(--num);//predecreament=>first decreament then use.[output: 9 ]
console.log(num--);//postdecreament=>first use then decreament.[output: 9]


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
