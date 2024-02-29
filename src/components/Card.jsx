import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import '../styles/Card.css';

function Card({ hero, onClick }) {
	return (
		<Tilt className='cerd__tilt' glareEnable={true} glareMaxOpacity={0.6} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
			<div className='card' onClick={onClick}>
				<div className='card__bg' style={{ backgroundImage: `url(${hero.cardBg})` }}>
					<img className='card__img' src={hero.imageUrl} alt={`${hero.heroName} image`} />
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
}

export default Card;
