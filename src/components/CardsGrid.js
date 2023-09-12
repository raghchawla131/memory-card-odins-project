import GetPokeData from "./GetPokeData";
import { useState } from "react";

export default function CardsGrid({ currentScore, setCurrentScore, bestScore, setBestScore }) {
  const initialPokeIds = [1, 4, 7, 10, 25, 16];
  const[clickedIds, setClickedIds] = useState([]);
  const[pokeIds, setPokeIds] = useState(initialPokeIds);

  function shuffleArray(pokeArr) {
    for (let i = pokeArr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [pokeArr[i], pokeArr[randomIndex]] = [pokeArr[randomIndex], pokeArr[i]];
    }
    return pokeArr;
  }

  function handleClick(id) {
    if(clickedIds.includes(id)) {
      if(currentScore > bestScore) {
        setBestScore(currentScore)
      }
      setCurrentScore(0)
      alert("game over");
      setClickedIds([]);
    }
    else {
      setClickedIds(() => [...clickedIds, id]);
      setCurrentScore(currentScore + 1);
      const shufflePokeIds = shuffleArray([...pokeIds]);
      setPokeIds(shufflePokeIds);
    }
  }

  return (
    <section id="cards-grid">
      {pokeIds.map((pokeId) => (
        <button key={pokeId} onClick={() => handleClick(pokeId)}>
          <GetPokeData pokeId={pokeId} handleClick={handleClick} />
        </button>
      ))}
    </section>
  );
}
