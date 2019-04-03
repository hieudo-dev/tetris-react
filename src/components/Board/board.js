import './board.scss';
import React, {Component} from 'react';
import Square from '../Square/square';
import { tetrominoColors, tetrominoSquares, validTetromino, rotatedTetromino, randomTetromino } from "../../utils/tetromino";

class Board extends Component{
	rows = 18
	cols = 12
	itvlId = 0;
	paused = true;
	speed = 250;

	constructor(props){
		super(props);
		this.state = {
			currentPos: [-1, -1],
			type: null,
			board: Array(this.rows).fill(Array(this.cols).fill("none"))
		};
	}

	startGame(){
		this.setState({
			currentPos: [0, 5],
			type: randomTetromino(),
			board: Array(this.rows).fill(Array(this.cols).fill("none"))
		});
		this.props.newGameHandler();
		this.paused = false;
		this.itvlId = setInterval(() => this.dropDown(), this.speed);
	}

	finalBoard(){
		if(this.state.type === null)
			return this.state.board;
		const b = this.state.board.map(x => x.slice());
		tetrominoSquares(this.state.currentPos, this.state.type).map(
			square => b[square[0]][square[1]] = tetrominoColors[this.state.type])
		return b;
	}

	inputHandler(event){
		const type = this.state.type;
		const pos = this.state.currentPos;

		switch(event.keyCode){
			case 37:	// Left
				if(this.paused || this.props.ended)	return;
				if (validTetromino([pos[0], pos[1]-1], type, this.rows, this.cols, this.state.board))
				this.setState({currentPos: [pos[0], pos[1]-1]});
				return;
			case 38: // Up
				if(this.paused || this.props.ended)	return;
				let newType = rotatedTetromino(type);
				if (validTetromino(pos, newType, this.rows, this.cols, this.state.board))
					this.setState({type: newType});
				return;
			case 39: // Right
				if(this.paused || this.props.ended)	return;
				if (validTetromino([pos[0], pos[1]+1], type, this.rows, this.cols, this.state.board))
					this.setState({currentPos: [pos[0], pos[1]+1]});
				return;
			case 40: // Down
				// TODO: Increase drop speed 
				break;
			case 32: // Start/Pause/Restart
				if (this.props.ended)
					return this.startGame();
				if (this.paused)
					this.itvlId = setInterval(() => this.dropDown(), this.speed);
				else
					clearInterval(this.itvlId);
				this.paused = !this.paused;
				break;
			default:
				break;
		}
	}

	dropDown() {
		const cur = this.state.currentPos;
		const type = this.state.type;
		if (validTetromino([cur[0]+1, cur[1]], type, this.rows, this.cols, this.state.board)){
			this.setState({currentPos: [cur[0]+1, cur[1]]});
		}else{
			const board = this.finalBoard();
			let newBoard = [];
			let cleared = 0;

			// Count the amount of cleared lines and build the updated board
			board.map(row => {
				const usedSquares = row.filter(x => x !== "none").length;
				if (usedSquares !== 0 && usedSquares !== this.cols)
					newBoard.push(row);
				else{
					if (usedSquares === this.cols)
						cleared++;
					newBoard.unshift(Array(this.cols).fill("none"));
				}
			});
			
			// Callback to inscrease score
			if(cleared !== 0)
				this.props.clearedLines(cleared);

			const newTetro = randomTetromino();
			if (!validTetromino([0, 5], newTetro, this.rows, this.cols, newBoard)){
				// GAMEOVER
				this.props.endGameHandler();
				clearInterval(this.itvlId);
				this.ended = true;
				return;
			}
			
			this.setState({
				currentPos: [0, 5],
				type: newTetro,
				board: newBoard
			});
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", event => this.inputHandler(event), false);
	}

	render() {
		const board = this.finalBoard();
		return <div className="board">
			{ board.map((row, i) => row.map((color, j) =>
				<Square key={i.toString() + " " + j.toString()} color={color}/>)) }
		</div>
	}
}


export default Board;