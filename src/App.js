import './App.css';
import { Header, Navbar, Profile, Dialogs, Music, News, Settings } from './components/index';
import { Route } from 'react-router-dom'

function App({ state, addPost, addMessage, deleteThisPost }) {
	return (
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile
						state={state.profilePage}
						addPost={addPost}
					/>} />
					<Route path='/dialogs' render={() => <Dialogs
						state={state.dialogsPage}
						addMessage={addMessage}
					/>} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
	);
};

export default App;

