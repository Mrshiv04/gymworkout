import React from 'react';
import '../components/DetailsPage.css';
import { motion } from 'framer-motion';

function DetailsPage() {
	return (
		<div className='DetailsPage'>
			<div className='leftDetails'>
				<p>Look no further...</p>
				<motion.div
					initial={{
						x: 0,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 2,
					}}
					className='leftComponent'
				>
					<span
						style={{
							fontSize: '40px',
							color: '#e67817',
							fontWeight: 'bold',
							textDecoration: 'underline',
						}}
					>
						Guardian Gym{' '}
					</span>
					is designed for people who want to track their progress and reach
					trainig goals
				</motion.div>
			</div>
			<div className='rightDetails'>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/HQfF5XRVXjU?autoplay=1&mute=1&loop=1'
					title='YouTube video player'
					frameBorder={0}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}

export default DetailsPage;
