/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import { useState } from "react";
import Card from "./Card";

export default function App() {
  // 1. Make a state that manages the current card. 
  // 2. Make arrays of suits and ranks 
  // 3. Make a function that randomly chooses from the arrays to change the card state. 
  // 4. [Inside Card.js] Add a 'click' event listener to the button that triggers the function. 
  // 5. [Inside Card.js] Replace the static card text with the state value. 

  const [ currentCard, setCurrentCard ] = useState(""); // destructure 

  const randomize = () => {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    
    // const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    // const randomValue = value[Math.floor(Math.random() * value.length)];

    const randomCard = `${value[Math.floor(Math.random() * value.length)]} of ${suits[Math.floor(Math.random() * suits.length)]}`;

    setCurrentCard(randomCard);
  };
  
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card currentCard={currentCard} randomize={randomize}/>
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}