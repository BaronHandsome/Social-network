import './App.css';
import { Header, Navbar, Profile, Friends, Dialogs, Music, News, Settings } from './components/index';
import { Route } from 'react-router-dom'

function App({ state, dispatch }) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/profile' render={() => <Profile
					state={state.profilePage}
					dispatch={dispatch}
				/>} />
				<Route path='/friends' render={() => <Friends
					state={state.friendsPage} />} />
				<Route path='/dialogs' render={() => <Dialogs
					state={state.dialogsPage}
					dispatch={dispatch}
				/>} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>
	);
};

export default App;

