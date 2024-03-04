// Card Component Module

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
// import logoWEBP from '../assets/logos/memory-game-logo.webp';
import '../styles/Card.css';

function Card({ hero, onClick, flipped }) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		if (flipped) {
			setIsFlipped(true);
			setTimeout(() => {
				setIsFlipped(false);
			}, 750);
		}
	}, [flipped]);

	const handleClick = () => {
		onClick();
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 850);
	};

	return (
		<Tilt
			className='card__tilt'
			tiltMaxAngleX={22}
			tiltMaxAngleY={22}
			transitionSpeed={1000}
			scale={1}
			gyroscope={true}
		>
			<div
				className={`card ${isFlipped ? 'flipped' : ''}`}
				onClick={handleClick}
				data-testid='Card'
			>
				<div className='card__bg' style={{ backgroundImage: `url(${hero.cardBg})` }} >
					<img className={`card__img ${isClicked ? 'clicked' : ''}`} src={hero.imageUrl} alt={`${hero.heroName} image`} />
				</div>
				<h2 className='card__text'>{hero.heroName}</h2>
			</div>
		</Tilt>
	);
}

Card.propTypes = {
	hero: PropTypes.shape({
		heroName: PropTypes.string,
		imageUrl: PropTypes.string,
		cardBg: PropTypes.string,
	}).isRequired,
	onClick: PropTypes.func.isRequired,
	flipped: PropTypes.bool.isRequired,
}

export default Card;
