// App Component Module

import { useState } from 'react';
import Header from './Header';
import MemoryGame from './MemoryGame';
import Preloader from './Preloader';
import '../styles/App.css';

const App = () => {
	const [startGame, setStartGame] = useState(0);
	const [count, setCount] = useState(0);

	if (startGame === 0) {
		return <Preloader startGame={startGame} setStartGame={setStartGame} />
	}
	return (
		<>
			<Header count={count} />
			<MemoryGame startGame={startGame} count={count} setCount={setCount} />
		</>
	)
};

// App.propTypes = {
// 	startGame: PropTypes.number.isRequired,
// 	setStartGame: PropTypes.func.isRequired,
// };

export default App;
