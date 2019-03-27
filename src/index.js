import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import Menu from './components/menu';

const App = () => {
	return <div>
		<Menu/>
	</div>;
}

//=================================>

ReactDOM.render(<App />, document.getElementById('root'));