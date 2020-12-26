import './App.css';
import { Header, Navbar, Profile, Dialogs, Music, News, Settings } from './components/index';
import { BrowserRouter, Route } from 'react-router-dom'

function App({ posts, dialogs, messages }) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile' render={() => <Profile
						posts={posts}
					/>} />
					<Route path='/dialogs' render={() => <Dialogs
						dialogs={dialogs}
						messages={messages}
					/>} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

