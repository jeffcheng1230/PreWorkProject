
// TODO:
// - moveset suggestion
//    - accuracy considerations
//    - add delete button to get rid of move and replace with new one
//    - optimal coverage 
//    - variable damage moves
//    - make move suggestions slightly random to suggest different movesets
//    - defensive sets?

import React, {useState} from "react";
import PokemonInput from "./components/PokemonInput";
import PokemonDisplay from "./components/PokemonDisplay";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  const [pokemon, setPokemon] = useState(null);
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(false);

  let curInd = 4;
  function deleteMove(ind) {
    let cpy = moves;
    let tmp = cpy[ind];
    cpy[ind] = cpy[curInd];
    cpy[curInd] = tmp;
    setMoves(cpy);
    curInd++;
  }

  return (
    <div>
      <div className="container">
        <div className="card p-4">
          <PokemonInput setPokemon={setPokemon} setMoves={setMoves} setLoading={setLoading}></PokemonInput>
          <PokemonDisplay pokemon={pokemon} moves={moves} loading={loading} deleteMove={deleteMove}></PokemonDisplay>
        </div>
      </div>
    </div>
  );
}
