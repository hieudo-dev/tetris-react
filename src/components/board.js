import React, {Component} from 'react';
import Square from './square';
import { tetrominoColors, tetrominoSquares, validTetromino, rotatedTetromino } from "./tetromino";

class Board extends Component{
	rows = 18
	cols = 12

	constructor(props){
		super(props);
		this.state = {
			currentPos: [0, 5],
			type: "I1",
			board: Array(this.rows).fill(Array(this.cols).fill("none"))
		};
	}

	finalBoard(){
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
				if (validTetromino([pos[0], pos[1]-1], type, this.rows, this.cols))
					this.setState({currentPos: [pos[0], pos[1]-1]});
				return;
			case 38: // Up
				let newType = rotatedTetromino(type);
				if (validTetromino(pos, newType, this.rows, this.cols))
				{
					this.setState({type: newType});
				}
				return;
			case 39: // Right
				if (validTetromino([pos[0], pos[1]+1], type, this.rows, this.cols))
					this.setState({currentPos: [pos[0], pos[1]+1]});
				return;
			case 40: // Down
				// TODO: Increase drop speed 
				break;
			default:
				break;
		}
	}

	dropDown() {
		const cur = this.state.currentPos;
		const type = this.state.type;
		if (validTetromino([cur[0]+1, cur[1]], type, this.rows, this.cols)){
			this.setState({currentPos: [cur[0]+1, cur[1]]});
		}
	}

	componentDidMount(){
		this.id = setInterval(() => this.dropDown(), 1000);
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