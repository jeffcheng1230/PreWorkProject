import React, { useState } from "react";
import "./PokemonDisplay.css";
import TypeBox from "./TypeBox";
import MoveBox from "./MoveBox";

export default function PokemonDisplay(props) {
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
    dragon: "rebeccapurple",
    dark: "black",
    steel: "rgb(150, 150, 150)",
    fairy: "pink",
  };

  const [newMove, setNewMove] = useState(0);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function typeColors() {
    let colors = [];
    for (let i = 0; i < props.pokemon.types.length; i++)
      colors.push(typeColor[props.pokemon.types[i].type.name]);
    return colors;
  }

  function stab(pokeTypes, moveType) {
    for (let i = 0; i < pokeTypes.length; i++)
      if (pokeTypes[i].type.name == moveType)
        return true;
    return false;
  }

  function deleteMove(ind) {
      setNewMove(newMove + 1);
      props.deleteMove(ind);
  }

  if (props.loading) {
    return (
      <div className="text-center">
        <img className="loading" src={require("./loading.gif")}></img>
      </div>
    )
  }
  else if (props.pokemon != null) {
    return (
      <div className="PokemonDisplay">
        <div className="name-sprite">
          <div className="pokemon-info w-50">
            <div className="pokemon-name">
              {capitalizeFirstLetter(props.pokemon.name)}
            </div>
            <TypeBox
              pokemon={props.pokemon}
              typeColors={typeColors()}
            ></TypeBox>
          </div>

          <div className="pokemon-sprite w-50">
            <img
              src={props.pokemon.sprites.front_default}
              className="w-75"
            ></img>
          </div>
        </div>

        <div className="pokemon-moves w-100">
          {props.moves[0] == undefined ? (
            ""
          ) : (
            <div>
              <div className="move-row">
                <MoveBox
                  typeColor={typeColor[props.moves[0].type]}
                  name={capitalizeFirstLetter(props.moves[0].name)}
                  stab={stab(props.pokemon.types, props.moves[0].type)}
                  moveSlot={0}
                  deleteMove={deleteMove}
                ></MoveBox>
                <MoveBox
                  typeColor={typeColor[props.moves[1].type]}
                  name={capitalizeFirstLetter(props.moves[1].name)}
                  stab={stab(props.pokemon.types, props.moves[1].type)}
                  moveSlot={1}
                  deleteMove={deleteMove}
                ></MoveBox>
              </div>
              <div className="move-row">
                <MoveBox
                  typeColor={typeColor[props.moves[2].type]}
                  name={capitalizeFirstLetter(props.moves[2].name)}
                  stab={stab(props.pokemon.types, props.moves[2].type)}
                  moveSlot={2}
                  deleteMove={deleteMove}
                ></MoveBox>
                <MoveBox
                  typeColor={typeColor[props.moves[3].type]}
                  name={capitalizeFirstLetter(props.moves[3].name)}
                  stab={stab(props.pokemon.types, props.moves[3].type)}
                  moveSlot={3}
                  deleteMove={deleteMove}
                ></MoveBox>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else return <div></div>;
}
