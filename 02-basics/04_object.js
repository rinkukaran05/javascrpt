// ===================== OBJECT CREATION =====================

// const tinderUser = new Object() → singleton object
const tinderUser = {}; // non-singleton object (most common)

// Adding properties dynamically
tinderUser.id = "123abc";
tinderUser.name = "rinku";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// ===================== NESTED OBJECT =====================

const regularUser = {
    email: "rinku2025@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rinku",
            lastname: "karan"
        }
    }
};

// Access nested object values
console.log(regularUser.fullname.userfullname);


// ===================== MERGING OBJECTS =====================

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// Merge into obj1 (modifies original object)
Object.assign(obj1, obj2, obj3);
console.log(obj1);

// Merge into a new object (safe way)
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// Check reference equality
console.log(obj1 === obj4); // false (different objects)


// ===================== SPREAD OPERATOR =====================

// Modern & best way to merge objects
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);


// ===================== ARRAY OF OBJECTS =====================

const users = [
    { id: 1, email: "totai@gmail.com" },
    { id: 2, email: "test@gmail.com" },
    { id: 3, email: "demo@gmail.com" },
    { id: 4, email: "sample@gmail.com" }
];

// Access object inside array
console.log(users[1].email);


// ===================== OBJECT METHODS =====================

console.log(tinderUser);

// Get all keys → returns array
console.log(Object.keys(tinderUser));

// Get all values → returns array
console.log(Object.values(tinderUser));

// Get key-value pairs → array of arrays
console.log(Object.entries(tinderUser));

// Check if property exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ===================== EXTRA =====================

console.log(Object.values(regularUser));


// ===================== OBJECT DESTRUCTURING =====================

const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "rinku karan"
};

// Normal access
console.log(course.courseInstructor);

// Destructuring (rename variable)
const { courseInstructor: instructor } = course;

console.log(instructor);
