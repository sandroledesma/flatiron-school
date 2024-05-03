/*

PROJECT OUTLINE (derived from FRIDGE RECIPE)

Title: Bartender Helper
Objective: Generate cocktail recipes based on various prompts

INITIAL PROMPTS: 
> Bartender can choose Liquor Type (or Non-Alcoholic) and generate a Random Cocktail
> Bartender can choose Liquor Type and Flavor Profile (Sweet, Dry) and generate a random cocktail

JAVASCRIPT GENERATORS: 
> Bartender Helper will show ingredients (with images) = SUBMIT
  > FUNCTION: randomCocktail = submit event listener when input form type=submit (GENERATE) is submitted
> Bartender Helper will allow to generate another cocktail if the random cocktail does not suffice = KEYDOWN 
  > FUNCTION: nextCocktail = keyDown event listener to next cocktail with the same liquor type/flavor profile
> Bartender Helper can increase serving size = MULTIPLY FORMULA
  > FUNCTION: cocktailServingSize = cocktails.ingredients.amount.value * servingSize
> Bartender Helper will show type of glass to use (with image) = MOUSEOVER (EXTRA)
  > FUNCTION: glassCocktail = mouseover event listener to show image of glass when mouse is over the cocktails.glass 
> if Bartender chooses Non-Alcoholic, Bartender Helper will return a list of soft-drinks and a note to take care of their intoxicated friends = WINDOW.LOAD (EXTRA)
  > FUNCTION: nonAlcCocktail = figure out how to generate a pop up within the page to show offering of organic sodas (with X to exit in-window pop up)

ITERATE = FILTER or FOR EACH 

CSS DESIGN: 
> Black Background, simple design, mobile friendly, dark mode/light mode

*/

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';

document.addEventListener('submit', function() {
    // FUNCTION: randomCocktail = submit event listener when input form type=submit (GENERATE) is submitted
    const randomCocktail = "";

}),

document.addEventListener('keyDown', function() {
    // FUNCTION: nextCocktail = keyDown event listener to next cocktail with the same liquor type/flavor profile
    // image src = ./images/keydown-image.png
    const nextCocktail =  "";

}),

function cocktailServingSize() {
    // FUNCTION: cocktailServingSize = cocktails.ingredients.amount.value * servingSize
},

document.addEventListener('mouseover', function() {
    // FUNCTION: glassCocktail = mouseover event listener to show image of glass when mouse is over the cocktails.glass 
    // images are contained in img src = ./images/glass/...
    const glassCocktail = "";

}),

// FUNCTION: nonAlcCocktail = figure out how to generate a pop up within the page to show offering of organic sodas (with X to exit in-window pop up)
// research on possibility of this function

});