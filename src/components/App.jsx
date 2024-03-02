// App Component Module

import { useState } from 'react';
import Header from './Header';
import MemoryGame from './MemoryGame';
import Preloader from './Preloader';

const App = () => {
	const [startGame, setStartGame] = useState(0);
	const [count, setCount] = useState(0);
	const [wins, setWins] = useState(0);

	if (startGame === 0) {
		return <Preloader startGame={startGame} setStartGame={setStartGame} />
	}
	return (
		<>
			<Header count={count} wins={wins} />
			<MemoryGame startGame={startGame} setStartGame={setStartGame} setCount={setCount} setWins={setWins} />
		</>
	)
};

export default App;
