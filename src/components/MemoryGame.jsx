import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import HEROESLIST from '../herosList';
import '../styles/MemoryGame.css'

function MemoryGame({ startGame }) {
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [selectedCards, setSelectedCards] = useState([]);

	const handleCardClick = (id) => {
		if (selectedCards.includes(id)) {
			setSelectedCards(selectedCards.filter(cardId => cardId !== id));
		} else {
			alert("Вы проиграли");
			setSelectedCards(cards.map(card => card.id));
		}
		if (selectedCards.length === 1) {
			alert("Вы победили");
		}
		flipAllCards();
	}

	const flipAllCards = () => {
		setFlippedCards(cards.map(card => card.id));
		setTimeout(() => {
			setFlippedCards([]);
			setCards(shuffleArray(cards));
		}, 1000);
	}

	const shuffleArray = (array) => {
		let currentIndex = array.length, randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		return array;
	}

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
	}

	useEffect(() => {
		createNewSetOfCards();
	}, [startGame]);

	return (
		<div className='memoryGame'>
			{cards.map(card => (
				<Card
					key={card.id}
					hero={card}
					onClick={() => handleCardClick(card.id)}
					flipped={flippedCards.includes(card.id)} />
			))}
		</div>
	);
}

MemoryGame.propTypes = {
	startGame: PropTypes.number.isRequired,
}

export default MemoryGame;
