/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event

const today = document.querySelector("#today");
today.addEventListener("click", (event) => { // event ("click") and callback function ( (argument) => {body/output} ) to trigger the action
    console.log("Today was clicked!");
    console.log(event.target);
});  

// ~ the "submit" event

document.querySelector("form").addEventListener("submit", (event) => {
    // Since the default behavior of "submit" is to redirect the page to a backend app, lets prevent that!
    event.preventDefault(); 
    // Take the date that was inputted by the user
    //      and set it as the text of #sometime
    const date = event.target["date"].value;
    const sometime = document.querySelector("#sometime");
    // console.log(event.target["date"].value); // you can also do event.target.date.value versus ["date"]
    sometime.textContent = date;
});

// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.

// create a keydown event wherein the F1 key is pressed that returns the phrase 'you pressed F1'

const keyDown = document.querySelector("#sometime");
keyDown.textContent = "Press P for a Surprise!";

document.addEventListener("keydown", (event) => {
    if (event.key === "p") {
        const anImage = document.createElement("img");
        anImage.src = "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/letter_p.svg";
        anImage.style.height = '200px';
        document.body.append(anImage);
    }
    });

// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.

document.querySelector("#dates").addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    const anotherImage = document.createElement('img');
    anotherImage.src = "https://t3.ftcdn.net/jpg/03/14/10/26/360_F_314102633_ZDcyjOOkPwqPuucgbxF5h1e7GonSLR1k.jpg";
    anotherImage.style.height = '200px';
    
    document.body.append(anotherImage);
});

// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.