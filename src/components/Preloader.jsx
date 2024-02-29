import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import logoWEBP from '../assets/logos/memory-game-logo.webp';
import logoJPG from '../assets/logos/memory-game-logo.png';
import '../styles/Preloader.css';

const Preloader = ({ startGame, setStartGame }) => {

	const handleClick = (value) => {
		setStartGame(startGame + value);
	};

	return (
		<div className="preloader">
			<h1 className='preloader__title gradient-text'>TEENAGE MUTANT NINJA TURTLES</h1>
			<h1 className='preloader__title gradient-text'>MEMORY GAME</h1>
			<Tilt
				className='preloader__tilt'
				glareEnable={true}
				glareMaxOpacity={0.4}
				glareColor="#ffffff"
				glarePosition="bottom"
				glareBorderRadius="50%"
			>
				<picture className='preloader__imgbox'>
					<source srcSet={logoWEBP} alt="teenage mutant ninja turtles logo" type='image/webp' />
					<img src={logoJPG} alt="teenage mutant ninja turtles logo" />
				</picture>
			</Tilt>
			<h2 className='preloader__subTitle gradient-text'>Choose Game Difficulty</h2>
			<div className='preloader__buttonBox'>
				<button className='preloader__button' onClick={() => handleClick(4)}>Easy</button>
				<button className='preloader__button' onClick={() => handleClick(8)}>Medium</button>
				<button className='preloader__button' onClick={() => handleClick(12)}>Hard</button>
			</div>
		</div>
	);
};

Preloader.propTypes = {
	startGame: PropTypes.number.isRequired,
	setStartGame: PropTypes.func.isRequired,
};

export default Preloader;
