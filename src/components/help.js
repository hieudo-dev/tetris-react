import React from 'react';

const Help = () => {
	return <div className="help">
		<div className="desc-item">
			<span>Space - </span>
			<span className="description">Play/Pause the game</span>
		</div>
		<div className="desc-item">
			<span>Up Arrow - </span>
			<span className="description">Rotate CounterClockwise</span>
		</div>
		<div className="desc-item">
			<span>Left Arrow - </span>
			<span className="description">Move Left</span>
		</div>
		<div className="desc-item">
			<span>Right Arrow - </span>
			<span className="description">Move Right</span>
		</div>
	</div>
}

export default Help;