import React, { useState } from 'react';
import { UseFetch } from '../components/UseFetch';
import Cards from '../components/cards/Cards';

const Pokemon = () => {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
	const state = UseFetch(url);
	const { loading, data } = state;

	loading ? console.log('Loading') : console.log(data.results);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<Cards results={data.results} />
					<div className="container m-auto">
						<button
							onClick={() => setUrl(data.previous)}
							className="m-2 btn btn-dark"
						>
							Anterior
						</button>
						<button
							onClick={() => setUrl(data.next)}
							className="btn btn-dark"
						>
							Siguiente
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Pokemon;
