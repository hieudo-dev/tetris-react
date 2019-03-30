import React, {Component} from 'react';
import Square from './square';

class Board extends Component{
	rows = 16
	cols = 12

	constructor(props){
		super(props);
		this.state = {
			board: Array(this.rows).fill(Array(this.cols).fill("-"))
		};
	}

	render() {
		return <div className="board">
			{ this.state.board.map(x => x.map(() => <Square color="none"/>)) }
		</div>
	}
} 


export default Board;