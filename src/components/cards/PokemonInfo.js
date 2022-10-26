import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonInfo = (info) => {
	const navigate = useNavigate();
	const routeChange = () => {
		const path = '/';
		navigate(path);
	};
	return (
		<div>
			<h1>{JSON.stringify(info)}</h1>
      <button onClick={routeChange}>Regresar</button>
		</div>
    
	);
};

export default PokemonInfo;
