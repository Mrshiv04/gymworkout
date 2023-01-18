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
				<ul>
					<li>Get more strength</li>
					<li>Improves your condition</li>
					<li>Loose excess weight</li>
					<li>Be healthier and feel better</li>
				</ul>
			</div>
		</div>
	);
}

export default DetailsPage;
