import React, {Component} from 'react';
import Board from '../Board/board';
import ScoreBoard from '../ScoreBoard/score_board';
import Help from '../Help/help';

class Game extends Component{
	constructor(){
		super();
		this.state = {
			ended: true,
			highscore: 0,
			score: 0,
		}
	}

	addScore(x) {
		this.setState({
			score: this.state.score + x
		});
	}

	newGame(){
		this.setState({
			ended: false,
			score: 0
		})
	}

	endGame(){
		const curScore = this.state.score;
		this.setState({
			ended: true,
			highscore: Math.max(this.state.highscore, curScore)
		});
	}

	render() {
		return <div className="game">
			<Help/>
			<Board
				ended={this.state.ended}
				newGameHandler={() => this.newGame()}
				endGameHandler={() => this.endGame()}
				clearedLines={lines => this.addScore(lines)}
			/>
			<ScoreBoard score={this.state.score} highscore={this.state.highscore}/>
		</div>
	}
} 


export default Game;