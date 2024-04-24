/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables - "places where you can store values"
// -> constants, variables, logging, annotations
// var has issues with modern javascripts - do not use this. 
// cons and let should be used as a declaration (declaration has to be paired with an assignment for const)

/**
 * I'm writing something!
 */

//const is short for constant, and does not change
const apples = 65;
// const apples = 5; // Not allowed because applies is a constant

console.log(apples) 

//let can change
let books = 5;
books = 25; // Allowed because books is not a constant

console.log(books);

// ~ Types
// -> undefined, null*, boolean (true or false), number, string (inside quotations)

// undefined means the variable is not defined
// null means there is no value attached to a variable 


// ~ Objects - collection of values that represents something (const and let is assigned to A value)
// -> definition, bracket/dot notation, stringify
const animal = { //create values below that becomes the 'dictionary' for the object
    species: "dog", //in this case, 'species' (like name, age and isWellBehaved) is a key
    name: "Spot", //this is a string
    age: 4, //this is a number
    isWellBehaved: true //this is a boolean, isWellBehaved is a CamelCase
};
console.log(animal); // if you want all of the info/key names of the object // Output: {species: 'dog', name: 'spot', age: 4, isWellBehaved: true}
console.log(animal.age); // if you want a specific key // Output: 4
console.log(animal["age"]); // can be written this way as well // Output: 4

//to modify a key within an object
animal.isWellBehaved = false; // or animal["isWellBehaved"]
console.log(animal.isWellBehaved);

animal.weight = 150 //a new key was added within the object
console.log(animal);

//Spot is 4 years old!
console.log(`${animal.name} is ${animal.age} years old!`); //interpolation // Output: Spot is 4 years old!
console.log(animal.name + " is " + animal.age + " years old!");//concatenation // Output: Spot is 4 years old!
console.log(JSON.stringify(animal)) // Output: {"species":"dog","name":"spot","age":4,"isWellBehaved":true}
const animalStr = JSON.stringify(animal); // Output: {"species":"dog","name":"Spot","age":4,"isWellBehaved":true}
console.log(animalStr);

// ~ Arrays - list of ordered values without names (i.e. keys)
// -> definition, access, modification
 const prices = [ 43, 56, 32, 28, 15, 25 ] // can be done without spaces
console.log(prices); // Output: (6) [43, 56, 32, 28, 15, 25]
console.log(JSON.stringify(prices)) // Output: [43,56,32,28,15,25]
console.log(prices[2]); // Output: 32 // hard brackets signify location

prices[0] = 5; //replaces 43 with 5 in the array (0 is the first digit)
console.log(prices);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
// if (boolean) {someCodeThatShouldRun}
// const isItSunny = true;
// if (isItSunny) {wearSunglasses} // creates the code in a sentence, if it is sunny, then wear sunglasses
// if (isItSunny) {console.log("Wear Sunglasses!")}
// if (3 === 4) {wearSunglasses} // 

// alternatively....

const isItSunny = false;
if (isItSunny) {
    console.log("Wear Sunglasses!");
} else {
    console.log("Stay Inside!");
} // Output: Stay Inside!

const action = isItSunny ? "Wear Sunglasses!" : "Stay Inside!" ; // ternary syntax
console.log(action); // Output: Stay Inside!

// ~ Functions - a set of statements that performs a task or calculates a value
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 * 
 * @param {string} name The person to greet. 
 * @param {number} age  The person's age.
 * @returns The number 5.
 */

function sayHello(name, age) { // creating an argument, inputs or parameters | sayHello is the body of the function
    console.log("Hi, " + name + "! You're " + age + " y.o.")
    return 5; //you only return at the end of the function. it will not execute anything after return
    // return "Hi, " + name + "! You're " + age + "y.o." // you can do this instead of console.log
}; //adding a return executes the code, without a return, youre just building code

console.log(sayHello("Sandro", 5) + 6) // since the first argument is name and the second argument is age

function square(number) { //example of a function that has one argument 
    console.log(number * number);
} //redundant with integers.forEach((number) => {console.log(number * number)}); (line 127)

const integers = [1,2,3,4];

// integers.forEach(square); //dot notation to access a function that is applied to the array before the dot
// Output: 1, 4, 9, 16 (which is the number * number function applied to the array)

integers.forEach((number) => {console.log(number * number)}); // same as integers.forEach(square); but how??
// code above is basically taking each number to be multiplied by itself (square)

const sq = (number) => { console.log(number * number)};

// ~ Scope - what you can access at what time at what line/position in your code
// -> global, local, closures, function hoisting
// --> everything in a regular javascript file is 'in the global scope'
// --> curly braces means you are building in local scope
// --> functions are also local scope

const x = 5;
function func() {
    console.log(x); // value of x is possibe as the x is above (global scope)
    const a = 2;
}

// console.log(a); // this is not possible because a is within the local scope {}

function otherFunc() {
    const b = 2;
    // console.log(a); // this is not possible as a is within a different local scope
    function otherOtherFunc() {
        console.log(b);
        const c = 3;
        return c;
    }
    // console.log(c); // this is not possible as this code is outside the local scope for c
    console.log(otherOtherFunc() + 3);
} // closure is a function and all that it has access to

console.log(x);

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)

// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

function sumArray(nums) { // sumArray takes an array and sums all values 
    let sum = 0; // initial value of the sum is 0
    for (let i = 0; i < nums.length; i++) // for loop that initializes a loop of all values in an array
    {
        sum += nums[i]; // add values in array to sum of "0" - this is inside of a local scope
    }
    return sum; // executes the loop 
}

const nums = [1, 2, 3, 4]; // array of numbers for challenge 1 and 2 
console.log(sumArray(nums)); // Output: 10
console.log(sumArray(nums) + 1); // Output: 11

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// recreate this with a forEach function

function double(nums) { // utilizing the same const nums array as challenge 1 
    let doubledArray = []; // create a new variable called doubled array 
    for (let i = 0; i < nums.length; i++) // for loop that initializes a loop for all values in an array
    {
        doubledArray.push(nums[i] * 2); // creates the formula to double each value of the array
    }
    return doubledArray;
}

//const doubled = double(nums); // why do i need to create this if I can just put double(nums) in the console.log?
// let double = nums.map(nums => nums * 2); // creating a map and arrow function using array from challenge 1
console.log(double(nums)); // Output: (4) [2, 4, 6, 8]
// console.log(doubled); // if line 193 is created
console.log(nums);
//console.log(doubled);


double(nums);
console.log(nums);


// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

// let words = ["Carbonara", "Bolognese", "Alfredo"];
// let lowerCaseStr = words.map(word => word.toLowerCase()); // building another map and arrow collab (which does not modify the array, but creates a new array)

// console.log(lowerCaseStr); // Output: (3) ['carbonara', 'bolognese', 'alfredo']
// console.log(words); // Output: (3) ['Carbonara', 'Bolognese', 'Alfredo']

function lowercase(pasta) {
    let words = [];
    for (let i = 0; i < pasta.length; i++)
    {
        words.push(pasta[i].toLowerCase());
    }
    return words;
}

const pasta = ["Carbonara", "Bolognese", "Alfredo"];
const lowercasedPasta = lowercase(pasta); 
console.log(lowercasedPasta);