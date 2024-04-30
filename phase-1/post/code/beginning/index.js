/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

POST basically means we are creating our own DATA SET. 

*/

function createAndAppendListItem(parentElement, text) { 
    // this function creates and appends a new list item (li) via a parent element (ul) and the corresponding text output (li.textContent = "")
    // const ul = document.querySelector("dogs"); is not in this consolidated function because it needs to select the right query (dogs or cats)
    const li = document.createElement("li"); // originally in forEach statement
    li.textContent = text; // originally in forEach statement as li.textContent = (dog["name"] + " (" + dog["age"] + ")");
    parentElement.append(li); // originally in forEach statement as ul.append(li) -> which is why the function includes parentElement
}

// Let's try making a GET request to display existing data on the page.

fetch("http://localhost:3000/dogs")
.then((response) => response.json()) // if using curly braces, return must be added {return response.json()}
.then((dogs) => { 
    console.log("Dogs:", dogs);
    const ul = document.querySelector("#dogs");
    dogs.forEach(dog => { 
        createAndAppendListItem(ul, `${dog.name} (${dog.age})`);
    }); 
});

fetch("http://localhost:3000/cats") // repeated fetch code for the cats db
.then((response) => response.json()) 
.then((cats) => {    
    const ul = document.querySelector("#cats");
    cats.forEach(cat => { 
        createAndAppendListItem(ul, `${cat.name} (${cat.age})`);
    }); 
});

// Now, let's trigger a POST request when the user submits the form, so that they can add data to the database! 
// Remember to think about the event, the target, and the handler when planning a listener.

/* CODE FOR DROP DOWN "ADD A PET" feature (getting .value issues)

document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector("form"); // create a const for the typical 'document.QuerySelector("form") part of the event listener

    form.addEventListener("submit", event => {
    event.preventDefault();
    
    const petName = event.target["petName"].value;
    const petAge = event.target["petAge"].value;
    const petType = event.target.priority.value; 

    // create if...else statement for the hosts 
    let endpoint;
    if (petType === "newDog") {
        endpoint = "http://localhost:3000/dogs/";
    } else if (petType === "newCat") {
        endpoint = "http://localhost:3000/cats/";
    }

    fetch(endpoint, { // instead of fetch("http://localhost:3000/dogs/", since we have created an endpoint if...else statement
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: petName,
            age: petAge 
            // isGoodDog: true // is it possible to add other parameters that are not shared between dogs and cats db? 
        })
    })
    .then(response => response.json())
    .then(newPet => {
        const ul = document.querySelector(petType === "newDog" ? "#dogs" : "#cats") //instead of ("#dogs"), enter a ternary statement 
                                       // if petType is equal to newDog, return #dogs. else, return #cats 
        createAndAppendListItem(ul, `${newPet.name} (${newPet.age})`);                    
    })
});
}); */

document.addEventListener("DOMContentLoaded", (event) => {

document.querySelector("form[name='dogForm']").addEventListener("submit", event => {
    event.preventDefault();
    const dogName = event.target["dogName"].value;
    const dogAge = event.target["dogAge"].value;
    
    fetch("http://localhost:3000/dogs/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: dogName,
            age: dogAge, 
            isAGoodDog: true
        })
    })
    .then(response => response.json())
    .then(newDog => { 
        const ul = document.querySelector("#dogs");
        createAndAppendListItem(ul, `${newDog.name} (${newDog.age})`);
        console.log(newDog);})
});

document.querySelector("form[name='catForm']").addEventListener("submit", event => {
    event.preventDefault();
    const catName = event.target["catName"].value;
    const catAge = event.target["catAge"].value;
    
    fetch("http://localhost:3000/cats/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: catName,
            age: catAge, 
            isACat: true
        })
    })
    .then(response => response.json())
    .then(newCat => { 
        const ul = document.querySelector("#cats");
        createAndAppendListItem(ul, `${newCat.name} (${newCat.age})`);
        console.log(newCat);})
});

});

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function! DONE
// 2. Try writing your own POST request (for Cats). DONE
// 2.5. Replace the forms with an Add a Pet form where you can add a dog or a cat
//  3. Try writing PATCH and DELETE requests