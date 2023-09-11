import React from "react";
import { useState, useEffect } from "react";
import CardsGrid from "./components/CardsGrid";

export default function MemoCa() {
  const [currentScore, setCurrentScore] = useState(0); //update krna pending
  const [bestScore, setBestScore] = useState(0); //update krna pending

  return (
    <>
      <div id="background-img">
        <header>
          <div id="logo">memoca</div>
          <div id="scores">
            <div id="current-score">Current score: {currentScore}</div>
            <div id="best-score">Your best: {bestScore}</div>
          </div>
        </header>
        <main>
          <CardsGrid />
        </main>
      </div>
    </>
  );
}
