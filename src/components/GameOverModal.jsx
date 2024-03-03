// GameOverModal Component Module

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import winnerBg from '../assets/backgrounds/winner-bg.jpg';
import loserBg from '../assets/backgrounds/loser-bg.jpg';
import winnerHero from '../assets/heroes/winner-hero.webp';
import loserHero from '../assets/heroes/anti-hero.webp';
import loserHero1 from '../assets/heroes/bebop-img.webp';
import loserHero2 from '../assets/heroes/rocksteady-img.webp';
import '../styles/GameOverModal.css';

const GameOverModal = ({ startGame, setStartGame, isWin, setIsWin, setCount }) => {
	const [friendsStyle, setFriendsStyle] = useState({});

	useEffect(() => {
		const timer = setTimeout(() => {
			setFriendsStyle({
				transition: '2s',
				transitionProperty: 'opacity, transform',
				opacity: '1',
				transformOrigin: 'bottom',
				transform: 'scale(1.2)',
			});
		}, 1500);

		return () => { clearTimeout(timer); };
	}, []);

	const handleClick = (value) => {
		if (startGame === value) {
			setStartGame(0);
			setTimeout(() => {
				setStartGame(value);
				setIsWin(false);
			}, 0);
			setCount(0);
		} else {
			setStartGame(value);
			setIsWin(false);
			setCount(0);
		}
	};

	if (isWin) {
		return (
			<div className='gameOverModal' style={{ backgroundImage: `url(${winnerBg})` }}>
				<h1 className='gameOverModal__title'>You won !</h1>
				<h2 className='gameOverModal__subTitle'>Select difficulty level for new game:</h2>
				<img className='gameOverModal__hero' src={winnerHero} alt="heros friends" style={friendsStyle} />
				<div className="gameOverModal__buttonBox">
					<button className="gameOverModal__button" onClick={() => handleClick(4)}>Easy</button>
					<button className="gameOverModal__button" onClick={() => handleClick(8)}>Medium</button>
					<button className="gameOverModal__button" onClick={() => handleClick(12)}>Hard</button>
				</div>
			</div >
		);
	}
	return (
		<div className='gameOverModal' style={{ backgroundImage: `url(${loserBg})` }}>
			<h1 className='gameOverModal__title'>You lose !</h1>
			<h2 className='gameOverModal__subTitle'>Select difficulty level for new game:</h2>
			<img className='gameOverModal__antiHero' src={loserHero} alt="heros friends" style={friendsStyle} />
			<img className='gameOverModal__antiHero1' src={loserHero1} alt="heros friends" style={friendsStyle} />
			<img className='gameOverModal__antiHero2' src={loserHero2} alt="heros friends" style={friendsStyle} />
			<div className="gameOverModal__buttonBox">
				<button className="gameOverModal__button" onClick={() => handleClick(4)}>Easy</button>
				<button className="gameOverModal__button" onClick={() => handleClick(8)}>Medium</button>
				<button className="gameOverModal__button" onClick={() => handleClick(12)}>Hard</button>
			</div>
		</div >
	);
};

GameOverModal.propTypes = {
	startGame: PropTypes.number.isRequired,
	setStartGame: PropTypes.func.isRequired,
	isWin: PropTypes.bool.isRequired,
	setIsWin: PropTypes.func.isRequired,
	setCount: PropTypes.func.isRequired,
};

export default GameOverModal;
