//normal types comparision
console.log(2>1);    //output: true
console.log(2<1);   //output: false
console.log(2==1);   //output: false
console.log(1!=2);   //output: true



// comparison between string and number .
// In comparison (>, <, ==) JavaScript converts string to number automatically
console.log("2" > 1);   // output: true  → "2" becomes 2, so 2 > 1 is true
console.log("2" < 1);   // output: false → "2" becomes 2, so 2 < 1 is false
console.log("2" == 2);  // output: true  → loose equality (==) converts string "2" to number 2
console.log("2" === 2); // output: false → strict equality (===) checks type also, string !== number



// comparison between boolean and number in JavaScript
// In comparison, boolean values are converted to numbers:
// true → 1
// false → 0
console.log(true > 1);     // false → true becomes 1, so 1 > 1 is false
console.log(false == 0);   // true  → false becomes 0, so 0 == 0 is true



//comparion of NULL and Undified is very confusing, not prefer to use
