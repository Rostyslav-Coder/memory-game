// App Component Module

import { useState } from 'react';
// import PropTypes from 'prop-types';
import MemoryGame from './MemoryGame';
import Preloader from './Preloader';
import '../styles/App.css';

const App = () => {
	const [startGame, setStartGame] = useState(0);

	if (startGame === 0) {
		return <Preloader startGame={startGame} setStartGame={setStartGame} />
	}
	return <MemoryGame startGame={startGame} />
};

// App.propTypes = {
// 	startGame: PropTypes.number.isRequired,
// 	setStartGame: PropTypes.func.isRequired,
// };

export default App;
