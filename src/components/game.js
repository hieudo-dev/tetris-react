import React, {Component} from 'react';
import Board from './board';
import ScoreBoard from './score_board';

class Game extends Component{
	constructor(){
		super();
		this.state = {
			ended: false,
			highscore: 0,
			score: 0,
		}
	}

	addScore(x) {
		this.setState({
			score: this.state.score + x
		});
	}

	endGame(){
		const curScore = this.state.score;
		this.setState({
			ended: true,
			score: 0,
			highscore: curScore
		});
	}

	render() {
		return <div className="game">
			<Board
				ended={this.state.ended}
				endGameHandler={() => this.endGame()}
				clearedLines={lines => this.addScore(lines)}
			/>
			<ScoreBoard score={this.state.score} highscore={this.state.highscore}/>
		</div>
	}
} 


export default Game;