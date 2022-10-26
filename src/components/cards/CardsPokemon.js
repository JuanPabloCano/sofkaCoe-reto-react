import React from 'react';
import { UseFetch } from '../UseFetch';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

const CardsPokemon = ({ url }) => {
	const state = UseFetch(url);
	const { loading, data } = state;
	const navigate = useNavigate();
	const routeChange = () => {
		//PokemonInfo(data)
		const path = '/pokemon';
		navigate(path);
	};

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className="card" style={{ width: '14rem' }}>
					<div className="card-header">
						<h5 className="card-title">{data.id}</h5>
					</div>
					<div className="card-body">
						<img src={data.sprites.front_default} alt="pokemon" />
					</div>
					<div className="card-footer">
						<p className="card-text text-capitalize">
							{data.forms[0].name.toUpperCase()}
						</p>
					</div>
					<div className="card-content-types">
						<p>{data.types.map((item) => item.type.name + ' ')}</p>
					</div>
					<div className="container m-auto">
						<button
							//onClick={() => PokemonInfo(data)}
							onClick={routeChange}
							className="m-2 btn btn-dark"
						>
							Info
						</button>
					</div>
				</div>
			)}
			<Routes>
				<Route path="/pokemon" element={<PokemonInfo info={data} />} />
			</Routes>
		</div>
	);
};

export default CardsPokemon;
