import React, {Component} from 'react';
import Board from './board';

class Game extends Component{
	render() {
		return <div className="game">
			<Board/>
		</div>
	}
} 


export default Game;