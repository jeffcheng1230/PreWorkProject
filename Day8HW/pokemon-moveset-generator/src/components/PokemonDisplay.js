import React, { useState } from "react";
import "./PokemonDisplay.css";
import TypeBox from "./TypeBox";

export default function PokemonDisplay(props) {
  //const [pokemon, setPokemon] = useState(props.pokemon);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (props.pokemon != null) {
    return (
      <div className="PokemonDisplay">
        <div className="pokemon-info w-50">
          <div className="pokemon-name">
            {capitalizeFirstLetter(props.pokemon.name)}
          </div>
          <TypeBox pokemon={props.pokemon}></TypeBox>
        </div>
        <div className="pokemon-sprite w-50">
            <img src={props.pokemon.sprites.front_default} class="w-75"></img>
        </div>
      </div>
    );
  } else return <div></div>;
}
