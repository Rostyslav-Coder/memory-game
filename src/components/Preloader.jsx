// Preloader Component Module

import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import logoWEBP from '../assets/logos/inner-logo.webp';
import '../styles/Preloader.css';

const Preloader = ({ startGame, setStartGame }) => {

	const handleClick = (value) => {
		setStartGame(startGame + value);
	};

	return (
		<div className='preloader' data-testid='preloader'>
			<h1 className='preloader__title gradient-text'>TEENAGE MUTANT NINJA TURTLES</h1>
			<h1 className='preloader__title gradient-text'>MEMORY GAME</h1>
			<Tilt
				className='preloader__tilt'
				tiltMaxAngleX={22}
				tiltMaxAngleY={22}
				glareEnable={true}
				glareMaxOpacity={0.4}
				glareColor='#ffffff'
				glarePosition='bottom'
				glareBorderRadius='50%'
				transitionSpeed={1000}
				scale={1}
				gyroscope={true}
			>
				<img className='preloader__img' src={logoWEBP} alt='teenage mutant ninja turtles logo' />
			</Tilt>
			<h2 className='preloader__subTitle gradient-text'>Choose Game Difficulty</h2>
			<div className='preloader__buttonBox'>
				<button className='preloader__button' onClick={() => handleClick(4)} data-testid='Easy'>Easy</button>
				<button className='preloader__button' onClick={() => handleClick(8)} data-testid='Medium'>Medium</button>
				<button className='preloader__button' onClick={() => handleClick(12)} data-testid='Hard'>Hard</button>
			</div>
		</div>
	);
};

Preloader.propTypes = {
	startGame: PropTypes.number.isRequired,
	setStartGame: PropTypes.func.isRequired,
};

export default Preloader;
