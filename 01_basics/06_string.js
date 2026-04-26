// String handling in JavaScript

const name = "Rinku ";
let repocount = 50;

// old way of string concatenation (not recommended)
console.log(name + repocount + " Value");  // Rinku 50 Value


// modern way → template literals (best practice)
console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // Hello my name is Rinku  and my repo count is 50



// String as object (NOT recommended in most cases)
const gameName = new String('rinku');

console.log(gameName[0]); // r

let value = gameName.length;
console.log(value); // 5

console.log(gameName.toUpperCase()); // output: RINKU(convert string to uppercase)
console.log(gameName.toLowerCase()); // output: rinku(convert string to lowercase)

console.log(gameName.charAt(3));   // output: k →print the character at index 3
console.log(gameName.indexOf('u')); // output: 4 → print the index of given character


// substring vs slice
const newString = gameName.substring(0, 3);//substring(starting, up to limit)
console.log(newString); // rin → (0 to 2, 3 excluded)

const anotherString = gameName.slice(-4, 3);//same like substring just can give here negative numnber means strat from backward
console.log(anotherString); // in → (-4 means 'i' position to end range)


// trim removes extra spaces
const newStringOne = "    rinku   ";
console.log(newStringOne);        // with spaces
console.log(newStringOne.trim()); // rinku


// URL replace and check
const url = "https://rinku.com/rinku%20karan";// replace(oldValue, newValue)// %20 → space encoding, it is replaced with "-"
console.log(url.replace('%20', '-')); 
//output:  https://rinku.com/rinku-karan

console.log(url.includes('karan'));  // includes() → checks whether the given value exists in the string or not 
//output: true → "karan" is present in the URL


// split converts string into array
const newWord = "I am rinku karan";
console.log(newWord.split(' '));//this makes a array, split it basis of space,
// ouput:["I", "am", "rinku", "karan"] 
