import { useState, useEffect } from "react";

export default function GetPokeData({ pokeId, handleClick }) {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon(pokeId);
  }, [pokeId]);

  return (
    <>
      <div id="cards-grid-el">
        {pokemon ? <img src={pokemon.sprites.front_default} alt="poke" /> : <p></p>}
      </div>
    </>
  );
}
