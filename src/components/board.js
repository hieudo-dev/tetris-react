import React, {Component} from 'react';
import Square from './square';

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
		const x = this.state.currentPos[0], y = this.state.currentPos[1];
		switch (this.state.type) {
			case "O":
				b[x][y] = b[x+1][y] = b[x][y+1] = b[x+1][y+1] = "yellow";
				break;
			case "T":
				b[x][y] = b[x+1][y] = b[x+1][y-1] = b[x+1][y+1] = "red";
				break;
			case "T1":
				b[x][y] = b[x+1][y] = b[x+2][y] = b[x+1][y+1] = "red";
				break;
			case "T2":
				b[x][y] = b[x][y+1] = b[x][y-1] = b[x+1][y] = "red";
				break;
			case "T3":
				b[x][y] = b[x+1][y] = b[x+2][y] = b[x+1][y-1] = "red";
				break;
			case "L":
				b[x][y] = b[x+1][y] = b[x+2][y] = b[x+2][y+1] = "blue";
				break;
			case "L1":
				b[x][y] = b[x][y+1] = b[x][y-1] = b[x+1][y-1] = "blue";
				break;
			case "L2":
				b[x][y] = b[x][y-1] = b[x+1][y] = b[x+2][y] = "blue";
				break;
			case "L3":
				b[x][y+1] = b[x+1][y+1] = b[x+1][y] = b[x+1][y-1] = "blue";
				break;
			case "Lr":
				b[x][y] = b[x+1][y] = b[x+2][y] = b[x+2][y-1] = "blue";
				break;
			case "Lr1":
				b[x+1][y] = b[x+1][y+1] = b[x+1][y-1] = b[x][y-1] = "blue";
				break;
			case "Lr2":
				b[x][y] = b[x][y+1] = b[x+1][y] = b[x+2][y] = "blue";
				break;
			case "Lr3":
				b[x][y] = b[x][y+1] = b[x][y-1] = b[x+1][y+1] = "blue";
				break;
			case "Z":
				b[x][y] = b[x][y-1] = b[x+1][y] = b[x+1][y+1] = "green";
				break;
			case "Z1":
				b[x][y+1] = b[x+1][y] = b[x+2][y] = b[x+1][y+1] = "green";
				break;
			case "Zr":
				b[x][y] = b[x][y+1] = b[x+1][y] = b[x+1][y-1] = "green";
				break;
			case "Zr1":
				b[x][y] = b[x+1][y] = b[x+1][y+1] = b[x+2][y+1] = "green";
				break;
			case "I":
				b[x][y] = b[x+1][y] = b[x+2][y] = b[x+3][y] = "cyan";
				break;
			case "I1":
				b[x][y] = b[x][y-1] = b[x][y+1] = b[x][y+2] = "cyan";
				break;
			default:
				break;
		}
		return b;
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