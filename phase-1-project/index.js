/*

PROJECT OUTLINE (derived from FRIDGE RECIPE)

Title: Bartender Helper
Objective: Generate cocktail recipes based on various prompts

USER STORIES: 
> Bartender can choose Liquor Type (or Non-Alcoholic) and generate a Random Cocktail
> Bartender can choose Liquor Type and Category (Sweet, Dry) and generate a random cocktail
> Bartender can choose various cocktails via a drop down (alphabetical order)
> Bartender can generate up to three cocktails based on their prompts (Random 1, Random 2, Random 3)

JAVASCRIPT GENERATORS: 
> Bartender Helper will show ingredients (with images) = SUBMIT
> Bartender Helper will show type of glass to use (with image) = MOUSEOVER 
> Bartender Helper will allow to generate another cocktail if the random cocktail does not suffice = KEYDOWN 
> Bartender Helper can increase serving size = MULTIPLY FORMULA (extra)

ITERATE = FILTER or FOR EACH 

EXTRA: 
> Cocktail Fun Facts? 
> Cocktail, Alcohol, Brand History? 

CSS DESIGN: 
> Black Background, simple design, mobile friendly

what else?

Start with index.html and styles.css
Do 

*/

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';
});