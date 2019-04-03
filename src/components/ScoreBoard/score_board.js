import './score_board.scss';
import React from 'react';

const ScoreBoard = ({score, highscore}) => {
	return <div className="score-board">
		<div className="score-label">SCORE</div>
		<div className="score-value">{score}</div>
		<div className="score-label">HIGHSCORE</div>
		<div className="score-value">{highscore}</div>
	</div>;
}


export default ScoreBoard;