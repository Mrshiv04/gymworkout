import React from 'react';
import './ExerciseCard.css';

function ExerciseCard(props) {
	return (
		<div>
			{props.exerciseDetails.map((details) => (
				<div className='exerciseCard'>
					<img className='exerciseImage' src={details.gifUrl} />
					<div className='detailsSection'>
						<p className='exerciseName'>{details.name}</p>
						<p className='innerResponse'>
							<span className='innerDetail'>Body Part Impacted: </span>
							{details.bodyPart}
						</p>
						<p className='innerResponse'>
							<span className='innerDetail'>Target Muscle: </span>
							{details.target}
						</p>
						<p className='innerResponse'>
							<span className='innerDetail'>Equipment Used: </span>
							{details.equipment}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default ExerciseCard;
