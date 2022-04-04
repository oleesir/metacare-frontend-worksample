import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import Analytics from './pages/Analytics';
import Efficiency from './pages/Analytics/Teams/Efficiency';
import Teams from './pages/Analytics/Teams';
import Empty from './components/Empty';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />}>
						<Route path='admin' element={<Empty name='Admin' />} hasSubnav>
							<Route path='main' element={<Empty name='Main' />} />
						</Route>
						<Route path='knowledge_base' element={<Empty name='Konwledge Base' />} hasSubnav>
							<Route path='main' element={<Empty name='Main' />} />
						</Route>
						<Route path='train_sam' element={<Empty name='Train Sam' />} hasSubnav>
							<Route path='main' element={<Empty name='Main' />} />
						</Route>
						<Route path='agent_inbox' element={<Empty name='Agent Inbox' />} hasSubnav>
							<Route path='main' element={<Empty name='Main' />} />
						</Route>
						<Route path='help_center' element={<Empty name='Help Center' />} hasSubnav>
							<Route path='main' element={<Empty name='Main' />} />
						</Route>
						<Route path='analytics' element={<Analytics />}>
							<Route path='teams' element={<Teams />}>
								<Route path='efficiency' element={<Efficiency />} />
								<Route path='volume' element={<Empty name='Volume' />} />
								<Route path='customer_satisfaction' element={<Empty name='Customer Satisfaction' />} />
								<Route path='back_log' element={<Empty name='Backlog' />} />
							</Route>
							<Route path='knowledge_base' element={<Empty name='Knowledge Base' />} />
							<Route path='training_sam' element={<Empty name='Training Sam' />} />
							<Route path='help_center' element={<Empty name='Help Center' />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
