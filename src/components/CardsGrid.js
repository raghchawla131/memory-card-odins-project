import GetPokeData from "./GetPokeData";
import { useState, useEffect } from "react";

export default function CardsGrid() {
  return (
    <section id="cards-grid">
      <GetPokeData pokeId={1} />
      <GetPokeData pokeId={4} />
      <GetPokeData pokeId={7} />
      <GetPokeData pokeId={10} />
      <GetPokeData pokeId={13} />
      <GetPokeData pokeId={16} />
    </section>
  );
}
