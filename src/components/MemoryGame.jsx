// MemoryGame Component Module

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import GameOverModal from './GameOverModal';
import HEROESLIST from '../herosList';
import '../styles/MemoryGame.css';

function MemoryGame({ startGame, setStartGame, setCount, setWins }) {

	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [isWin, setIsWin] = useState(false);

	const handleCardClick = (id) => {
		setCount(count => count + 1);

		if (selectedCards.includes(id)) {
			setSelectedCards(selectedCards.filter(cardId => cardId !== id));
		} else {
			setGameOver(true);
			setIsWin(false);
			setSelectedCards(cards.map(card => card.id));
			setWins(0);
		}
		if (selectedCards.length === 1) {
			setGameOver(true);
			setIsWin(true);
			setWins(wins => wins + 1);
		}

		flipAllCards();
	};

	const flipAllCards = () => {
		setFlippedCards(cards.map(card => card.id));
		setTimeout(() => {
			setFlippedCards([]);
			setCards(shuffleArray(cards));
		}, 1000);
	};

	const shuffleArray = (array) => {
		let currentIndex = array.length, randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		return array;
	};

	const createNewSetOfCards = () => {
		let newCards = [];

		while (newCards.length < startGame) {
			let randomIndex = Math.floor(Math.random() * HEROESLIST.length);
			let randomHero = HEROESLIST[randomIndex];
			if (!newCards.find(card => card.id === randomHero.id)) {
				newCards.push(randomHero);
			}
		}
		setCards(newCards);
		setSelectedCards(newCards.map(card => card.id));
	};

	useEffect(() => {
		createNewSetOfCards();
	}, [startGame]);

	useEffect(() => {
		setCards([]);
		setFlippedCards([]);
		setSelectedCards([]);
		setGameOver(false);
		setIsWin(false);
		createNewSetOfCards();
	}, [startGame]);

	return (
		<div className='memoryGame' data-testid='memoryGame'>
			{gameOver ? (
				<GameOverModal startGame={startGame} setStartGame={setStartGame} isWin={isWin} setIsWin={setIsWin} setCount={setCount} />
			) : (
				cards.map(card => (
					<Card
						key={card.id}
						hero={card}
						onClick={() => handleCardClick(card.id)}
						flipped={flippedCards.includes(card.id)} />
				))
			)}
		</div>
	);
}

MemoryGame.propTypes = {
	startGame: PropTypes.number.isRequired,
	setStartGame: PropTypes.func.isRequired,
	setCount: PropTypes.func.isRequired,
	setWins: PropTypes.func.isRequired,
};

export default MemoryGame;
