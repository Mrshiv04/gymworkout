import logo from './logo.svg';
import './App.css';
import LandingPage from '../src/components/LandingPage.tsx';
import Header from '../src/components/Header.tsx';
import DetailsPage from './components/DetailsPage.tsx';
// import CursorTrail from 'cursor-trails';
import ExercisePage from './components/ExercisePage.tsx';

// CursorTrail({
// 	container: document.body,
// 	//images: [$PROVIDE_YOUR_IMAGE_URLS]
// 	rate: 0.5,
// 	size: 40,
// 	life: 1.5,
// 	speed: 1.2,
// });

function App() {
	return (
		<div className='App'>
			<Header />
			<LandingPage />
			<DetailsPage />
			<ExercisePage />
		</div>
	);
}

export default App;
