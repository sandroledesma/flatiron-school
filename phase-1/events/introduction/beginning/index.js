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

// ~ the "submit" event

// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.
// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.
<<<<<<< Updated upstream
=======

document.querySelector("#forms").addEventListener("submit", (event) => {
    event.preventDefault(); 

const imageUrl = document.querySelector("#image-url").value;
const currentImg = document.querySelector("#my-image");

if(currentImg) {
    currentImg.src = imageUrl;
} else {
    const anotherImage = document.createElement('img');
    anotherImage.src = "https://t3.ftcdn.net/jpg/03/14/10/26/360_F_314102633_ZDcyjOOkPwqPuucgbxF5h1e7GonSLR1k.jpg";
    anotherImage.id = "my-new-image";
    anotherImage.style.height = '200px';
    document.body.append(anotherImage);
})};

>>>>>>> Stashed changes
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.