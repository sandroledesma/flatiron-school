import React from "react";

export default function Card({currentCard, randomize}) {
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            <p>{currentCard || "Ace of Spades"}</p>
            {/* was {currentCard} */}
            <button onClick={randomize}>Nah.</button>
        </h2>
    )
  }