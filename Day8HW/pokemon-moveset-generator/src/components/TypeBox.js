import React from "react";
import "./TypeBox.css";

export default function TypeBox(props) {
  

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="pokemon-types">
      {props.pokemon.types.length == 1 ? (
        <div
          className="type-box-full"
          style={{
            backgroundColor: props.typeColors[0],
          }}
        >
          {capitalizeFirstLetter(props.pokemon.types[0].type.name)}
        </div>
      ) : (
        <div>
          <div
            className="type-box-half type-box-left"
            style={{
              backgroundColor: props.typeColors[0],
            }}
          >
            {capitalizeFirstLetter(props.pokemon.types[0].type.name)}
          </div>
          <div
            className="type-box-half type-box-right"
            style={{
              backgroundColor: props.typeColors[1],
            }}
          >
            {capitalizeFirstLetter(props.pokemon.types[1].type.name)}
          </div>
        </div>
      )}
    </div>
  );
}
