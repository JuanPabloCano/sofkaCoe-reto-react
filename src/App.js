import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Pokemon />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
