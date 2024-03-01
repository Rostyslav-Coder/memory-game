// GameOverModal Component Module

import PropTypes from 'prop-types';
import '../styles/GameOverModal.css';

const GameOverModal = ({ startGame, setStartGame, isWin, setIsWin }) => {

	const handleClick = (value) => {
		if (startGame === value) {
			setStartGame(0);
			setTimeout(() => {
				setStartGame(value);
				setIsWin(false);
			}, 0);
		} else {
			setStartGame(value);
			setIsWin(false);
		}
	};

	return (
		<div className='gameOverModal'>
			<h1 className='gameOverModal__title'>{isWin ? 'You won!' : 'You lose!'}</h1>
			<h2 className='gameOverModal__subTitle'>Select difficulty level for new game:</h2>
			<div className="gameOverModal__buttonBox">
				<button className="gameOverModal__button" onClick={() => handleClick(4)}>Easy</button>
				<button className="gameOverModal__button" onClick={() => handleClick(8)}>Medium</button>
				<button className="gameOverModal__button" onClick={() => handleClick(12)}>Hard</button>
			</div>
		</div>
	);
};

GameOverModal.propTypes = {
	startGame: PropTypes.number.isRequired,
	setStartGame: PropTypes.func.isRequired,
	isWin: PropTypes.bool.isRequired,
	setIsWin: PropTypes.func.isRequired,
};

export default GameOverModal;
