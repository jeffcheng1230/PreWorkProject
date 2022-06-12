import React, { useState } from "react";
import "./PokemonInput.css";

export default function PokemonInput(props) {
  const [pokemonName, setPokemonName] = useState("");

  const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";

  class Move {
    constructor() {
      this.name = arguments[0];
      this.type = arguments[1];
      this.damage = arguments[2];
    }
  }

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

  function compMoves(move1, move2) {
    if (move1.damage < move2.damage) return 1;
    return -1;
  }

  async function findMoves(pokemon) {
    const moves = [];

    let atk = 0, spAtk = 0;
    for (let i = 0; i < pokemon.stats.length; i++) {
      if (pokemon.stats[i].stat.name == "attack")
        atk = i;
      else if (pokemon.stats[i].stat.name == "special-attack")
        spAtk = i;
    }

    for (let i = 0; i < pokemon.moves.length; i++) {
      // get move
      let moveURL = pokemon.moves[i].move.url;
      let move = await fetch(moveURL, {
        methods: "GET",
      });

      if (successfulStatus(move.status)) {
        move = await move.json();
      } else throw new Error("Failed to retrieve move");

      // calculate expected damage from a move (lvl 50)
      // takes into account:
      //  1. power
      //  2. accuracy
      //  3. STAB
      //  4. no duplicate types
      //  5. physical/special split

      // 5. physical/special split
      let attackStat = pokemon.stats[(move.damage_class.name == "physical" ? atk : spAtk)].base_stat;
      let defenseStat = 83; // average def/spDef stat for all pokemon is 83
      
      // 1. power
      let damage = (22 * move.power * attackStat / defenseStat / 50) + 2;

      // 3. stab
      for (let j = 0; j < pokemon.types.length; j++)
        if (move.type.name == pokemon.types[j].type.name) damage *= 1.5;
      
      // 2. accuracy
      damage *= move.accuracy;

      moves.push(new Move(move.name, move.type.name, damage));
    }

    moves.sort(compMoves);

    // 4. no duplicate types
    let numMoves = 4;
    let map = {};
    let moveInd = [];
    for (let j = 0; j < moves.length && moveInd.length < numMoves; j++) {
      if (map[moves[j].type] == undefined) {
        moveInd.push(j);
        map[moves[j].type] = 1;
      }
    }
    if (moveInd.length == numMoves) {
      for (let j = 0, k = 0; k < numMoves; j++, k++) {
        if (j != moveInd[k]) {
          let tmp = moves[moveInd[k]];
          moves[moveInd[k]] = moves[j];
          moves[j] = tmp;
        }
      }
    }

    console.log(moves);

    return moves;
  }

  async function updatePokemon(e) {
    e.preventDefault();

    props.setLoading(true);
    
    const pokemon = await fetchPokemonInfo(pokemonName);
    props.setPokemon(pokemon);
    props.setMoves(await findMoves(pokemon));

    props.setLoading(false);
  }

  return (
    <div className="PokemonInput">
      <h1 className="m-4 text-center">Pokemon Moveset Generator</h1>
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="pokemonInput"
            placeholder="Enter Pokemon name"
            onChange={updatePokemonName}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={updatePokemon}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="hr-bold"></div>
    </div>
  );
}
