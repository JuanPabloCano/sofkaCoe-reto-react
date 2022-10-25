import React from 'react';
import CardsPokemon from './CardsPokemon';
import './Cards.css';

const Cards = ({ results }) => {
	return (
		<div className="container">
			<ul className="cards">
				{results.map((pokemon) => (
					<li className="card-item" key={pokemon.name}>
						<CardsPokemon url={pokemon.url} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cards;
