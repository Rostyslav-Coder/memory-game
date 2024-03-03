// Header Component Module

import PropTypes from 'prop-types';
import logoWEBP from '../assets/logos/memory-game-logo.webp';
import '../styles/Header.css';

const Header = ({ count, wins }) => {
	return (
		<div className="header">
			<img src={logoWEBP} alt="Memory Game Logo" className='header__logo' />
			<div className="header__counterBox">
				<p className='header__count'>Steps Taken : {count}</p>
				<p className='header__count'>Consecutive wins : {wins}</p>
			</div>
		</div>
	);
};

Header.propTypes = {
	count: PropTypes.number.isRequired,
	wins: PropTypes.number.isRequired,
};

export default Header;
