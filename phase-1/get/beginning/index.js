/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a GET request for dog facts
fetch("https://dog-api.kinduff.com/api/facts?number=3")
// Convert the JSON response into JS. 
.then((response) => response.json())
//Use the resulting JS!
.then(data => {
    const span = document.querySelector("#dog");
    span.textContent = data.facts[0];
})
// Log any errors that occer
.catch((error) => { console.log(error); });

// A synchronous request to https://anapioficeandfire.com/api/books.

fetch("https://anapioficeandfire.com/api/books")
.then((response) => response.json())
.then(books => {
    books.forEach((book) => {
        const list = document.createElement("li"); // const list needs to be inside the forEach execution so it takes all parts
        const got = document.querySelector("#got")
        got.append(list);
        list.textContent = book["name"] + "(" + book.numberOfPages + ")"; // concatenation can input multiple info of an API 
    })
})
.catch((error) => { console.log(error); });

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name); // if you have an async function, you need to also have an await function before fetch 
    const pokemon = await response.json();
    console.log(pokemon);
    document.querySelector("#pokemon").textContent = 
        pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + " (" + pokemon.id + ")";
}
getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!

fetch("https://api.oceandrivers.com/static/resources.json")
.then((response) => response.json())
.then((weather) => {
    const weatherTwo = document.querySelector("weather");
    span.textContent = weather;
})
.catch((error) => { console.log(error); });