import React from 'react';
import './ExerciseCard.css';

function ExerciseCard() {
	return (
		<div>
			<div className='exerciseCard'>
				<img
					className='exerciseImage'
					src='http://d205bpvrqc9yn1.cloudfront.net/0007.gif'
				/>
				<div className='detailsSection'>
					<p className='exerciseName'>exercise name</p>
					<p>body part</p>
					<p>target muscle</p>
					<p>equipment</p>
				</div>
			</div>
		</div>
	);
}

export default ExerciseCard;
