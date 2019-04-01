import React, {Component} from 'react';
import Board from './board';
import ScoreBoard from './score_board';

class Game extends Component{
	render() {
		return <div className="game">
			<Board/>
			<ScoreBoard score={0} highscore={0} />
		</div>
	}
} 


export default Game;