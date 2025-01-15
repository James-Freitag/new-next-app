"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_POKEMON = gql`
  query PokemonSearch($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

interface Sprites {
  other: {
    home: {
      front_default: string;
    };
  };
}
interface Ability {
  name: string;
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemonsprites: [
    {
      sprites: Sprites;
    }
  ];
  pokemon_v2_pokemonabilities: [
    {
      pokemon_v2_ability: Ability;
    }
  ];
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { error, loading, data } = useQuery(GET_POKEMON, {
    variables: { limit: 151 },
  });

  if (loading)
    return (
      <div className="text-4xl text-center py-12">Busy Catching Em All!</div>
    );
  if (error) return <div>Error getting data</div>;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPokemon = data.pokemon_v2_pokemon.filter((poke: Pokemon) =>
    poke.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8 border-b-2">
        Pokemon
      </h1>
      <div className="flex justify-center items-center py-8">
        <input
          type="text"
          placeholder="Pokemon name"
          className="border-[1px] border-black rounded-lg p-2 focus:border-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-12 lg:grid-cols-3 gap-4 lg:gap-12">
          {filteredPokemon.map((poke: Pokemon) => (
            <li
              key={poke.id}
              className="py-8 px-16 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg transition-colors ease-in duration-150"
            >
              <img
                className="mx-auto m-2"
                src={
                  poke.pokemon_v2_pokemonsprites[0].sprites.other.home
                    .front_default
                }
                alt={poke.name}
                width={100}
                height={100}
              />
              <div className="flex flex-col max-w-1/2 mx-auto">
                <p className="capitalize">
                  <span className="font-bold">Name: </span>
                  {poke.name}
                </p>
                <p>
                  <span className="font-bold">Height: </span>
                  {poke.height} dms
                </p>
                <p>
                  <span className="font-semibold">Weight: </span>
                  {poke.weight} hgs
                </p>
                <p>
                  <span className="font-bold">Abilities: </span>
                  {poke.pokemon_v2_pokemonabilities.map((ability, index) => (
                    <span key={ability.pokemon_v2_ability.name}>
                      {index > 0 && ", "} {ability.pokemon_v2_ability.name}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
