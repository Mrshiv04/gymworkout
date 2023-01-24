import React from 'react';
import '../components/Header.css';
import Gymlogo from '../components/GymLogo.png';
import downloadLogo from '../components/downloadlogo.png';

function Header() {
	return (
		<div className='header'>
			<div className='header_left'>
				<img src={Gymlogo} className='header_logo' />
				<p style={{ letterSpacing: '15px', fontWeight: 'normal' }}>
					Guardian Gym
				</p>
			</div>
			<div className='header_right'>
				<div className='logo_right'>
					<img src={downloadLogo} className='rightLogo' />
					Download App
				</div>
			</div>
		</div>
	);
}

export default Header;
