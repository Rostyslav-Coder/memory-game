import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import HEROESLIST from '../herosList';
import '../styles/MemoryGame.css'

function MemoryGame({ startGame }) {
	const [cards, setCards] = useState([]);
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
	}

	// Создаем новый набор карт на основе start
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

	// Создаем новый набор карт при изменении start
	useState(() => {
		createNewSetOfCards();
	}, [startGame]);

	return (
		<div className='memoryGame'>
			{cards.map(card => (
				<Card
					key={card.id}
					hero={card}
					onClick={() => handleCardClick(card.id)} />
			))}
		</div>
	);
}

MemoryGame.propTypes = {
	startGame: PropTypes.number.isRequired,
}

export default MemoryGame;
