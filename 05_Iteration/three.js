// ======================= FOR...IN LOOP =======================

// Used for iterating over OBJECTS (keys)

const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "Swift by apple"
};


// for...in -> gives keys of the object
for (const key in myobj) {

    console.log(key);  // prints keys

    // Access value using obj[key]
    console.log(`${key} is shortcut for ${myobj[key]}`);
}



// ======================= FOR...IN WITH ARRAY =======================

const programming = ["js", "cpp", "java", "python"]

for (const key in programming) {

    console.log(key);              // prints index (0,1,2,...)
    console.log(programming[key]); // prints values
}



// ======================= forEach LOOP =======================

// forEach is used only with arrays
// It executes a function for each element

const coding = ["js", "python", "cpp"]


// Basic function inside forEach
coding.forEach(function (item) {
    console.log(item);
})


// Passing function reference
function printme(item) {
    console.log(item);
}

//  Don't use printme(), just pass reference
coding.forEach(printme)


// Access item, index, and full array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})



// ======================= ARRAY OF OBJECTS =======================

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "python" }
]

// Common real-world usage
myCoding.forEach((item) => {
    console.log(item.languageName);
})



// ======================= forEach vs filter =======================

// forEach does NOT return anything
// So we use filter() when we need a new array


const myNums = [1,2,3,4,5,6,7,8,9,10]


// filter → returns new array (implicit return)
const newNums = myNums.filter((num) => num > 4)
console.log(newNums);


// Explicit return when using {}
const newNums1 = myNums.filter((num) => {
    return num > 4
})
console.log(newNums1);



// Using forEach manually (less preferred)
const numarray = []

myNums.forEach((num) => {
    if (num > 4) {
        numarray.push(num)
    }
})
console.log(numarray);



// ======================= REAL-WORLD EXAMPLE =======================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Filter by genre
const historyBooks = books.filter((bk) => bk.genre === "History")
console.log(historyBooks);


// Multiple conditions
const filteredBooks = books.filter((bk) => {
    return bk.publish > 1989 && bk.genre === "History"
})
console.log(filteredBooks);



// ======================= IMPORTANT NOTES =======================

// 1. for...in -> gives keys (used for objects)
// 2. for...of -> gives values (used for arrays, strings, maps)
// 3. forEach -> runs function for each item (no return)
// 4. filter -> returns new filtered array
// 5. Prefer filter/map over manual forEach for cleaner code
