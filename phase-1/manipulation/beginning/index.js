/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// Document Object Model

// ~ APIs (Application Programming Interface - bridge between us and a data source), 
// CRUD (create, read, update, delete), `document`
// API's allow us to (C)reate (R)ead (U)pdate and (D)elete data in such external sources
document // An API for communication between JS (this file) and HTML (index.html)

/*

<body>
    <p>Some text...</p>
    <div>
        <a href="www.google.com"></a>
    </div>
</body>

DOM sees this:

        <body>      granddad
        /    \
      <p>   <div>   momma
               \
               <a>  bebe

*/      

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("h1")); // this is how you read by tag name
console.log(document.querySelector("p")); // this will generate the first p command (currently the index.html file has 3 p tags)
console.log(document.querySelector("#tomorrow")); // this will generate based on id (unique)
console.log(document.querySelector(".address")); // this will generate based on class (not unique)

// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
console.log(document.querySelectorAll("p")); // this will generate all elements of the tag

// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent); // this will generate the text associated to the tag

const p = document.querySelector("#today"); // making the node into a variable
console.log(p.textContent); // reading the text of a text element 

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

document.querySelector("#forever").textContent = "Infinity"; // this change is better on JS if events area already tied into the original html data

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

document.querySelector("#forever").remove();  //remove function doesnt need any (arguments)

// ~ Create + Append a node
// -> createElement(), append()

const newH2 = document.createElement("h2");
// Element.append(newElement) // appends the element's child (NewElement) as a child of the parent (Element) | Element is the parent, newElement is the child
newH2.textContent = "Sometime in the future...";
document.querySelector("body").append(newH2); // can be written as document.body

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining

// displayList("Books", ["The Shining", "Lord of the Rings", "Slaughterhouse Five"])

displayList = [
    "Books",
    "The Shining",
    "Lord of the Rings",
    "Slaughterhouse Five",
];

function displayList(listHeader, listBooks) {
    const listOfBooks = document.getElementById("div#dates");

    const anotherList = document.createElement("ul");
    anotherList.textcontent = listHeader;
    listOfBooks.append(anotherList);

displayList.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book; 
    listOfBooks.appendChild(li);
});

// 2. Replace the <strong> element with a newly created one.

const newStrong = document.createElement("strong");

newStrong.textContent = "Sandro Ledesma";
document.body.append(newStrong);
document.querySelector("strong").replaceWith(newStrong);