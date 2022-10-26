import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import PokemonInfo from './components/cards/PokemonInfo';
import Title from './components/header/Title'

function App() {
	return (
		<div className="App">
      <Title />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Pokemon />} />
          <Route path="/*" element={<PokemonInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
