// ======================= MAP =======================

// map() -> creates a new array by transforming each element

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// Add 10 to each element
let newNums = myNumbers.map((num) => num + 10)

console.log(newNums)



// ======================= CHAINING =======================

// Chaining -> applying multiple methods in sequence

newNums = myNumbers
    .map((num) => num * 10)   // [10,20,...,100]
    .map((num) => num + 1)    // [11,21,...,101]
    .filter((num) => num >= 40) // keep values >= 40

console.log(newNums)


//  Important:
// map() transforms values
// filter() returns only matching values (true/false condition)



// ======================= REDUCE =======================

// reduce() -> reduces array to a single value

// Syntax:
// array.reduce((accumulator, currentValue) => {}, initialValue)


// Using normal function
const myTotal = myNumbers.reduce(function(acc, current) {

    console.log(`acc: ${acc} and current: ${current}`);

    return acc + current

}, 0) // initial value = 0

console.log(myTotal)


// Using arrow function (cleaner)
const myTotal1 = myNumbers.reduce((acc, current) => acc + current, 0)

console.log(myTotal1)



// ======================= USING FOR...OF =======================

// Manual way to sum values

let sum = 0

for (const num of myNumbers) {
    sum += num
}

console.log(sum)



// ======================= REAL-WORLD EXAMPLE =======================

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
]

// Calculate total price using reduce
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay)



// ======================= IMPORTANT NOTES =======================

// 1. map() -> transforms each element → returns new array
// 2. filter() -> filters elements based on condition → returns new array
// 3. reduce() -> reduces array to single value (sum, total, etc.)
// 4. Chaining makes code cleaner and more readable
// 5. reduce() is widely used in real projects (cart, totals, analytics)
