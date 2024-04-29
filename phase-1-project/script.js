
/*

Fridge Recipe

OBJECTIVE: Create a recipe generator based on *up to* 3 ingredients. 

USER STORIES: 
The user should be able to...
1. Enter up to 3 ingredients (possibly already in their fridge) 
   Once submitted, the API will generate all recipes that have those ingredients
2. Enter dietary restrictions (None, Vegetarian, Gluten-Free)
   Eventually create more fields for no meat, chicken only, fish only, etc 
3. Be able to save 
4. Generate 'shopping list' for all other ingredients needed
   Eventually merging total list if multiple recipes are selected

BRAINSTORMING: 
1. Fridge Recipe will generate all the recipes that have those three ingredients
2. Find an API of recipes that have individual ID's for ingredients, dietary restrictions, etc 

*/

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';
});