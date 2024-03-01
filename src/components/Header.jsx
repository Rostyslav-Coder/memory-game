// Header Component Module

import PropTypes from 'prop-types';
import logoPNG from '../assets/logos/memory-game-logo.png';
import '../styles/Header.css';

const Header = ({ count }) => {
	return (
		<div className="header">
			<img src={logoPNG} alt="Memory Game Logo" className='header__logo' />
			<p className='header__count'>Steps Taken : {count}</p>
		</div>
	);
};

Header.propTypes = {
	count: PropTypes.number.isRequired,
};

export default Header;
