import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonInfo = (info) => {
	const navigate = useNavigate();
	const routeChange = () => {
		const path = '/';
		navigate(path);
	};
  //return alert(
    //   `
    //   ID: ${info.id}
    //   Name: ${info.name}, 
    //   Type: ${info.types.map(poke => poke.type.name)}, 
    //   Abilities: ${info.abilities.map((poke) => poke.ability.name)},
    //   Height: ${info.height}
    //   Base Experience: ${info.base_experience}`);
	return (
		<div>
			<h1>{JSON.stringify(info)}</h1>
      <button onClick={routeChange}>Regresar</button>
		</div>
    
	);
};

export default PokemonInfo;
