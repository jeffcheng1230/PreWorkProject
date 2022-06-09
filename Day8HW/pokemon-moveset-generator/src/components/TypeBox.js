import React from "react";
import "./TypeBox.css";

export default function TypeBox(props) {
  const typeColor = {
    normal: "rgb(100, 100, 100)",
    fire: "red",
    water: "blue",
    electric: "yellow",
    grass: "green",
    ice: "cyan",
    fighting: "brown",
    poison: "purple",
    ground: "khaki",
    flying: "cornflowerblue",
    psychic: "deeppink",
    bug: "greenyellow",
    rock: "burlywood",
    ghost: "darkslateblue",
    dragon: "indigo",
    dark: "black",
    steel: "rgb(150, 150, 150)",
    fairy: "pink",
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="pokemon-types">
      {props.pokemon.types.length == 1 ? (
        <div
          className="type-box-full"
          style={{
            backgroundColor: typeColor[props.pokemon.types[0].type.name],
          }}
        >
          {capitalizeFirstLetter(props.pokemon.types[0].type.name)}
        </div>
      ) : (
        <div>
          <div
            className="type-box-half type-box-left"
            style={{
              backgroundColor: typeColor[props.pokemon.types[0].type.name],
            }}
          >
            {capitalizeFirstLetter(props.pokemon.types[0].type.name)}
          </div>
          <div
            className="type-box-half type-box-right"
            style={{
              backgroundColor: typeColor[props.pokemon.types[1].type.name],
            }}
          >
            {capitalizeFirstLetter(props.pokemon.types[1].type.name)}
          </div>
        </div>
      )}
    </div>
  );
}
