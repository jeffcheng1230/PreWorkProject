let pokemonURL = "https://pokeapi.co/api/v2/pokemon/";

function successfulStatus(status) {
    return status >= 200 && status < 300;
}

async function fetchPokemonInfo(pokemon) {
    const pokemonResponse = await fetch(
        pokemonURL + pokemon, {
        methods: "GET",
    });

    if (successfulStatus(pokemonResponse.status)) {
        const pokemonJSON = await pokemonResponse.json();
        return pokemonJSON; 
    }
    else
        throw new Error("failed to retrieve pokemon");
}

async function fetchPokemonName(pokemon) {
    const pokemonInfo = await fetchPokemonInfo(pokemon);
    const pokemonName = pokemonInfo.name;
}

async function fetchPokemonTypes(pokemon) {
    const pokemonInfo = await fetchPokemonInfo(pokemon);
    const pokemonTypes = pokemonInfo.types;
}

async function fetchPokemonSprite(pokemon) {
    const pokemonInfo = await fetchPokemonInfo(pokemon);
    const pokemonSprite = pokemonInfo.sprites;
}

async function fetchPokemonMoves(pokemon) {
    const pokemonInfo = await fetchPokemonInfo(pokemon);
    const pokemonMoves = pokemonInfo.moves;
}

fetchPokemonMoves("clefairy");