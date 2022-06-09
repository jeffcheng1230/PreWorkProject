import React, { useState } from "react";
import "./PokemonInput.css";

export default function PokemonInput(props) {
  const [pokemonName, setPokemonName] = useState("");

  const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";

  function updatePokemonName(e) {
    setPokemonName(e.target.value);
  }

  function successfulStatus(status) {
    return status >= 200 && status < 300;
  }

  async function fetchPokemonInfo(pokemon) {
    const pokemonResponse = await fetch(pokemonURL + pokemon, {
      methods: "GET",
    });

    if (successfulStatus(pokemonResponse.status)) {
      const pokemonJSON = await pokemonResponse.json();
      return pokemonJSON;
    } else throw new Error("failed to retrieve pokemon");
  }

  async function updatePokemon() {
    const pokemon = await fetchPokemonInfo(pokemonName);
    props.setPokemon(pokemon);
  }

  return (
    <div className="PokemonInput">
      <h1 className="m-4 text-center">Pokemon Moveset Generator</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="pokemonInput"
          placeholder="Enter Pokemon name"
          onChange={updatePokemonName}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary" onClick={updatePokemon}>
            Submit
          </button>
        </div>
      </div>
      <div className="hr-bold"></div>
    </div>
  );
}
