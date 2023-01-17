import React from 'react';
import '../components/LandingPage.css';
import backgroundPhoto from '../components/gym2.jpg';
import { motion } from 'framer-motion';

function LandingPage() {
	return (
		<div className='landingPagebody'>
			<motion.div
				initial={{
					x: 0,
					opacity: 0,
					scale: 1,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='landingPage'
				style={{ backgroundImage: `url(${backgroundPhoto})` }}
			></motion.div>
		</div>
	);
}

export default LandingPage;
