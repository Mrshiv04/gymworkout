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
				{/* <ul>
					<li>Get more strength</li>
					<li>Improves your condition</li>
					<li>Loose excess weight</li>
					<li>Be healthier and feel better</li>
				</ul> */}
				{/* <iframe
					width={420}
					height={315}
					// style={{ width: '100%', height: '100%', objectFit: 'contain' }}
					src='https://www.youtube.com/embed?v=HQfF5XRVXjU&ab_channel=DavidNguyenHo?autoplay=1&mute=1&enablejsapi=1'
					allow='autoplay; encrypted-media'
					frameBorder={0}
					// allow="autoplay"
					allowFullScreen
					title='video'
				/> */}

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
