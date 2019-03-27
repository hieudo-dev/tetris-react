import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import Menu from './components/menu';
import Game from './components/game';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {playing: false}
	}

	startGame() {
		this.setState({playing: true})
	}

	render() {
		return (<div>
			{ this.state.playing ? <Game/>: <Menu startGame={() => this.startGame()}/> }
		</div>)
	}
}

//=================================>

ReactDOM.render(<App />, document.getElementById('root'));