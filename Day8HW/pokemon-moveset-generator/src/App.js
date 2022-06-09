import React, {useState} from "react";
import PokemonInput from "./components/PokemonInput";
import PokemonDisplay from "./components/PokemonDisplay";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {

  const [pokemon, setPokemon] = useState(null);

  return (
    <div>
      <div className="container">
        <div className="card p-4">
          <PokemonInput setPokemon={setPokemon}></PokemonInput>
          <PokemonDisplay pokemon={pokemon}></PokemonDisplay>
        </div>
      </div>
    </div>
  );
}
