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
// FUNCTION: getCocktail = submit event listener when input form type=submit (GENERATE) is submitted
function getCocktail(liquorType, flavorProfile) {
  fetch("http://localhost:3000/cocktails")
  .then((response) => response.json())
  .then(cocktails => { // this is where we iterate the information from JSON to JS/HTML
    const filteredCocktail = cocktails.filter(cocktail => 
      cocktail['liquor-type'].includes(liquorType) &&
      cocktail['flavor-profile'] === flavorProfile
    );
    if (filteredCocktail.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredCocktail.length);
      const randomCocktail = filteredCocktail[randomIndex];
      displayCocktail(randomCocktail);
    } else {
      document.getElementById('cocktail-container').innerHTML = "No Cocktail found with your criteria.";
    }
    });
  }

document.getElementById('cocktail-finder').addEventListener('submit', function(event) {
    event.preventDefault();
    const liquorType = document.getElementById('liquor-type').value;
    const flavorProfile = document.getElementById('flavor-profile').value;
  
    // Check if both liquor type and flavor profile are selected
    if (liquorType.trim() !== '' && flavorProfile.trim() !== '') {
        getCocktail(liquorType, flavorProfile);
    } else {
        // If either liquor type or flavor profile is not selected, display an error message
        document.getElementById('cocktail-container').innerHTML = "Please select both liquor type and flavor profile.";
    }
  });

function displayCocktail(cocktail) {
    const cocktailList = document.getElementById('cocktail-container');
    const liquorType = Array.isArray(cocktail['liquor-type']) ? cocktail['liquor-type'].join(', ') : cocktail['liquor-type'];
    // Below Code is building HTML within JavaScript - hence the back tick usage and no color differentiation. String interpolation is being used for pulling info from db.json
    const cocktailHTML = `
        <h2>${cocktail.name}</h2>
        <label for="serving-size">Serving Size:</label>
        <input type="number" id="serving-size" value="1" style="width: 30px; text-align: center">
        <button id="update-serving-size">Update</button>
        <p><strong>Ingredients:</strong></p>
        <ul>
            ${cocktail.ingredients.map(ingredient => `<li>${ingredient.amount.value} ${ingredient.amount.unit} ${ingredient.name}</li>`).join('')} 
        </ul>
        <p><strong>Instructions:</strong> <br /> ${cocktail.instructions}</p>
        <div class="cocktail-container">
        <div class="left-column"> <p><strong>Liquor Type:</strong> <br /> ${cocktail['liquor-type'].join(', ')}</p> </div>
        <div class="mid-column"> <p><strong>Flavor Profile:</strong> <br /> ${cocktail['flavor-profile']}</p> </div>
        <div class="right-column"> <p><strong>Glass:</strong> <br>${cocktail.glass}</p> </div>
        </div>
    `;
    cocktailList.innerHTML = cocktailHTML;
    cocktailList.style.display = 'block';
}

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

})

});

// FUNCTION: nonAlcCocktail = figure out how to generate a pop up within the page to show offering of organic sodas (with X to exit in-window pop up)
// research on possibility of this function
