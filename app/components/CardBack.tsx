import React from "react";

const CardBack = ({ abilities }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-bold">Abilities:</p>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.pokemon_v2_ability.name}>
            {ability.pokemon_v2_ability.name}
          </li>
        ))}
      </ul>
      {/* Add other details like weight here */}
    </div>
  );
};

export default CardBack;
