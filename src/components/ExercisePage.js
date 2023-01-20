import React, { useEffect, useState } from 'react';
import '../components/ExercisePage.css';
import axios from 'axios';
import ExerciseCard from './ExerciseCard.js';

let bodyPart;
const options = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	headers: {
		'X-RapidAPI-Key': '67e0e28dd6mshdcf2a323dd3d7c2p15ed41jsnb35ba55c93e3',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then(function (response) {
		bodyPart = response.data;
	})
	.catch(function (error) {
		console.error(error);
	});

function ExercisePage() {
	const [isOpen, setIsOpen] = useState(false);
	const [bodyPartDetail, setBodyPartDetail] = useState();

	const namePlate = (name) => {
		setIsOpen(false);

		const options = {
			method: 'GET',
			url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
			headers: {
				'X-RapidAPI-Key': '67e0e28dd6mshdcf2a323dd3d7c2p15ed41jsnb35ba55c93e3',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				setBodyPartDetail(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<div className='ExercisePage'>
			<h2 className='exerciseHeader'>exercise</h2>
			<p className='bodyPartHeader'>Select Body Part</p>
			<div>
				<button onClick={() => setIsOpen(!isOpen)} className='dropdownButton'>
					{isOpen ? 'Close' : 'Open'} Body Part
				</button>
				{isOpen && (
					<ul style={{ display: 'flex' }}>
						{bodyPart.map((bodyParts) => (
							<li
								className='bodyList'
								onClick={() => {
									namePlate(bodyParts);
								}}
							>
								{bodyParts}
							</li>
						))}
					</ul>
				)}
			</div>
			{bodyPartDetail ? (
				<ExerciseCard exerciseDetails={bodyPartDetail} />
			) : (
				<p className='displayMessage'>
					Your exercises will be displayed here...
				</p>
			)}
		</div>
	);
}

export default ExercisePage;
